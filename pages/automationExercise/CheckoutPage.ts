import { expect, Locator, Page } from '@playwright/test';
import { BaseShopPage } from './BaseShopPage';

export class CheckoutPage extends BaseShopPage { //TC-001
  readonly deliveryAddress: Locator;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    super(page);
    this.deliveryAddress = page.locator('#address_delivery');
    this.placeOrderButton = page.getByRole('link', { name: 'Place Order' });
  }

  async assertDeliveryAddressContains(text: string) {
    await expect(this.deliveryAddress).toContainText(text);
  }

  async placeOrder() {
    await this.placeOrderButton.click();
    await this.page.waitForURL('**/payment');
  }
  
}