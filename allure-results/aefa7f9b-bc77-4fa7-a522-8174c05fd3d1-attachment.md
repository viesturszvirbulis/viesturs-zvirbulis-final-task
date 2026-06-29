# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finalTask.spec.ts >> E-commerce shopping flow >> TC-SHOP-001 full shopping flow
- Location: tests/finalTask.spec.ts:15:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: ' Signup / Login' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "This website is under heavy load (queue full)" [level=2] [ref=e2]
  - paragraph [ref=e3]: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | import { BaseShopPage } from './BaseShopPage';
  3  | 
  4  | export class ShopHomePage extends BaseShopPage {
  5  |   readonly signupLoginLink: Locator;
  6  |   readonly loggedInAsText: Locator;
  7  |   readonly consentButton: Locator;
  8  | 
  9  |   constructor(page: Page) {
  10 |     super(page);
  11 |     this.consentButton = page.getByRole('button', { name: 'Consent' });
  12 |     this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
  13 |     this.loggedInAsText = page.locator('li').filter({ hasText: 'Logged in as' });
  14 |   }
  15 | 
  16 |   async goto() {
  17 |     await this.page.goto('/');
  18 |     if (await this.consentButton.isVisible()) {
  19 |       await this.consentButton.click();
  20 |     }
  21 |   }
  22 | 
  23 |   async goToSignupLogin() {
> 24 |     await this.signupLoginLink.click();
     |                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  25 |   }
  26 | }
```