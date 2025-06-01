import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { URLs,Values } from '../constants/configuration';

export class Locators {
  private page: Page;
  private randomName: string;
  private randomDescription: string;
  private randomNumber: number;
  private randomOrder: number;
  private randomData: number;

    constructor(page: Page) {
        this.page = page;

        // Faker Data

        this.initialize();

    }

    initialize() {
        this.initializeCommonLocators();
        this.initializeTableHeaderLabels();
        this.initializePopupLocators();
    }

    initializeCommonLocators() {
    }

    initializeTableHeaderLabels() {
    }

    initializePopupLocators() {
    }

    logRandomValues() {
        this.randomName = `${Values.NAME_PREFIX}${faker.string.alphanumeric(4)}`;
        this.randomDescription = `${Values.DESCRIPTION_PREFIX}${faker.string.alphanumeric(6)}`;
        this.randomNumber = faker.number.int({ min: 1, max: 9999 });
        this.randomOrder = faker.number.int({ min: 20, max: 99 });
        this.randomData = faker.number.int({ min: 99, max: 999 });

        console.log(`Generated random Name: ${this.randomName}`);
        console.log(`Generated random Description: ${this.randomDescription}`);
        console.log(`Generated random Number: ${this.randomNumber}`);
        console.log(`Generated random Order: ${this.randomOrder}`);
        console.log(`Generated random Data: ${this.randomData}`);
    }

    async dropdown() {
    }

    async retryUniqueOrderByValue() {
    }
}
