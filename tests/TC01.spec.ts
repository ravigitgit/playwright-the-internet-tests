import { test, expect } from '@playwright/test';
import { URLs } from '../constants/configuration';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/The Internet/);
});

test('Test Add/Remove Elements', async ({ page }) => {
  await page.goto('/');
  await page.locator("a:has-text('Add/Remove Elements')").click();
  await expect(page).toHaveURL(URLs.ADD_REMOVE_ELEMENTS);

  await expect(page.locator(".example button:has-text('Add Element')")).toBeVisible();
  await page.locator(".example button:has-text('Add Element')").waitFor({ state: 'visible' });
  await page.locator(".example button:has-text('Add Element')").click();
  await page.locator("#elements button:has-text('Delete')").click();
  await expect(await page.locator(".added-manually").count()).toBeGreaterThanOrEqual(0);
});

test('Test Basic Auth', async ({ page }) => {
  await page.goto('/');
  await page.locator("a:has-text('Basic Auth')").click();
  await expect(page).toHaveURL(URLs.BASIC_AUTH);

  await expect(page.locator(".example button:has-text('Add Element')")).toBeVisible();
  await page.locator(".example button:has-text('Add Element')").waitFor({ state: 'visible' });
  await page.locator(".example button:has-text('Add Element')").click();
  await page.locator("#elements button:has-text('Delete')").click();
  await expect(await page.locator(".added-manually").count()).toBeGreaterThanOrEqual(0);
});
