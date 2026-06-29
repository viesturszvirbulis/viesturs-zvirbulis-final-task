import { expect, Locator, Page } from '@playwright/test';
import { BaseShopPage } from './BaseShopPage';
import { ShopUser } from '../../utils/shopApiClient';

export class AccountCreationPage extends BaseShopPage { //TC-001, TC-010 (via fixture)
  readonly passwordInput: Locator;
  readonly daySelect: Locator;
  readonly monthSelect: Locator;
  readonly yearSelect: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly countrySelect: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileInput: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedHeading: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.passwordInput = page.getByRole('textbox', { name: 'Password *' });
    this.daySelect = page.locator('#days');
    this.monthSelect = page.locator('#months');
    this.yearSelect = page.locator('#years');
    this.firstNameInput = page.getByRole('textbox', { name: 'First name *' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last name *' });
    this.addressInput = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
    this.countrySelect = page.getByLabel('Country *');
    this.stateInput = page.getByRole('textbox', { name: 'State *' });
    this.cityInput = page.getByRole('textbox', { name: 'City * Zipcode *' });
    this.zipcodeInput = page.locator('#zipcode');
    this.mobileInput = page.getByRole('textbox', { name: 'Mobile Number *' });
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.accountCreatedHeading = page.getByText('Account Created!');
    this.continueButton = page.getByRole('link', { name: 'Continue' });
  }

  async createAccount(user: ShopUser) {
    await this.page.locator('#id_gender1').check();
    await this.passwordInput.fill(user.password);
    await this.daySelect.selectOption(user.birthDate);
    await this.monthSelect.selectOption(user.birthMonth);
    await this.yearSelect.selectOption(user.birthYear);
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.addressInput.fill(user.address1);
    await this.countrySelect.selectOption(user.country);
    await this.stateInput.fill(user.state);
    await this.cityInput.fill(user.city);
    await this.zipcodeInput.fill(user.zipcode);
    await this.mobileInput.fill(user.mobileNumber);
    await this.createAccountButton.click();
  }

  async assertAccountCreated() {
    await expect(this.accountCreatedHeading).toBeVisible();
  }
  
  async clickContinue() {
    await this.continueButton.click();
    await this.page.waitForURL('/');
  }
}