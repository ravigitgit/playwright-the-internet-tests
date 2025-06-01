import { test, expect,Page,BrowserContext } from '@playwright/test';
import { URLs } from '../constants/configuration';
import { PageObjects } from '../pages/pageObjects';
import { Utility } from '../utils/generalUtils';

test.describe('Site Operations Tests', () => {
let context: BrowserContext;
let page: Page;
let utility: Utility;
let pageObject: PageObjects;

  test.beforeAll(async ({ browser }) => {

    context = await browser.newContext();
    page = await context.newPage();
    pageObject = new PageObjects(page);
    utility = new Utility(page);
    await utility.goToUsers();
  });

  test('Test Add/Remove Elements', async ({ page }) => {

    await pageObject.addRemoveElements();
  });

  test('Test login with basic auth', async ({ browser }) => {

    // When Loging in with Basic Auth
    const context = await browser.newContext({
      httpCredentials: {
        username: 'admin',
        password: 'admin',
      }
    });

    const page = await context.newPage();
    await page.goto(URLs.BASIC_AUTH); // site that triggers basic auth
    await expect(page).toHaveURL(URLs.BASIC_AUTH); // or any assertion
    await expect(page.locator('#content p')).toHaveText('Congratulations! You must have the proper credentials.');
  });

  test('Test cancel on basic auth', async ({ browser }) => {
    const context = await browser.newContext({
      httpCredentials: {
        username: 'wronguser',
        password: 'wrongpass',
      }
    });

    const page = await context.newPage();
    await page.goto(URLs.BASIC_AUTH);

    // The page will show a 401 error or some unauthorized message
    await expect(page.locator('body')).toContainText('Not authorized'); // Adjust this
  });

  test('Test Broken Images', async ({ page }) => {
    await page.goto('/');
    await page.locator("a:has-text('Broken Images')").click();
    await expect(page).toHaveURL(URLs.BROKEN_IMAGES);

    const images = page.locator('img');
    const count = await images.count();

    let brokenCount = 0;

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const isBroken = await img.evaluate((imgEl) => {
        return (imgEl as HTMLImageElement).naturalWidth === 0;
      });

      console.log(`Image ${i + 1}: ${isBroken ? 'BROKEN' : 'OK'}`);
      if (isBroken) brokenCount++;
    }

    expect(brokenCount).toBeGreaterThan(0);
  });

  test.afterAll(async () => {
    await context.close();
  });
});