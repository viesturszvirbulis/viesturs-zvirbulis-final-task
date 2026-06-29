# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finalTask.spec.ts >> E-commerce shopping flow >> TC-SHOP-003 adding multiple products updates item count
- Location: tests/finalTask.spec.ts:74:9

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('.single-products').first().locator('.product-overlay a.add-to-cart')
    - locator resolved to <a data-product-id="1" class="btn btn-default add-to-cart">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="features_items">…</div> intercepts pointer events
  - retrying click action
    - waiting 100ms
    7 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <h2 class="title text-center">All Products</h2> intercepts pointer events
    - retrying click action
      - waiting 500ms

```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | import { BaseShopPage } from './BaseShopPage';
  3  | 
  4  | export class ProductsPage extends BaseShopPage { //TC-001, TC-002, TC-003, TC-004, TC-005
  5  |   readonly productCards: Locator;
  6  |   readonly searchInput: Locator;
  7  |   readonly searchButton: Locator;
  8  |   readonly searchedProductsHeading: Locator;
  9  | 
  10 |   constructor(page: Page) {
  11 |     super(page);
  12 |     this.productCards = page.locator('.single-products');
  13 |     this.searchInput = page.locator('#search_product');
  14 |     this.searchButton = page.locator('#submit_search');
  15 |     this.searchedProductsHeading = page.getByRole('heading', { name: 'Searched Products' });
  16 |   }
  17 | 
  18 |   async goto() {
  19 |     await this.page.goto('/products');
  20 |     const consentButton = this.page.getByRole('button', { name: 'Consent' }); // added to accept cookies
  21 |     if (await consentButton.isVisible({ timeout: 3000 }).catch(() => false)) {
  22 |       await consentButton.click();
  23 |     }
  24 |     // Wait strategy: toBeVisible() on first product card instead of waitForResponse on
  25 |     // /api/productsList — the site does not make this API call on page load in the browser
  26 |     await this.productCards.first().waitFor({ state: 'visible' });
  27 |   }
  28 | 
  29 |   async addFirstProductToCart() {
  30 |     await this.page.evaluate(() => window.scrollTo(0, 300)); // The first product is already near the top on page load, so scrolling near top to dodge top ad
  31 |     await this.productCards.first().hover();
> 32 |     await this.productCards.first().locator('.product-overlay a.add-to-cart').click();
     |                                                                               ^ Error: locator.click: Test ended.
  33 |     await this.page.locator('#cartModal').waitFor({ state: 'visible' });
  34 |   }
  35 | 
  36 |   async addNthProductToCart(index: number) {
  37 |     await this.productCards.nth(index).scrollIntoViewIfNeeded();
  38 |     await this.page.evaluate(() => window.scrollBy(0, -100)); // Scroll the viewport up slightly after scrolling to the element, moving away from the bottom ad
  39 |     await this.productCards.nth(index).hover();
  40 |     await this.productCards.nth(index).locator('.product-overlay a.add-to-cart').click();
  41 |     await this.page.locator('#cartModal').waitFor({ state: 'visible' });
  42 |   }
  43 | 
  44 |   async search(keyword: string) {
  45 |     await this.searchInput.fill(keyword);
  46 |     await this.searchButton.click();
  47 |   }
  48 | 
  49 |   async getVisibleProductNames(): Promise<string[]> {
  50 |     const names = this.productCards.locator('.productinfo p');
  51 |     return names.allTextContents();
  52 |   }
  53 | 
  54 |   async clickViewProduct(index = 0) {
  55 |     await this.page.locator('.choose a').nth(index).click();
  56 |   }
  57 | }
```