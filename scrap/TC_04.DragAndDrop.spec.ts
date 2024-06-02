import { test, Page, Locator, expect, Frame } from '@playwright/test'
import WebLib from '../webutils/WebLib'
import Login from '../pageactions/Login';
import { log } from 'console';
import { url } from 'inspector';
test("Validate Login Module", async ({ page }) => {
    await page.goto("https://jqueryui.com/droppable/")
    const frame1 = await page.frameLocator("//iframe")
    let src = await frame1.locator("#draggable")
    let dest = await frame1.locator("#droppable")
    await src.dragTo(dest)
    await page.pause()
})
