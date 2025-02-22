import { defineConfig, devices } from '@playwright/test';
import dotenv from "dotenv";

dotenv.config({
  path: `./env/.env.${process.env.ENV}`
  // path: `./env/.env.${process.env.ENV || "data_test_uae"}`
});
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './',
  timeout: 300 * 1000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'never', printSteps: true }], ['allure-playwright'],['junit', {outputFile:'junit-report/junit-report.xml'}]],
 
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'off',
    screenshot: 'only-on-failure',
    video: 'off',
    headless: false
  },
  expect: {
    timeout: 20 * 1000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'mawistaClaims',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 559 } },

    },
    // {
    //   name: 'parallel-tests',
    //   use: [
    //     { ...require('playwright').devices['Desktop Chrome'], channel: 'chrome' },
    //     { ...require('playwright').devices['Desktop Firefox'], channel: 'firefox' },
    //   ],
    //   workers: 2, // Number of workers for both Chromium and Firefox
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome', geolocation: { longitude: 170.088155, latitude: 75.145800 }, permissions: ['geolocation'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
