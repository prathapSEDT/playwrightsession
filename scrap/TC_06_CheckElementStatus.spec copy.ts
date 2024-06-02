import { test, Page, Locator, expect, Frame } from '@playwright/test'
import WebLib from '../webutils/WebLib'
import Login from '../pageactions/Login';
import { log } from 'console';
import { url } from 'inspector';
import { TIMEOUT } from 'dns';
test("Validate Login Module", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

    await page.getByRole('button', { name: 'Register' }).click({ timeout: 45000 });
    // check for error message

    let errorMessage: Locator = await page.getByText('First name is required.');
    await expect(errorMessage).toBeVisible()

    let firstName: Locator = await page.locator("#FirstName");
    await firstName.fill("Raj")
    await page.locator("#FirstName").press("Tab")
    await expect(errorMessage).toBeHidden()

    //get the data from a text box
    let textboxValue: any = await firstName.inputValue()
    console.log(textboxValue)

    await page.pause()

})
