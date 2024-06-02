import { Page } from "@playwright/test";
import loginPageOR from '../pageobjects/loginpageor.json'
import WebLib from "../webutils/WebLib";
export default class Login extends WebLib {

    async loginIntoSystem() {
        let locatorType: string = loginPageOR.username.locatortype;
        let locatorValue: string = loginPageOR.username.locatorvalue;
        await this.fillData(locatorType, locatorValue, "Admin");

        let passwordLocatorType: string = loginPageOR.password.locatortype;
        let passwordLocatorValue: string = loginPageOR.password.locatorvalue;
        await this.fillData(passwordLocatorType, passwordLocatorValue, "admin123");

        let submitLocatorType: string = loginPageOR.login.locatortype;
        let submitLocatorValue: string = loginPageOR.login.locatorvalue;
        await this.clickElement(submitLocatorType, submitLocatorValue);

    }
}