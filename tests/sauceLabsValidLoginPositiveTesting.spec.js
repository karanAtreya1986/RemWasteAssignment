import { test, expect } from "@playwright/test"


//get data from json file.
let v1 = require("../testData/sauceLabsLoginData.json")
//convert to json string
let v2 = JSON.stringify(v1);
//now to parse the json we need to use parse so we can use json.parse
let data = JSON.parse(v2)

//then all page class to be imported
const loginPage = require("../pages/SauceLabLoginPage")

test("Valid credentials", async ({ page }) => {

    const login = new loginPage(page)

    await login.loginToApplication(data.username, data.password)

    await expect(page).toHaveURL(/.*inventory.*/)
})