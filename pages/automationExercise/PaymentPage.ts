import { Locator, Page } from '@playwright/test';
import { BaseShopPage } from './BaseShopPage';

export class PaymentPage extends BaseShopPage { //TC-001
  readonly nameOnCard: Locator;
  readonly cardNumber: Locator;
  readonly cvc: Locator;
  readonly expiryMonth: Locator;
  readonly expiryYear: Locator;
  readonly payButton: Locator;

  constructor(page: Page) {
    super(page);
    this.nameOnCard = page.locator('input[name="name_on_card"]');
    this.cardNumber = page.locator('input[name="card_number"]');
    this.cvc = page.getByRole('textbox', { name: 'ex.' });
    this.expiryMonth = page.getByRole('textbox', { name: 'MM' });
    this.expiryYear = page.getByRole('textbox', { name: 'YYYY' });
    this.payButton = page.getByRole('button', { name: 'Pay and Confirm Order' });
  }

  async fillCardDetails() {
    await this.nameOnCard.fill('Test User');
    await this.cardNumber.fill('1234432112344321');
    await this.cvc.fill('123');
    await this.expiryMonth.fill('01');
    await this.expiryYear.fill('2027');
  }

  async confirmPayment() {
    await this.payButton.click();
  }
}