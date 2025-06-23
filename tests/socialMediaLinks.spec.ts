import { test, expect } from '@playwright/test';
import { URL } from '../constants/URL';
import { HomePage } from '../pages/HomePage';

test.beforeEach(async ({ page }) => {
    await page.goto(URL.BASE_URL);
});

test('Verify LinkedIn Link', async ({ page }) => {

    const homePage = new HomePage(page);
    homePage.goToLinkedlnPage();
    // verify URL
    await expect(page).toHaveURL(URL.LINKEDIN_URL);
})

test('Verify Youtube Link', async ({ page }) => {

    const homePage = new HomePage(page);
    homePage.goToYoutubePage();
    // verify URL
    await expect(page).toHaveURL(URL.YOUTUBE_URL);
})