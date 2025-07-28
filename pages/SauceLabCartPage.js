//

class cart {

    constructor(page) {
        this.page = page;
        this.removeButton = page.getByText('Remove')
        this.continueShoppingButton = page.locator("#continue-shopping")
    }

    //click on remove from cart button
    async removeFromCart() {
        await this.removeButton.click();
    }

    //click on continue shopping button
    async clickContinueShopping() {
        await this.continueShoppingButton.click()
    }
}

module.exports = cart;