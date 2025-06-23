import { Page } from '@playwright/test';

export class Button {
  constructor(protected page: Page) { }

  async clickOnTheButton(text: string) {
    const toggleButton = this.page.getByRole('button', { name: text });
    await toggleButton.click();
  }

  async clickOnButtonIfAppears(text: string) {
    await this.page.addLocatorHandler(
      this.page.getByRole('button', { name: text }),
      async locator => {
        await locator.click();
      }
    );
  }
}