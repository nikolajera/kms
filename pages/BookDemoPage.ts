import { UIComponentsNavigator } from "../components/UIComponentsNavigator";
import { DemoConstants } from '../constants/DemoConstants';

export class BookDemoPage extends UIComponentsNavigator {

    async typeFirstName(firstName: string) {
        await this.inputField.typeValueIntoInputField(DemoConstants.FIRST_NAME, firstName);
    }

    async typeLastName(lastName: string) {
        await this.inputField.typeValueIntoInputField(DemoConstants.LAST_NAME, lastName);
    }

    async typeEmail(email: string) {
        await this.inputField.typeValueIntoInputField(DemoConstants.EMAIL, email);
    }

    async typePhoneNumber(phoneNumber: string) {
        await this.inputField.typeValueIntoInputField(DemoConstants.PHONE_NUMBER, phoneNumber);
    }

    async typeJobTitle(jobTitle: string) {
        await this.inputField.typeValueIntoInputField(DemoConstants.JOB_TITLE, jobTitle);
    }

    async typeMessage(message: string) {
        await this.inputField.typeValueIntoInputField(DemoConstants.MESSAGE, message);
    }

}