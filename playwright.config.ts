import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  testIgnore: [
    '**/client/src/tests/**'
  ],

  fullyParallel: true,
  forbidOnly: false,
  retries: 0,
  workers: undefined,

  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'api',
      testMatch: /.*api.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'e2e',
      testMatch: /.*e2e.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    }

    // ❌ REMOVIDO WEBKIT
  ],
});