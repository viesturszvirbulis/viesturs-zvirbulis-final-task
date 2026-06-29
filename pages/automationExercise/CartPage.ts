import { expect, Locator, Page } from '@playwright/test';
import { BaseShopPage } from './BaseShopPage';

export class CartPage extends BaseShopPage { //TC-001, TC-003, TC-004
  readonly cartRows: Locator;
  readonly proceedToCheckoutButton: Locator;
  readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.cartRows = page.locator('#cart_info_table tbody tr');
    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
    this.emptyCartMessage = page.getByText('Cart is empty!');
  }

  async goto() {
    await this.page.goto('/view_cart');
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }

  async deleteFirstItem() {
    await this.cartRows.first().locator('.cart_quantity_delete').click();
  }

  async getRowCount(): Promise<number> {
    return this.cartRows.count();
  }

  async assertRowCount(count: number) {
    await expect(this.cartRows).toHaveCount(count);
  }
}