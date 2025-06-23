import { Page } from '@playwright/test';

export class Link {

  constructor(protected page: Page) {

  }

  async openBannerByText(link: string) {
    const locator = this.page.getByRole('banner').getByRole('link', { name: link });
    await locator.click();
  }
  async openLink(link: string) {
    const locator = this.page.getByRole('link', { name: link });
    await locator.click();
  }
}