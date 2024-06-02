import { test, Page, Locator, expect, Frame } from '@playwright/test'
import WebLib from '../webutils/WebLib'
import Login from '../pageactions/Login';
import { log } from 'console';
import { url } from 'inspector';
import { TIMEOUT } from 'dns';
test("Validate Login Module", async ({ page }) => {
    await page.goto("https://practice-automation.com/")
    await page.getByRole('link', { name: 'File Upload' }).click({
        timeout: 35000,
        force: true
    },);
    await page.locator("#file-upload").click({
        timeout: 35000,
        force: true
    },);
    await page.locator("#file-upload").setInputFiles("/Users/veeraprathapmalepati/Downloads/Manual\ Testing\ Material-1/Test\ Planning\ and\ Test\ Strategy/TEST-PLANNING.pdf")
    await page.pause()

})
