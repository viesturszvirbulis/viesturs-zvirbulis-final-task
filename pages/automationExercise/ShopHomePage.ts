import { expect, Locator, Page } from '@playwright/test';
import { BaseShopPage } from './BaseShopPage';

export class ShopHomePage extends BaseShopPage {
  readonly signupLoginLink: Locator;
  readonly loggedInAsText: Locator;
  readonly consentButton: Locator;

  constructor(page: Page) {
    super(page);
    this.consentButton = page.getByRole('button', { name: 'Consent' });
    this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
    this.loggedInAsText = page.locator('li').filter({ hasText: 'Logged in as' });
  }

  async goto() {
    await this.page.goto('/');
    if (await this.consentButton.isVisible()) {
      await this.consentButton.click();
    }
  }

  async goToSignupLogin() {
    await this.signupLoginLink.click();
  }
}