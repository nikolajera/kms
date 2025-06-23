import { Page, expect, Locator } from '@playwright/test';

export class Attribute {
  constructor(protected page: Page) { }

  async assertAttributeContainsText(
    element: Locator,
    attributeName: string,
    text: string,
    shouldBePresent: boolean = true) {

    const bodyClass = await element.getAttribute(attributeName);
    const isClassPresent = bodyClass?.includes(text) ?? false;
    expect(isClassPresent).toBe(shouldBePresent);
  }

  async getNumericValueFromSelector(text: string): Promise<number> {
    const actualRoi = this.page.locator(text);
    let content = await actualRoi.textContent();
    if (!content) {
      throw new Error(`Text content for selector "${content}" is null`);
    }

    return Number(content.replace(/[^0-9.-]+/g, ''));
  }

}