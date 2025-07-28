import { test, expect } from "@playwright/test"
import cart from "../pages/SauceLabCartPage"

//then all page class to be imported
const LoginPage = require("../pages/SauceLabLoginPage")
const HomePage = require("../pages/SauceLabHomePage")
const CartPage = require("../pages/SauceLabCartPage")

//get data from json file.
let v1 = require("../testData/sauceLabsLoginData.json")
//convert to json string
let v2 = JSON.stringify(v1);
//now to parse the json we need to use parse so we can use json.parse
let data = JSON.parse(v2)




test.describe('Remove from cart', () => {

    test.beforeEach(async ({ page }) => {
        const login = new LoginPage(page);
        await login.loginToApplication(data.username, data.password);
        await expect(page).toHaveURL(/.*inventory.*/)
        const homePage = new HomePage(page)
        await homePage.addToCart()
    });

    test('Click on first remove from cart button', async ({ page }) => {

        const cartPage = new CartPage(page)

        await cartPage.removeFromCart()

        const isHidden = await cartPage.removeButton.isHidden();
        console.log('Is Remove button hidden:', isHidden);

    });


})