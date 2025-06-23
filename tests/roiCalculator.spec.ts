
import { test } from '@playwright/test';
import { URL } from '../constants/URL';
import { HomePage } from '../pages/HomePage';
import { ROICalculationPage } from '../pages/ROICalculationPage';


test.beforeEach(async ({ page }) => {
    await page.goto(URL.BASE_URL);
});

test('Validate input filds for ROI calculation are interactive and validate calculation of total ROI', async ({ page }) => {
    // initiate pages 
    const homePage = new HomePage(page);
    const roiPage = new ROICalculationPage(page);
    // go to ROI calculation
    await homePage.roiCalculator();
    // type balues
    await roiPage.typeNumberOfEmployees('100');
    await roiPage.typeAvarageSalaryOfEmployees('20000');
    await roiPage.typeNumberOfCallCenterAgents('10')
    await roiPage.typeAvarageSalaryOfAgent('15002');
    await roiPage.typeNumberOfNewAgents('2');
    await roiPage.typeAvarageOnboardingTime('2');
    await roiPage.typeOnboardingTraining('10');
    await roiPage.typeErrorRate('1');
    await page.keyboard.press('Enter');
    // verify total ammount
    await roiPage.verifyTotalROIIsCalculated();
    await roiPage.verifyTotalROIIsSumOfAllElements();

})