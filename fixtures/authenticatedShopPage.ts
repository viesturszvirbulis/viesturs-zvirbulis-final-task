import { test as base, expect, Page } from '@playwright/test';
import { generateUser } from '../utils/testData';
import { ShopApiClient } from '../utils/shopApiClient';
import { ShopHomePage } from '../pages/automationExercise/ShopHomePage';
import { SignupLoginPage } from '../pages/automationExercise/SignupLoginPage';
import { AccountCreationPage } from '../pages/automationExercise/AccountCreationPage';

export type AuthenticatedShopFixture = { authenticatedShopPage: Page };

export const test = base.extend<AuthenticatedShopFixture>({
  authenticatedShopPage: [
    async ({ browser }, use) => {
      const user = generateUser();
      const page = await browser.newPage();

      const home = new ShopHomePage(page);
      const signup = new SignupLoginPage(page);
      const account = new AccountCreationPage(page);

      await home.goto();
      await home.goToSignupLogin();
      await signup.startSignup(user.name, user.email);
      await account.createAccount(user);
      await account.clickContinue();
      await home.assertLoggedInAs(user.name);

      await use(page); // test runs here

      const api = new ShopApiClient(page.request);
      await api.deleteAccount(user.email, user.password);
      await page.close();
    },
    { timeout: 60_000 },
  ],
});

export { expect };