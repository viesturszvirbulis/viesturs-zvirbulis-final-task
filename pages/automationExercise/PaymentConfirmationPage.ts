import { expect, Locator, Page } from '@playwright/test';
import { BaseShopPage } from './BaseShopPage';

export class PaymentConfirmationPage extends BaseShopPage { //TC-001
  readonly orderPlacedHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.orderPlacedHeading = page.getByText('Order Placed!');
  }

  async assertOrderPlaced() {
    await this.page.waitForURL(/\/payment_done\//); // url contains payment_done
    await expect(this.orderPlacedHeading).toBeVisible(); // confirmation message is displayed
    const url = this.page.url();
    const orderId = url.split('/payment_done/')[1]; //order id is visible in the url (I didnt see it on the page)
    expect(orderId).toBeTruthy();
  }
}