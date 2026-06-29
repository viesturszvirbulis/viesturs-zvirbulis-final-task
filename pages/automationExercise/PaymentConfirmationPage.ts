import { expect, Locator, Page } from '@playwright/test';
import { BaseShopPage } from './BaseShopPage';

export class PaymentConfirmationPage extends BaseShopPage { //TC-001
  readonly orderPlacedHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.orderPlacedHeading = page.getByText('Order Placed!');
  }

  async assertOrderPlaced() {
    await this.page.waitForURL(/\/payment_done\//, { timeout: 15000 });
    await expect(this.orderPlacedHeading).toBeVisible();
    const url = this.page.url();
    const orderId = url.split('/payment_done/')[1];
    expect(orderId).toBeTruthy();
  }
}