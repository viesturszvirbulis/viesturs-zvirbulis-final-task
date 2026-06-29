# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finalTask.spec.ts >> E-commerce shopping flow >> TC-SHOP-002 keyword search returns matching products
- Location: tests/finalTask.spec.ts:53:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Searched Products' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Searched Products' })

```

```yaml
- heading "This page isn’t working" [level=1]
- paragraph:
  - strong: automationexercise.com
  - text: is currently unable to handle this request.
- text: HTTP ERROR 500
- button "Reload"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { epic, feature, story, severity, Severity } from 'allure-js-commons';
  3   | import { generateUser } from '../utils/testData';
  4   | import { ShopHomePage } from '../pages/automationExercise/ShopHomePage'; // TC-001, TC-010 (via fixture)
  5   | import { SignupLoginPage } from '../pages/automationExercise/SignupLoginPage'; // TC-001, TC-010 (via fixture)
  6   | import { AccountCreationPage } from '../pages/automationExercise/AccountCreationPage'; // TC-001, TC-010 (via fixture)
  7   | import { ProductsPage } from '../pages/automationExercise/ProductsPage'; // TC-001, TC-002, TC-003, TC-004, TC-005
  8   | import { CartPage } from '../pages/automationExercise/CartPage'; // TC-001, TC-003, TC-004
  9   | import { CheckoutPage } from '../pages/automationExercise/CheckoutPage'; // TC-001
  10  | import { PaymentPage } from '../pages/automationExercise/PaymentPage'; // TC-001
  11  | import { PaymentConfirmationPage } from '../pages/automationExercise/PaymentConfirmationPage'; // TC-001
  12  | import { ProductDetailPage } from '../pages/automationExercise/ProductDetailPage'; // TC-005
  13  | import { ShopApiClient } from '../utils/shopApiClient'; // TC-006
  14  | 
  15  |   test.describe('E-commerce shopping flow', () => {
  16  |     test('TC-SHOP-001 full shopping flow', async ({ page }) => {
  17  |       await epic('Shopping'); await feature('Checkout');
  18  |       await story('Full E2E flow'); await severity(Severity.CRITICAL);
  19  | 
  20  |       const user = generateUser();
  21  | 
  22  |       const home = new ShopHomePage(page);
  23  |       const signup = new SignupLoginPage(page);
  24  |       const account = new AccountCreationPage(page);
  25  |       const products = new ProductsPage(page);
  26  |       const cart = new CartPage(page);
  27  |       const checkout = new CheckoutPage(page);
  28  |       const payment = new PaymentPage(page);
  29  |       const confirmation = new PaymentConfirmationPage(page);
  30  | 
  31  |       await home.goto();
  32  |       await home.goToSignupLogin();
  33  |       await signup.startSignup(user.name, user.email);
  34  |       await account.createAccount(user);
  35  |       await account.assertAccountCreated();
  36  |       await account.clickContinue();
  37  |       await home.assertLoggedInAs(user.name);
  38  | 
  39  |       await products.goto();
  40  |       await products.addFirstProductToCart();
  41  |       await page.getByRole('link', { name: 'View Cart' }).click();
  42  | 
  43  |       await cart.proceedToCheckout();
  44  |       await checkout.assertDeliveryAddressContains(user.address1);
  45  |       await checkout.placeOrder();
  46  | 
  47  |       await payment.fillCardDetails();
  48  |       await payment.confirmPayment();
  49  | 
  50  |       await confirmation.assertOrderPlaced();
  51  |     });
  52  | 
  53  |     test('TC-SHOP-002 keyword search returns matching products', async ({ page }) => {
  54  |       await epic('Shopping'); await feature('Product Search');
  55  |       await story('Keyword search'); await severity(Severity.NORMAL);
  56  | 
  57  |       const products = new ProductsPage(page);
  58  | 
  59  |       await products.goto();
  60  |       await products.search('dress');
  61  | 
> 62  |       await expect(products.searchedProductsHeading).toBeVisible();
      |                                                      ^ Error: expect(locator).toBeVisible() failed
  63  |       await expect(page).toHaveURL(/search=dress/); // another assert to strenghten the test
  64  | 
  65  |       const names = await products.getVisibleProductNames();
  66  |       expect(names.length).toBeGreaterThan(0);
  67  | 
  68  |       // Note: the site's search engine returns some non-matching results ("Sleeves Top and Short - Blue & Pink")
  69  |       // so we assert at least one result contains the keyword rather than asserting all do (then test fails)
  70  |       expect(names.some(n => n.toLowerCase().includes('dress'))).toBe(true);
  71  |     });
  72  | 
  73  |     test('TC-SHOP-003 adding multiple products updates item count', async ({ page }) => {
  74  |       await epic('Shopping'); await feature('Cart');
  75  |       await story('Add multiple products'); await severity(Severity.NORMAL);
  76  | 
  77  |       const products = new ProductsPage(page);
  78  |       const cart = new CartPage(page);
  79  | 
  80  |       await products.goto();
  81  | 
  82  |       // Capture product info before adding to cart so assertions are not hardcoded
  83  |       const firstCard = products.productCards.first();
  84  |       const firstProductName = await firstCard.locator('.productinfo p').textContent();
  85  |       const firstProductPrice = await firstCard.locator('.productinfo h2').textContent();
  86  | 
  87  |       await products.addFirstProductToCart();
  88  |       await page.getByRole('button', { name: 'Continue Shopping' }).click();
  89  | 
  90  |       const secondCard = products.productCards.nth(7);
  91  |       const secondProductName = await secondCard.locator('.productinfo p').textContent();
  92  |       const secondProductPrice = await secondCard.locator('.productinfo h2').textContent();
  93  | 
  94  |       await products.addNthProductToCart(7);
  95  |       await page.getByRole('link', { name: 'View Cart' }).click();
  96  | 
  97  |       // Verify exactly 2 rows
  98  |       await cart.assertRowCount(2);
  99  | 
  100 |       // Verify correct product names
  101 |       const rows = cart.cartRows;
  102 |       await expect(rows.nth(0).getByRole('cell', { name: new RegExp(firstProductName!.trim()) })).toBeVisible();
  103 |       await expect(rows.nth(1).getByRole('cell', { name: new RegExp(secondProductName!.trim()) })).toBeVisible();
  104 | 
  105 |       // Verify quantity is 1 for each
  106 |       await expect(rows.nth(0).getByRole('button', { name: '1' })).toBeVisible();
  107 |       await expect(rows.nth(1).getByRole('button', { name: '1' })).toBeVisible();
  108 | 
  109 |       // Note: cannot assert overall cart total — cart page only shows line totals, not a grand total.
  110 |       // Grand total only appears on the checkout page, outside this test's scope.
  111 |       await expect(rows.nth(0).locator('td.cart_price')).toContainText(firstProductPrice!.trim());
  112 |       await expect(rows.nth(1).locator('td.cart_price')).toContainText(secondProductPrice!.trim());
  113 |     });
  114 | 
  115 |     test('TC-SHOP-004 removing a product updates the cart', async ({ page }) => {
  116 |       await epic('Shopping'); await feature('Cart');
  117 |       await story('Remove product'); await severity(Severity.NORMAL);
  118 | 
  119 |       const products = new ProductsPage(page);
  120 |       const cart = new CartPage(page);
  121 | 
  122 |       // Seed: add one product to cart via UI
  123 |       await products.goto();
  124 |       await products.addFirstProductToCart();
  125 |       await page.getByRole('link', { name: 'View Cart' }).click();
  126 | 
  127 |       // Verify product is in cart before deleting
  128 |       await cart.assertRowCount(1);
  129 | 
  130 |       // Delete the product
  131 |       await cart.deleteFirstItem();
  132 | 
  133 |       // Verify cart is empty and page hasn't navigated away
  134 |       await expect(cart.emptyCartMessage).toBeVisible();
  135 |       await expect(page).toHaveURL(/view_cart/);
  136 |     });
  137 | 
  138 |     test('TC-SHOP-005 product detail shows correct data', async ({ page }) => {
  139 |       await epic('Shopping'); await feature('Product Detail');
  140 |       await story('View product info'); await severity(Severity.MINOR);
  141 | 
  142 |       const products = new ProductsPage(page);
  143 |       const detail = new ProductDetailPage(page);
  144 | 
  145 |       await products.goto();
  146 |       await products.clickViewProduct(0);
  147 | 
  148 |       await detail.assertProductDetailVisible();
  149 |     });
  150 | 
  151 |     test('TC-SHOP-006 GET /productsList returns valid list', async ({ request }) => {
  152 |       await epic('API'); await feature('Products API');
  153 |       await story('List all products'); await severity(Severity.CRITICAL);
  154 | 
  155 |       const api = new ShopApiClient(request);
  156 |       const body = await api.getProducts();
  157 | 
  158 |       // responseCode is in the JSON body, not the HTTP status
  159 |       expect(body.responseCode).toBe(200);
  160 |       expect(Array.isArray(body.products)).toBe(true);
  161 |       expect(body.products.length).toBeGreaterThan(0);
  162 | 
```