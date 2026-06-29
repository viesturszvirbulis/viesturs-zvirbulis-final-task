import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1, // added 1 retry due to TC-001 sometimes failing
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['allure-playwright', { detail: true, outputFolder: 'allure-results', suiteTitle: false }],
  ],
  use: {
    baseURL: process.env.BASE_URL ?? 'https://automationexercise.com',
    trace: 'on-first-retry',
    headless: true,
  },
  projects: [
    {
      name: 'automation-exercise',
      use: { ...devices['Desktop Chrome'], baseURL: process.env.BASE_URL ?? 'https://automationexercise.com' },
      testMatch: '**/finalTask.spec.ts',
    },
  ],
});