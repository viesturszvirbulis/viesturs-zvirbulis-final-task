import { test, expect } from '@playwright/test';
import { epic, feature, story, severity, Severity } from 'allure-js-commons';
import { generateUser } from '../utils/testData';
import { ShopHomePage } from '../pages/automationExercise/ShopHomePage'; // TC-001, TC-010 (via fixture)
import { SignupLoginPage } from '../pages/automationExercise/SignupLoginPage'; // TC-001, TC-010 (via fixture)
import { AccountCreationPage } from '../pages/automationExercise/AccountCreationPage'; // TC-001, TC-010 (via fixture)
import { ProductsPage } from '../pages/automationExercise/ProductsPage'; // TC-001, TC-002, TC-003, TC-004, TC-005
import { CartPage } from '../pages/automationExercise/CartPage'; // TC-001, TC-003, TC-004
import { CheckoutPage } from '../pages/automationExercise/CheckoutPage'; // TC-001
import { PaymentPage } from '../pages/automationExercise/PaymentPage'; // TC-001
import { PaymentConfirmationPage } from '../pages/automationExercise/PaymentConfirmationPage'; // TC-001
import { ProductDetailPage } from '../pages/automationExercise/ProductDetailPage'; // TC-005
import { ShopApiClient } from '../utils/shopApiClient'; // TC-006
import { test as authTest } from '../fixtures/authenticatedShopPage';

  test.describe('E-commerce shopping flow', () => {
    test('TC-SHOP-001 full shopping flow', async ({ page }) => {
      await epic('Shopping'); await feature('Checkout');
      await story('Full E2E flow'); await severity(Severity.CRITICAL);

      const user = generateUser();

      const home = new ShopHomePage(page);
      const signup = new SignupLoginPage(page);
      const account = new AccountCreationPage(page);
      const products = new ProductsPage(page);
      const cart = new CartPage(page);
      const checkout = new CheckoutPage(page);
      const payment = new PaymentPage(page);
      const confirmation = new PaymentConfirmationPage(page);

      await home.goto();
      await home.goToSignupLogin();
      await signup.startSignup(user.name, user.email);
      await account.createAccount(user);
      await account.assertAccountCreated();
      await account.clickContinue();
      await home.assertLoggedInAs(user.name);

      await products.goto();
      await products.addFirstProductToCart();
      await page.getByRole('link', { name: 'View Cart' }).click();

      await cart.proceedToCheckout();
      await checkout.assertDeliveryAddressContains(user.address1);
      await checkout.placeOrder();

      await payment.fillCardDetails();
      await payment.confirmPayment();

      await confirmation.assertOrderPlaced();
    });

    test('TC-SHOP-002 keyword search returns matching products', async ({ page }) => {
      await epic('Shopping'); await feature('Product Search');
      await story('Keyword search'); await severity(Severity.NORMAL);

      const products = new ProductsPage(page);

      await products.goto();
      await products.search('dress');

      await expect(products.searchedProductsHeading).toBeVisible();
      await expect(page).toHaveURL(/search=dress/); // another assert to strenghten the test

      const names = await products.getVisibleProductNames();
      expect(names.length).toBeGreaterThan(0);

      // Note: the site's search engine returns some non-matching results ("Sleeves Top and Short - Blue & Pink")
      // so we assert at least one result contains the keyword rather than asserting all do (then test fails)
      expect(names.some(n => n.toLowerCase().includes('dress'))).toBe(true);
    });

    test('TC-SHOP-003 adding multiple products updates item count', async ({ page }) => {
      await epic('Shopping'); await feature('Cart');
      await story('Add multiple products'); await severity(Severity.NORMAL);

      const products = new ProductsPage(page);
      const cart = new CartPage(page);

      await products.goto();

      // Capture product info before adding to cart so assertions are not hardcoded
      const firstCard = products.productCards.first();
      const firstProductName = await firstCard.locator('.productinfo p').textContent();
      const firstProductPrice = await firstCard.locator('.productinfo h2').textContent();

      await products.addFirstProductToCart();
      await page.getByRole('button', { name: 'Continue Shopping' }).click();

      const secondCard = products.productCards.nth(7);
      const secondProductName = await secondCard.locator('.productinfo p').textContent();
      const secondProductPrice = await secondCard.locator('.productinfo h2').textContent();

      await products.addNthProductToCart(7);
      await page.getByRole('link', { name: 'View Cart' }).click();

      // Verify exactly 2 rows
      await cart.assertRowCount(2);

      // Verify correct product names
      const rows = cart.cartRows;
      await expect(rows.nth(0).getByRole('cell', { name: new RegExp(firstProductName!.trim()) })).toBeVisible();
      await expect(rows.nth(1).getByRole('cell', { name: new RegExp(secondProductName!.trim()) })).toBeVisible();

      // Verify quantity is 1 for each
      await expect(rows.nth(0).getByRole('button', { name: '1' })).toBeVisible();
      await expect(rows.nth(1).getByRole('button', { name: '1' })).toBeVisible();

      // Note: cannot assert overall cart total — cart page only shows line totals, not a grand total.
      // Grand total only appears on the checkout page, outside this test's scope.
      await expect(rows.nth(0).locator('td.cart_price')).toContainText(firstProductPrice!.trim());
      await expect(rows.nth(1).locator('td.cart_price')).toContainText(secondProductPrice!.trim());
    });

    test('TC-SHOP-004 removing a product updates the cart', async ({ page }) => {
      await epic('Shopping'); await feature('Cart');
      await story('Remove product'); await severity(Severity.NORMAL);

      const products = new ProductsPage(page);
      const cart = new CartPage(page);

      // Seed: add one product to cart via UI
      await products.goto();
      await products.addFirstProductToCart();
      await page.getByRole('link', { name: 'View Cart' }).click();

      // Verify product is in cart before deleting
      await cart.assertRowCount(1);

      // Delete the product
      await cart.deleteFirstItem();

      // Verify cart is empty and page hasn't navigated away
      await expect(cart.emptyCartMessage).toBeVisible();
      await expect(page).toHaveURL(/view_cart/);
    });

    test('TC-SHOP-005 product detail shows correct data', async ({ page }) => {
      await epic('Shopping'); await feature('Product Detail');
      await story('View product info'); await severity(Severity.MINOR);

      const products = new ProductsPage(page);
      const detail = new ProductDetailPage(page);

      await products.goto();
      await products.clickViewProduct(0);

      await detail.assertProductDetailVisible();
    });

    test('TC-SHOP-006 GET /productsList returns valid list', async ({ request }) => {
      await epic('API'); await feature('Products API');
      await story('List all products'); await severity(Severity.CRITICAL);

      const api = new ShopApiClient(request);
      const body = await api.getProducts();

      // responseCode is in the JSON body, not the HTTP status
      expect(body.responseCode).toBe(200);
      expect(Array.isArray(body.products)).toBe(true);
      expect(body.products.length).toBeGreaterThan(0);

      // Every product has required fields
      for (const product of body.products) {
        expect(product.id).toBeDefined();
        expect(product.name).toBeDefined();
        expect(product.price).toBeDefined();
        expect(product.brand).toBeDefined();
        expect(product.category).toBeDefined();
      }

      // All IDs are unique
      const ids = body.products.map(p => p.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    test('TC-SHOP-007 POST /searchProduct returns matching results', async ({ request }) => {
      await epic('API'); await feature('Products API');
      await story('Search products'); await severity(Severity.NORMAL);

      const api = new ShopApiClient(request);
      const body = await api.searchProducts('top');

      expect(body.responseCode).toBe(200);
      expect(Array.isArray(body.products)).toBe(true);
      expect(body.products.length).toBeGreaterThan(0);

      // Note: the site's search API returns some non-matching results (e.g. "Little Girls Mr. Panda Shirt",
      // "Colour Blocked Shirt – Sky Blue") so we assert at least one result contains the keyword
      // rather than asserting all do, consistent with the approach taken in TC-SHOP-002.
      expect(body.products.some(p => p.name.toLowerCase().includes('top'))).toBe(true);
    });

    test('TC-SHOP-008 POST /searchProduct missing param returns 400', async ({ request }) => {
      await epic('API'); await feature('Products API');
      await story('Missing parameter'); await severity(Severity.MINOR);

      const response = await request.post('https://automationexercise.com/api/searchProduct', {
        form: {},
      });

      const body = JSON.parse(await response.text());

      // responseCode is in the JSON body, not the HTTP status
      expect(body.responseCode).toBe(400);
      expect(body.message).toBeDefined();
    });

    test('TC-SHOP-009 footer subscription shows success', async ({ page }) => {
      await epic('Marketing'); await feature('Newsletter');
      await story('Footer subscription'); await severity(Severity.MINOR);

      const home = new ShopHomePage(page);
      await home.goto();

      const emailInput = page.getByRole('textbox', { name: 'Your email address' });
      const subscribeButton = page.locator('#subscribe');
      const successMessage = page.getByText('You have been successfully subscribed!');

      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await emailInput.fill('testsubscriber@gmail.com');
      await subscribeButton.click();

      // Wait strategy: toBeVisible() on the success alert
      await expect(successMessage).toBeVisible();

      // Verify input is cleared after successful subscription
      await expect(emailInput).toHaveValue('');
    });

    authTest('TC-SHOP-010 logged-in user redirected from login', async ({ authenticatedShopPage }) => {
      await epic('Auth'); await feature('Session');
      await story('Redirect logged-in user'); await severity(Severity.MINOR);

      await authenticatedShopPage.goto('/login');
      // Wait strategy: page.waitForURL() for redirect assertion
      await authenticatedShopPage.waitForURL('/', { timeout: 5000 }).catch(() => null);

      await expect(authenticatedShopPage).toHaveURL('/');
      await expect(authenticatedShopPage.getByText(/Logged in as/)).toBeVisible();
    });
});