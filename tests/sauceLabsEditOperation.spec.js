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




test.describe.serial('Remove from cart', () => {

    test.beforeEach(async ({ page }) => {
        const login = new LoginPage(page);
        await login.loginToApplication(data.username, data.password);
        await expect(page).toHaveURL(/.*inventory.*/)
        const homePage = new HomePage(page)
        await homePage.addToCart()
        const cartPage = new CartPage(page)
        await cartPage.removeFromCart()

    });

    test('Click on continue shopping to edit the cart', async ({ page }) => {

        const cartPage = new CartPage(page)

        await cartPage.clickContinueShopping()

        //check if the logo contains swag labs
        const logoValue = await page.locator(".app_logo")
        await expect(logoValue).toHaveText("Swag Labs")

        const homePage = new HomePage(page)

        await homePage.addToCartLastItem()

       


        //check if remove button is displayed
        const button = page.getByText('Remove');
        const isDisplayed = await button.isVisible();
        console.log(isDisplayed)


    });

    // test('Edit the cart by adding another item', async ({ page }) => {

    //     const homePage = new HomePage(page)

    //     await homePage.addToCartLastItem()

       


    //     //check if remove button is displayed
    //     const button = page.getByText('Remove');
    //     const isDisplayed = await button.isVisible();
    //     console.log(isDisplayed)


    // });


})