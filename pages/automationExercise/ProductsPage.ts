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
  }

  async addFirstProductToCart() {
    await this.productCards.first().scrollIntoViewIfNeeded();
    await this.productCards.first().hover();
    await this.productCards.first().locator('.product-overlay a.add-to-cart').click(); 
    await this.page.locator('#cartModal').waitFor({ state: 'visible' });  // Wait for the cart modal to confirm the item was added before proceeding
  }

  async addNthProductToCart(index: number) {
    await this.productCards.nth(index).scrollIntoViewIfNeeded();
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