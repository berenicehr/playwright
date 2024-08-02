import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.epam.com/');
  await page.locator('.hamburger-menu__button').click();
  await page.locator('.hamburger-menu__button').click();
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.locator('.hamburger-menu__button').click();
  await page.locator('span').filter({ hasText: 'Insights Insights' }).getByRole('link').click();
  await page.goto('https://www.epam.com/');
  await page.goto('chrome-error://chromewebdata/');
  await page.locator('.hamburger-menu__button').click();
});