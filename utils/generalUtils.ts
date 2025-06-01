import { Page, expect } from '@playwright/test';
import { Logger } from './logger';
import { URLs } from '../constants/configuration';
import { Locators } from '../pages/locators';


class Utility {
  private page: Page;
  private locators: Locators;
  private allRowsLocator: string;
  private allRows: Locators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new Locators(page);

        // Locators

    }

    async goToUsers() {
        // Navigate to Users
        await this.page.goto('/');
    }

    async customAssert(description, assertionCallback) {
        try {
            await assertionCallback();
            Logger.info(`✅ Assertion Passed: ${description}`);
        } catch (error) {
            Logger.error(`❌ Assertion Failed: ${description} - ${error.message}\nStack Trace: ${error.stack}`);
        }
    }
}

export { Utility };