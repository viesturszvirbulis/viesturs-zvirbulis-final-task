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

Locator: locator('#cart_info_table tbody tr').first().getByText('Rs. 500')
Expected: visible
Error: strict mode violation: locator('#cart_info_table tbody tr').first().getByText('Rs. 500') resolved to 2 elements:
    1) <p>Rs. 500</p> aka getByText('Rs.').first()
    2) <p class="cart_total_price">Rs. 500</p> aka getByText('Rs.').nth(1)

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#cart_info_table tbody tr').first().getByText('Rs. 500')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e38]:
    - list [ref=e40]:
      - listitem [ref=e41]:
        - link "Home" [ref=e42] [cursor=pointer]:
          - /url: /
      - listitem [ref=e43]: Shopping Cart
    - generic [ref=e48] [cursor=pointer]: Proceed To Checkout
    - table [ref=e50]:
      - rowgroup [ref=e51]:
        - row "Item Description Price Quantity Total" [ref=e52]:
          - cell "Item" [ref=e53]
          - cell "Description" [ref=e54]
          - cell "Price" [ref=e55]
          - cell "Quantity" [ref=e56]
          - cell "Total" [ref=e57]
          - cell [ref=e58]
      - rowgroup [ref=e59]:
        - row "Product Image Blue Top Women > Tops Rs. 500 1 Rs. 500 " [ref=e60]:
          - cell "Product Image" [ref=e61]:
            - link "Product Image" [ref=e62] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e63]
          - cell "Blue Top Women > Tops" [ref=e64]:
            - heading "Blue Top" [level=4] [ref=e65]:
              - link "Blue Top" [ref=e66] [cursor=pointer]:
                - /url: /product_details/1
            - paragraph [ref=e67]: Women > Tops
          - cell "Rs. 500" [ref=e68]:
            - paragraph [ref=e69]: Rs. 500
          - cell "1" [ref=e70]:
            - button "1" [ref=e71] [cursor=pointer]
          - cell "Rs. 500" [ref=e72]:
            - paragraph [ref=e73]: Rs. 500
          - cell "" [ref=e74]:
            - generic [ref=e76] [cursor=pointer]: 
        - row "Product Image Fancy Green Top Women > Tops Rs. 700 1 Rs. 700 " [ref=e77]:
          - cell "Product Image" [ref=e78]:
            - link "Product Image" [ref=e79] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e80]
          - cell "Fancy Green Top Women > Tops" [ref=e81]:
            - heading "Fancy Green Top" [level=4] [ref=e82]:
              - link "Fancy Green Top" [ref=e83] [cursor=pointer]:
                - /url: /product_details/8
            - paragraph [ref=e84]: Women > Tops
          - cell "Rs. 700" [ref=e85]:
            - paragraph [ref=e86]: Rs. 700
          - cell "1" [ref=e87]:
            - button "1" [ref=e88] [cursor=pointer]
          - cell "Rs. 700" [ref=e89]:
            - paragraph [ref=e90]: Rs. 700
          - cell "" [ref=e91]:
            - generic [ref=e93] [cursor=pointer]: 
  - contentinfo [ref=e94]:
    - generic [ref=e99]:
      - heading "Subscription" [level=2] [ref=e100]
      - generic [ref=e101]:
        - textbox "Your email address" [ref=e102]
        - button "" [ref=e103] [cursor=pointer]:
          - generic [ref=e104]: 
        - paragraph [ref=e105]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e109]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
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
  92  |       // Verify correct product names
  93  |       const rows = cart.cartRows;
  94  |       await expect(rows.nth(0).getByRole('cell', { name: /Blue Top/ })).toBeVisible();
  95  |       await expect(rows.nth(1).getByRole('cell', { name: /Fancy Green Top/ })).toBeVisible();
  96  | 
  97  |       // Verify quantity is 1 for each
  98  |       await expect(rows.nth(0).getByRole('button', { name: '1' })).toBeVisible();
  99  |       await expect(rows.nth(1).getByRole('button', { name: '1' })).toBeVisible();
  100 | 
  101 |       // Note: the cart page does not display an overall total — only individual line totals are shown
  102 |       // Overall total only appears after proceeding to checkout, which is outside this test's scope
  103 |       // Verifying individual line totals instead.
> 104 |       await expect(rows.nth(0).getByText('Rs. 500')).toBeVisible();
      |                                                      ^ Error: expect(locator).toBeVisible() failed
  105 |       await expect(rows.nth(1).getByText('Rs. 700')).toBeVisible();
  106 |     });
  107 | 
  108 |   test('TC-SHOP-004 removing a product updates the cart', async () => {
  109 |     await epic('Shopping'); await feature('Cart');
  110 |     await story('Remove product'); await severity(Severity.NORMAL);
  111 |     // TODO
  112 |   });
  113 | 
  114 |   test('TC-SHOP-005 product detail shows correct data', async () => {
  115 |     await epic('Shopping'); await feature('Product Detail');
  116 |     await story('View product info'); await severity(Severity.MINOR);
  117 |     // TODO
  118 |   });
  119 | 
  120 |   test('TC-SHOP-006 GET /productsList returns valid list', async () => {
  121 |     await epic('API'); await feature('Products API');
  122 |     await story('List all products'); await severity(Severity.CRITICAL);
  123 |     // TODO
  124 |   });
  125 | 
  126 |   test('TC-SHOP-007 POST /searchProduct returns matching results', async () => {
  127 |     await epic('API'); await feature('Products API');
  128 |     await story('Search products'); await severity(Severity.NORMAL);
  129 |     // TODO
  130 |   });
  131 | 
  132 |   test('TC-SHOP-008 POST /searchProduct missing param returns 400', async () => {
  133 |     await epic('API'); await feature('Products API');
  134 |     await story('Missing parameter'); await severity(Severity.MINOR);
  135 |     // TODO
  136 |   });
  137 | 
  138 |   test('TC-SHOP-009 footer subscription shows success', async () => {
  139 |     await epic('Marketing'); await feature('Newsletter');
  140 |     await story('Footer subscription'); await severity(Severity.MINOR);
  141 |     // TODO
  142 |   });
  143 | 
  144 |   test('TC-SHOP-010 logged-in user redirected from login', async () => {
  145 |     await epic('Auth'); await feature('Session');
  146 |     await story('Redirect logged-in user'); await severity(Severity.MINOR);
  147 |     // TODO
  148 |   });
  149 | });
```