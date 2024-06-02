import { test, Page, Locator, expect } from '@playwright/test'
import WebLib from '../webutils/WebLib'
import Login from '../pageactions/Login';
import { log } from 'console';
test("Validate Login Module", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    await page.locator("#twotabsearchtextbox").fill("nike shoes")
    await page.locator("#nav-search-submit-button").click()
    let locator: string = ".a-section.a-spacing-small.puis-padding-left-micro.puis-padding-right-micro"
    expect(page.locator(locator).first()).toBeVisible({ timeout: 35000 });
    await page.waitForTimeout(35000)
    let allDiv: Array<Locator> = await page.locator(locator).all()
    allDiv.forEach(async (div) => {
        console.log(await div.allInnerTexts())
    })
    await page.pause()
})
