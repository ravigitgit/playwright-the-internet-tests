import { Utility } from '../utils/generalUtils';
import { Page, expect } from '@playwright/test';
import { URLs } from '../constants/configuration';
import { Locators } from './locators';



class PageObjects {
    private page: Page;
    private locators: Locators;
    private utility: Utility;
    private allRowsLocator: string;
    private allRows: Locators;

    constructor(page: Page) {
        this.page = page;
        this.utility = new Utility(page);
        this.locators = new Locators(page);
        this.locators.logRandomValues();
    }

    async addRemoveElements() {

        await this.page.goto('/');
        await expect(this.page).toHaveTitle(/The Internet/);
        await this.page.locator("a:has-text('Add/Remove Elements')").click();
        await this.utility.customAssert('URL is Visible', async () => {
            expect(this.page).toHaveURL(URLs.ADD_REMOVE_ELEMENTS);
        });
        await expect(this.page).toHaveURL(URLs.ADD_REMOVE_ELEMENTS);

        await expect(this.page.locator(".example button:has-text('Add Element')")).toBeVisible();
        await this.page.locator(".example button:has-text('Add Element')").waitFor({ state: 'visible' });
        await this.page.locator(".example button:has-text('Add Element')").click();
        await this.page.locator("#elements button:has-text('Delete')").click();

        const count = await this.page.locator(".added-manually").count();
        expect(count).toBeGreaterThanOrEqual(0);
    }

}

export { PageObjects };