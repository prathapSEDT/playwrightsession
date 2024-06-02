import { test, Page, Locator, expect } from '@playwright/test'
import WebLib from '../webutils/WebLib'
import Login from '../pageactions/Login';
import { log } from 'console';
test("Validate Login Module", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on("dialog", async (dialogue) => {
        await page.waitForTimeout(2000)
        console.log(dialogue.message())
        console.log(dialogue.type())
        dialogue.accept();
    })
    await page.locator("//button[text()='Confirm Box']").click({ force: true });

    await page.pause()
})
