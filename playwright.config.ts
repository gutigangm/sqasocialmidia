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
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  webServer: [
    {
      command: 'cd api && ./mvnw spring-boot:run',
      url: 'http://localhost:8080',
      reuseExistingServer: true,
      timeout: 120000,
    },
    {
      command: 'cd client && npm run dev',
      url: 'http://localhost:3000',
      reuseExistingServer: true,
      timeout: 120000,
    },
  ],

  projects: [
    {
      name: 'api',
      testMatch: /.*api.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'e2e',
      testMatch: /.*e2e.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});