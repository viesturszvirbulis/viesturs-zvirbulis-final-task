# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finalTask.spec.ts >> E-commerce shopping flow >> TC-SHOP-005 product detail shows correct data
- Location: tests/finalTask.spec.ts:139:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.product-information h2')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.product-information h2')

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
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | import { BaseShopPage } from './BaseShopPage';
  3  | 
  4  | export class ProductDetailPage extends BaseShopPage { //TC-05
  5  |   readonly productName: Locator;
  6  |   readonly category: Locator;
  7  |   readonly price: Locator;
  8  |   readonly availability: Locator;
  9  |   readonly condition: Locator;
  10 |   readonly brand: Locator;
  11 |   readonly addToCartButton: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 |     super(page);
  15 |     this.productName = page.locator('.product-information h2');
  16 |     this.category = page.locator('.product-information p').filter({ hasText: 'Category' });
  17 |     this.price = page.locator('.product-information span span');
  18 |     this.availability = page.locator('.product-information p').filter({ hasText: 'Availability' });
  19 |     this.condition = page.locator('.product-information p').filter({ hasText: 'Condition' });
  20 |     this.brand = page.locator('.product-information p').filter({ hasText: 'Brand' });
  21 |     this.addToCartButton = page.locator('.product-information button.cart');
  22 |   }
  23 | 
  24 |   async assertProductDetailVisible() {
> 25 |     await expect(this.productName).toBeVisible();
     |                                    ^ Error: expect(locator).toBeVisible() failed
  26 |     await expect(this.productName).not.toHaveText('');
  27 |     await expect(this.category).toBeVisible();
  28 |     await expect(this.price).toBeVisible();
  29 |     await expect(this.availability).toBeVisible();
  30 |     await expect(this.condition).toBeVisible();
  31 |     await expect(this.brand).toBeVisible();
  32 |     await expect(this.addToCartButton).toBeVisible();
  33 |   }
  34 | }
```