# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finalTask.spec.ts >> E-commerce shopping flow >> TC-SHOP-010 logged-in user redirected from login
- Location: tests/finalTask.spec.ts:233:13

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Logged in as tester1782736138227')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Logged in as tester1782736138227')

```

```yaml
- heading "This page isn’t working" [level=1]
- paragraph:
  - strong: automationexercise.com
  - text: is currently unable to handle this request.
- text: HTTP ERROR 500
- button "Reload"
```

# Test source

```ts
  1 | import { expect, Page } from '@playwright/test';
  2 | 
  3 | export class BaseShopPage {
  4 |   constructor(readonly page: Page) {}
  5 | 
  6 |   async assertLoggedInAs(username: string) {
> 7 |     await expect(this.page.getByText(`Logged in as ${username}`)).toBeVisible();
    |                                                                   ^ Error: expect(locator).toBeVisible() failed
  8 |   }
  9 | }
```