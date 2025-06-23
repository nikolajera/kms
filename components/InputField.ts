import { Page, expect } from '@playwright/test';

export class InputField {

    constructor(protected page: Page) {
    }

    async typeValueIntoInputField(name: string, text: string) {
        const input = this.page.getByRole('textbox', { name });
        await input.click();
        await input.fill(text);
        await expect(input).toHaveValue(text);
    }

}