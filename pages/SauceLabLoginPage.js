//

class login {

    constructor(page) {
        this.page = page;
        this.username = page.locator("#user-name")
        this.password = page.locator("#password")
        this.loginButton = page.getByRole("button", { name: 'Login' })
        this.invalidLoginMessage=page.locator("h3[data-test='error']")
    }

    //login using username and password
    async loginToApplication(username, password) {
        await this.page.goto("/")
        await this.username.type(username)
        await this.password.type(password)
        await this.loginButton.click()
        // await this.page.waitForTimeout(1000)
    }

    //get text when we enter invalid credentials
    async loginWithWrongCredentials(username, password){
        await this.page.goto("/")
        await this.username.type(username)
        await this.password.type(password)
        await this.loginButton.click()
    }

}

module.exports = login;