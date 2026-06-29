# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finalTask.spec.ts >> E-commerce shopping flow >> TC-SHOP-003 adding multiple products updates item count
- Location: tests/finalTask.spec.ts:72:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('cell', { name: 'Total Amount' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('cell', { name: 'Total Amount' })

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- list:
  - listitem:
    - link "Home":
      - /url: /
  - listitem: Shopping Cart
- text: Proceed To Checkout 
- heading "Checkout" [level=4]
- paragraph: Register / Login account to proceed on checkout.
- paragraph:
  - link "Register / Login":
    - /url: /login
- button "Continue On Cart"
- table:
  - rowgroup:
    - row "Item Description Price Quantity Total":
      - cell "Item"
      - cell "Description"
      - cell "Price"
      - cell "Quantity"
      - cell "Total"
      - cell
  - rowgroup:
    - row "Product Image Blue Top Women > Tops Rs. 500 1 Rs. 500 ":
      - cell "Product Image":
        - link "Product Image":
          - /url: ""
          - img "Product Image"
      - cell "Blue Top Women > Tops":
        - heading "Blue Top" [level=4]:
          - link "Blue Top":
            - /url: /product_details/1
        - paragraph: Women > Tops
      - cell "Rs. 500":
        - paragraph: Rs. 500
      - cell "1":
        - button "1"
      - cell "Rs. 500":
        - paragraph: Rs. 500
      - cell ""
    - row "Product Image Fancy Green Top Women > Tops Rs. 700 1 Rs. 700 ":
      - cell "Product Image":
        - link "Product Image":
          - /url: ""
          - img "Product Image"
      - cell "Fancy Green Top Women > Tops":
        - heading "Fancy Green Top" [level=4]:
          - link "Fancy Green Top":
            - /url: /product_details/8
        - paragraph: Women > Tops
      - cell "Rs. 700":
        - paragraph: Rs. 700
      - cell "1":
        - button "1"
      - cell "Rs. 700":
        - paragraph: Rs. 700
      - cell ""
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
- button "Privacy and cookie settings"
- text: "Managed by Google. Complies with IAB TCF. CMP ID: 300"
```

# Test source

```ts
  3   | import { generateUser } from '../utils/testData';
  4   | import { ShopHomePage } from '../pages/automationExercise/ShopHomePage';
  5   | import { SignupLoginPage } from '../pages/automationExercise/SignupLoginPage';
  6   | import { AccountCreationPage } from '../pages/automationExercise/AccountCreationPage';
  7   | import { ProductsPage } from '../pages/automationExercise/ProductsPage';
  8   | import { CartPage } from '../pages/automationExercise/CartPage';
  9   | import { CheckoutPage } from '../pages/automationExercise/CheckoutPage';
  10  | import { PaymentPage } from '../pages/automationExercise/PaymentPage';
  11  | import { PaymentConfirmationPage } from '../pages/automationExercise/PaymentConfirmationPage';
  12  | // import { ProductDetailPage } from '../pages/automationExercise/ProductDetailPage';
  13  | 
  14  |   test.describe('E-commerce shopping flow', () => {
  15  |     test('TC-SHOP-001 full shopping flow', async ({ page }) => {
  16  |       await epic('Shopping'); await feature('Checkout');
  17  |       await story('Full E2E flow'); await severity(Severity.CRITICAL);
  18  | 
  19  |       const user = generateUser();
  20  | 
  21  |       const home = new ShopHomePage(page);
  22  |       const signup = new SignupLoginPage(page);
  23  |       const account = new AccountCreationPage(page);
  24  |       const products = new ProductsPage(page);
  25  |       const cart = new CartPage(page);
  26  |       const checkout = new CheckoutPage(page);
  27  |       const payment = new PaymentPage(page);
  28  |       const confirmation = new PaymentConfirmationPage(page);
  29  | 
  30  |       await home.goto();
  31  |       await home.goToSignupLogin();
  32  |       await signup.startSignup(user.name, user.email);
  33  |       await account.createAccount(user);
  34  |       await account.assertAccountCreated();
  35  |       await account.clickContinue();
  36  |       await home.assertLoggedInAs(user.name);
  37  | 
  38  |       await products.goto();
  39  |       await products.addFirstProductToCart();
  40  |       await page.getByRole('link', { name: 'View Cart' }).click();
  41  | 
  42  |       await cart.proceedToCheckout();
  43  |       await checkout.assertDeliveryAddressContains(user.address1);
  44  |       await checkout.placeOrder();
  45  | 
  46  |       await payment.fillCardDetails();
  47  |       await payment.confirmPayment();
  48  | 
  49  |       await confirmation.assertOrderPlaced();
  50  |     });
  51  | 
  52  |     test('TC-SHOP-002 keyword search returns matching products', async ({ page }) => {
  53  |       await epic('Shopping'); await feature('Product Search');
  54  |       await story('Keyword search'); await severity(Severity.NORMAL);
  55  | 
  56  |       const products = new ProductsPage(page);
  57  | 
  58  |       await products.goto();
  59  |       await products.search('dress');
  60  | 
  61  |       await expect(products.searchedProductsHeading).toBeVisible();
  62  |       await expect(page).toHaveURL(/search=dress/); // another assert to strenghten the test
  63  | 
  64  |       const names = await products.getVisibleProductNames();
  65  |       expect(names.length).toBeGreaterThan(0);
  66  | 
  67  |       // Note: the site's search engine returns some non-matching results ("Sleeves Top and Short - Blue & Pink")
  68  |       // so we assert at least one result contains the keyword rather than asserting all do (then test fails)
  69  |       expect(names.some(n => n.toLowerCase().includes('dress'))).toBe(true);
  70  |     });
  71  | 
  72  |     test('TC-SHOP-003 adding multiple products updates item count', async ({ page }) => {
  73  |       await epic('Shopping'); await feature('Cart');
  74  |       await story('Add multiple products'); await severity(Severity.NORMAL);
  75  | 
  76  |       const products = new ProductsPage(page);
  77  |       const cart = new CartPage(page);
  78  | 
  79  |       await products.goto();
  80  | 
  81  |       // Add first product (Blue Top)
  82  |       await products.addFirstProductToCart();
  83  |       await page.getByRole('button', { name: 'Continue Shopping' }).click();
  84  | 
  85  |       // Add second product (index 7 = Fancy Green Top)
  86  |       await products.addNthProductToCart(7);
  87  |       await page.getByRole('link', { name: 'View Cart' }).click();
  88  | 
  89  |       // Verify exactly 2 rows
  90  |       await cart.assertRowCount(2);
  91  | 
  92  |       // Verify correct product names, quantity 1, and prices
  93  |       const rows = cart.cartRows;
  94  |       await expect(rows.nth(0).getByRole('cell', { name: /Blue Top/ })).toBeVisible();
  95  |       await expect(rows.nth(1).getByRole('cell', { name: /Fancy Green Top/ })).toBeVisible();
  96  | 
  97  |       // Verify quantity is 1 for each
  98  |       await expect(rows.nth(0).getByRole('button', { name: '1' })).toBeVisible();
  99  |       await expect(rows.nth(1).getByRole('button', { name: '1' })).toBeVisible();
  100 | 
  101 |       // Verify total equals sum of both prices (500 + 700 = 1200)
  102 |       await cart.proceedToCheckout();
> 103 |       await expect(page.getByRole('cell', { name: 'Total Amount' })).toBeVisible();
      |                                                                      ^ Error: expect(locator).toBeVisible() failed
  104 |       await expect(page.locator('#cart_info_table').getByText('Rs. 1200')).toBeVisible();
  105 |     });
  106 | 
  107 |   test('TC-SHOP-004 removing a product updates the cart', async () => {
  108 |     await epic('Shopping'); await feature('Cart');
  109 |     await story('Remove product'); await severity(Severity.NORMAL);
  110 |     // TODO
  111 |   });
  112 | 
  113 |   test('TC-SHOP-005 product detail shows correct data', async () => {
  114 |     await epic('Shopping'); await feature('Product Detail');
  115 |     await story('View product info'); await severity(Severity.MINOR);
  116 |     // TODO
  117 |   });
  118 | 
  119 |   test('TC-SHOP-006 GET /productsList returns valid list', async () => {
  120 |     await epic('API'); await feature('Products API');
  121 |     await story('List all products'); await severity(Severity.CRITICAL);
  122 |     // TODO
  123 |   });
  124 | 
  125 |   test('TC-SHOP-007 POST /searchProduct returns matching results', async () => {
  126 |     await epic('API'); await feature('Products API');
  127 |     await story('Search products'); await severity(Severity.NORMAL);
  128 |     // TODO
  129 |   });
  130 | 
  131 |   test('TC-SHOP-008 POST /searchProduct missing param returns 400', async () => {
  132 |     await epic('API'); await feature('Products API');
  133 |     await story('Missing parameter'); await severity(Severity.MINOR);
  134 |     // TODO
  135 |   });
  136 | 
  137 |   test('TC-SHOP-009 footer subscription shows success', async () => {
  138 |     await epic('Marketing'); await feature('Newsletter');
  139 |     await story('Footer subscription'); await severity(Severity.MINOR);
  140 |     // TODO
  141 |   });
  142 | 
  143 |   test('TC-SHOP-010 logged-in user redirected from login', async () => {
  144 |     await epic('Auth'); await feature('Session');
  145 |     await story('Redirect logged-in user'); await severity(Severity.MINOR);
  146 |     // TODO
  147 |   });
  148 | });
```