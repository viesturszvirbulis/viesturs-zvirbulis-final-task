import { test, expect } from '@playwright/test';
import { epic, feature, story, severity, Severity } from 'allure-js-commons';
import { generateUser } from '../utils/testData';
import { ShopHomePage } from '../pages/automationExercise/ShopHomePage';
import { SignupLoginPage } from '../pages/automationExercise/SignupLoginPage';
import { AccountCreationPage } from '../pages/automationExercise/AccountCreationPage';
import { ProductsPage } from '../pages/automationExercise/ProductsPage';
import { CartPage } from '../pages/automationExercise/CartPage';
import { CheckoutPage } from '../pages/automationExercise/CheckoutPage';
import { PaymentPage } from '../pages/automationExercise/PaymentPage';
import { PaymentConfirmationPage } from '../pages/automationExercise/PaymentConfirmationPage';
// import { ProductDetailPage } from '../pages/automationExercise/ProductDetailPage';

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

  test('TC-SHOP-004 removing a product updates the cart', async () => {
    await epic('Shopping'); await feature('Cart');
    await story('Remove product'); await severity(Severity.NORMAL);
    // TODO
  });

  test('TC-SHOP-005 product detail shows correct data', async () => {
    await epic('Shopping'); await feature('Product Detail');
    await story('View product info'); await severity(Severity.MINOR);
    // TODO
  });

  test('TC-SHOP-006 GET /productsList returns valid list', async () => {
    await epic('API'); await feature('Products API');
    await story('List all products'); await severity(Severity.CRITICAL);
    // TODO
  });

  test('TC-SHOP-007 POST /searchProduct returns matching results', async () => {
    await epic('API'); await feature('Products API');
    await story('Search products'); await severity(Severity.NORMAL);
    // TODO
  });

  test('TC-SHOP-008 POST /searchProduct missing param returns 400', async () => {
    await epic('API'); await feature('Products API');
    await story('Missing parameter'); await severity(Severity.MINOR);
    // TODO
  });

  test('TC-SHOP-009 footer subscription shows success', async () => {
    await epic('Marketing'); await feature('Newsletter');
    await story('Footer subscription'); await severity(Severity.MINOR);
    // TODO
  });

  test('TC-SHOP-010 logged-in user redirected from login', async () => {
    await epic('Auth'); await feature('Session');
    await story('Redirect logged-in user'); await severity(Severity.MINOR);
    // TODO
  });
});