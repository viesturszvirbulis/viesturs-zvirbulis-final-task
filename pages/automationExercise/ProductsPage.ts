import { Locator, Page } from '@playwright/test';
import { BaseShopPage } from './BaseShopPage';

export class ProductsPage extends BaseShopPage { //TC-001, TC-002, TC-003, TC-004, TC-005
  readonly productCards: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchedProductsHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.productCards = page.locator('.single-products');
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.searchedProductsHeading = page.getByRole('heading', { name: 'Searched Products' });
  }

  async goto() {
    await this.page.goto('/products');
    const consentButton = this.page.getByRole('button', { name: 'Consent' }); // added to accept cookies
    if (await consentButton.isVisible({ timeout: 3000 }).catch(() => false)) {
      await consentButton.click();
    }
    // Wait strategy: toBeVisible() on first product card instead of waitForResponse on
    // /api/productsList — the site does not make this API call on page load in the browser
    await this.productCards.first().waitFor({ state: 'visible' });
  }

  async addFirstProductToCart() {
    await this.page.evaluate(() => window.scrollTo(0, 300)); // The first product is already near the top on page load, so scrolling near top to dodge top ad
    await this.productCards.first().hover();
    await this.productCards.first().locator('.product-overlay a.add-to-cart').click();
    await this.page.locator('#cartModal').waitFor({ state: 'visible' });
  }

  async addNthProductToCart(index: number) {
    await this.productCards.nth(index).scrollIntoViewIfNeeded();
    await this.page.evaluate(() => window.scrollBy(0, -100)); // Scroll the viewport up slightly after scrolling to the element, moving away from the bottom ad
    await this.productCards.nth(index).hover();
    await this.productCards.nth(index).locator('.product-overlay a.add-to-cart').click();
    await this.page.locator('#cartModal').waitFor({ state: 'visible' });
  }

  async search(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchButton.click();
  }

  async getVisibleProductNames(): Promise<string[]> {
    const names = this.productCards.locator('.productinfo p');
    return names.allTextContents();
  }

  async clickViewProduct(index = 0) {
    await this.page.locator('.choose a').nth(index).click();
  }
}