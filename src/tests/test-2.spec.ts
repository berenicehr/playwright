import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.epam.com/');
  await page.getByRole('button', { name: 'Accept All' }).click();
  await page.locator('.hamburger-menu__button').click();
  await page.locator('span').filter({ hasText: 'About About' }).getByRole('link').click();
  await page.locator('body').click();
});