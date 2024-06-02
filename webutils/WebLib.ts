import { Page } from "@playwright/test";
import config from '../appconfig/applicationpropties.json'

export default class WebLib {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async launchApplication() {
        var environmentToExecute = config.env//QA
        var appurl = config[environmentToExecute]['application_url']
        await this.page.goto(appurl);
    }


    async fillData(locatorType: string, locatorvalue: string, testData: string, role?: any) {
        switch (locatorType.toLowerCase()) {
            case "getbylabel":
                await this.page.getByLabel(locatorvalue).fill(testData);
                break;
            case "getbyplaceholder":
                await this.page.getByPlaceholder(locatorvalue).fill(testData);
                break;
            case "getbyrole":
                await this.page.getByRole(role, { name: locatorvalue }).fill(testData);
                break;
            case "xpath":
                await this.page.locator(locatorvalue).fill(testData);
                break;
            case "css":
                await this.page.locator(locatorvalue).fill(testData);
                break;
        }
    }

    async clickElement(locatorType: string, locatorvalue: string, role?: any) {
        switch (locatorType.toLowerCase()) {
            case "getbylabel":
                await this.page.getByLabel(locatorvalue).click();
                break;
            case "getbyplaceholder":
                await this.page.getByPlaceholder(locatorvalue).click();
                break;
            case "getbyrole":
                await this.page.getByRole(role, { name: locatorvalue }).click();
                break;
            case "xpath":
                await this.page.locator(locatorvalue).click();
                break;
            case "css":
                await this.page.locator(locatorvalue).click();
                break;
        }
    }




}