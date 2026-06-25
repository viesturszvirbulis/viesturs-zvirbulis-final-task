import { expect, Page } from '@playwright/test';

export class BaseShopPage {
  constructor(readonly page: Page) {}

  async assertLoggedInAs(username: string) {
    await expect(this.page.getByText(`Logged in as ${username}`)).toBeVisible();
  }
}