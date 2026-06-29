import { expect, Locator, Page } from '@playwright/test';
import { BaseShopPage } from './BaseShopPage';

export class ProductDetailPage extends BaseShopPage { //TC-05
  readonly productName: Locator;
  readonly category: Locator;
  readonly price: Locator;
  readonly availability: Locator;
  readonly condition: Locator;
  readonly brand: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    super(page);
    this.productName = page.locator('.product-information h2');
    this.category = page.locator('.product-information p').filter({ hasText: 'Category' });
    this.price = page.locator('.product-information span span');
    this.availability = page.locator('.product-information p').filter({ hasText: 'Availability' });
    this.condition = page.locator('.product-information p').filter({ hasText: 'Condition' });
    this.brand = page.locator('.product-information p').filter({ hasText: 'Brand' });
    this.addToCartButton = page.locator('.product-information button.cart');
  }

  async assertProductDetailVisible() {
    await expect(this.productName).toBeVisible();
    await expect(this.productName).not.toHaveText('');
    await expect(this.category).toBeVisible();
    await expect(this.price).toBeVisible();
    await expect(this.availability).toBeVisible();
    await expect(this.condition).toBeVisible();
    await expect(this.brand).toBeVisible();
    await expect(this.addToCartButton).toBeVisible();
  }
}