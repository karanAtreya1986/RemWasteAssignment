import { test, expect } from "@playwright/test"

//then all page class to be imported
const LoginPage = require("../pages/SauceLabLoginPage")
const HomePage=require("../pages/SauceLabHomePage")

//get data from json file.
let v1 = require("../testData/sauceLabsLoginData.json")
//convert to json string
let v2 = JSON.stringify(v1);
//now to parse the json we need to use parse so we can use json.parse
let data = JSON.parse(v2)




test.describe('Add to cart', () => {

    test.beforeEach(async ({ page }) => {
        const login = new LoginPage(page);
        await login.loginToApplication(data.username, data.password);
        await expect(page).toHaveURL(/.*inventory.*/)
    });

    test('Click on first add to cart button', async ({ page }) => {

        const homePage=new HomePage(page)

        await homePage.addToCart()

        //check if remove button is displayed
        const button = page.getByText('Remove');
        const isDisplayed = await button.isVisible();
        console.log(isDisplayed)
    });


})