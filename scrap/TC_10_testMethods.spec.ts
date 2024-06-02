import { test } from "@playwright/test";



test.describe("Login module validation", async () => {
    test.beforeAll("Before all logic", async () => {
        console.log("Before All Logic here")
    })

    test.afterAll("Before all logic", async () => {
        console.log("After All Logic here")
    })
    console.log("Helo testing ")

    test("check test 1", async () => {
        test.step("myown testing", async () => {
        })
        console.log("TEST CASE EXECUTION")
    })
})