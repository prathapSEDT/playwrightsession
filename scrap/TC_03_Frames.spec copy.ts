import { test, Page, Locator, expect, Frame } from '@playwright/test'
import WebLib from '../webutils/WebLib'
import Login from '../pageactions/Login';
import { log } from 'console';
import { url } from 'inspector';
test("Validate Login Module", async ({ page }) => {
    await page.goto("https://paytm.com/")
    await page.locator("//span[text()='Sign In']").click({ force: true })
    const privacyPortal = page.waitForEvent('popup');//promise

    const frame1 = await page.frameLocator("//a[@title='Close']/following-sibling::iframe")
    const frame2 = frame1.frameLocator("#oauth-iframe")
    await frame2.locator("//a[text()='privacy policy']").click()

    const newTab = await privacyPortal;
    await newTab.close()

    await page.pause()
})
