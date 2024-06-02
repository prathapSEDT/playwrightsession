import { test } from "@playwright/test";

test.describe("Login module validation", async () => {
    let i = 0
    test.skip(i == 0, "Skipping all my cases due to some issue")
    test("User Name Empty with valid password", {
        tag: "@smokemybest"
    }, async () => {
        console.log("TC_01")
    })

    test("User Name Valid with Invalid password", {
        tag: "@regression"
    }, async () => {
        console.log("TC_02")
    })

    test("User Name Valid with Valid password", {
        tag: ["@smoke", "@regression"]
    }, async () => {
        // let browserName = "firefox"
        // test.skip(browserName === 'firefox', 'Still working on it');
        console.log("TC_03")
    })

})