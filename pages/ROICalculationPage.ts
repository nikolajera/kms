import { expect, Page } from '@playwright/test';
import { UIComponentsNavigator } from '../components/UIComponentsNavigator';
import { ROIInputs } from '../constants/ROIInputs';
import { on } from 'events';
import { ROISummaryConstants } from '../constants/ROISummaryConstants';
import { log } from 'console';

export class ROICalculationPage extends UIComponentsNavigator {

    static readonly TOTAL_ROI = '#savings-roi_calc__total';

    constructor(protected page: Page) {
        super(page);

    }

    async typeNumberOfEmployees(numberOfEmployees: string) {
        await this.spinButton.typeValueIntoSpinButton(ROIInputs.EMPLOYEES, numberOfEmployees);
    }

    async typeAvarageSalaryOfEmployees(salary: string) {
        await this.spinButton.typeValueIntoSpinButton(ROIInputs.EMPLOYEE_SALARY, salary);
    }

    async typeNumberOfCallCenterAgents(numberOfAgents: string) {
        await this.spinButton.typeValueIntoSpinButton(ROIInputs.CALL_CENTER_AGENTS, numberOfAgents);
    }

    async typeAvarageSalaryOfAgent(salary: string) {
        await this.spinButton.typeValueIntoSpinButton(ROIInputs.AGENT_SALARY, salary);
    }

    async typeNumberOfNewAgents(newAgents: string) {
        await this.spinButton.typeValueIntoSpinButton(ROIInputs.NUMBER_OF_NEW_AGENTS, newAgents);
    }

    async typeAvarageOnboardingTime(onboardingTime: string) {
        await this.spinButton.typeValueIntoSpinButton(ROIInputs.ONBOARDING_TIME, onboardingTime);
    }

    async typeOnboardingTraining(onboardingTraining: string) {
        await this.spinButton.typeValueIntoSpinButton(ROIInputs.ONBOARDING_TRAINING, onboardingTraining);
    }

    async typeErrorRate(errorRate: string) {
        await this.spinButton.typeValueIntoSpinButton(ROIInputs.ERROR_RATE, errorRate);
    }

    async verifyTotalROIIsCalculated() {
        const start = Date.now();
        while (Date.now() - start < 5000) {
            const value = await this.attribute.getNumericValueFromSelector(ROICalculationPage.TOTAL_ROI);
            if (value !== 0) {
                return value;
            }
            await new Promise((res) => setTimeout(res, 200));
        }
        throw new Error(`Value for total ROI was still 0 after 5000 ms`);
    }

    async verifyTotalROIIsSumOfAllElements() {
        const selectorValues = Object.values(ROISummaryConstants);
        let expectedValue = 0;

        for (const selector of selectorValues) {
            expectedValue += await this.attribute.getNumericValueFromSelector(selector);
        }

        const actualValue = await this.attribute.getNumericValueFromSelector(ROICalculationPage.TOTAL_ROI);
        expect(expectedValue).toBe(actualValue);
    }
}