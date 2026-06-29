import { Locator, Page } from '@playwright/test';
import { BaseShopPage } from './BaseShopPage';

export class SignupLoginPage extends BaseShopPage { //TC-001, TC-010 (via fixture)
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly signupButton: Locator;

  constructor(page: Page) {
    super(page);
    this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.emailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    this.signupButton = page.getByRole('button', { name: 'Signup' });
  }

  async startSignup(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupButton.click();
  }
}