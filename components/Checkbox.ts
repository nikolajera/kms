import { Page, expect } from '@playwright/test';

export class Checkbox {
  constructor(protected page: Page) { }

  async checkboxIsChecked(text: string, shouldBeChecked: boolean = true) {
    const locator = this.page.getByText(text);
    if (shouldBeChecked) {
      await expect(locator).toBeChecked();
    } else {
      await expect(locator).not.toBeChecked();
    }
  }

  async checkByText(text: string) {
    await this.checkboxIsChecked(text, false);
    const navOption = this.page.getByText(text);
    await navOption.click();
  }

  async uncheckByText(text: string) {
    await this.checkboxIsChecked(text);
    const navOption = this.page.getByText(text);
    await navOption.click();
  }
}