import { test, Page, Locator, expect, Frame } from '@playwright/test'
import WebLib from '../webutils/WebLib'
import Login from '../pageactions/Login';
import { log } from 'console';
import { url } from 'inspector';
import { TIMEOUT } from 'dns';
test("Validate Login Module", async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com")
    await page.getByRole('link', { name: 'Computers' }).click();
    await page.getByRole('link', { name: 'Picture for category Desktops' }).click();
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await page.locator('#product_attribute_2').selectOption('4');
    await page.getByLabel('320 GB').check();
    await page.getByRole('button', { name: 'Add to cart' }).click();
    await page.getByRole('link', { name: 'Electronics' }).click();
    await page.getByRole('link', { name: 'Picture for category Cell' }).click();
    await page.getByRole('link', { name: 'Picture of HTC One M8 Android' }).click();
    await page.locator('#add-to-cart-button-18').click();
    await page.goto('https://demo.nopcommerce.com/apparel');
    await page.getByRole('link', { name: 'Picture for category Shoes' }).click();
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await page.locator('#add-to-cart-button-25').click();
    await page.locator('#product_attribute_9').selectOption('23');
    await page.locator('#add-to-cart-button-25').click();
    await page.waitForTimeout(2000)
    await page.getByTitle('Close').click();
    await page.getByRole('link', { name: 'Shopping cart (3)' }).click();


    //get total rows counts
    let rowsCount = await page.locator("(//table)[1]/tbody/tr").count()
    for (let i: number = 1; i <= rowsCount; i++) {
        let price = await page.locator(`(//table)[1]/tbody/tr[${i}]/td[4]/span`).textContent()
        let qauantityValue = await page.locator(`(//table)[1]/tbody/tr[${i}]/td[5]//input`).inputValue();
        let totalPrice = await page.locator(`(//table)[1]/tbody/tr[${i}]/td[6]/span`).textContent()
        console.log(price?.replace("$", "").replace(",", "").replace(".", ""))
        console.log(`Price : ${price} --- Quantity :${qauantityValue} ----- Price :${totalPrice}`)
    }
    console.log(rowsCount)
    await page.pause()

})
