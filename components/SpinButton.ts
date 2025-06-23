import { Page, expect } from '@playwright/test';
export class SpinButton {
    constructor(protected page: Page) {

    }

    async typeValueIntoSpinButton(locator: string, value: string) {
        const spinButton = this.page.locator(locator).getByRole('spinbutton');
        await spinButton.click();
        await spinButton.fill(value);
        await expect(spinButton).toHaveValue(value);
    }

}