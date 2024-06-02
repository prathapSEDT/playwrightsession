import { test } from '@playwright/test'


test("check logic title", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")
})
