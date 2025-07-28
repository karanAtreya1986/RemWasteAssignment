//

class home {

    constructor(page) {
        this.page = page;
        this.addToCartButton = page.getByText('Add to cart')
        this.shoppingCartLink = page.locator(".shopping_cart_link")
    }

    //click on first add to cart button
    async addToCart() {
        await this.addToCartButton.first().click();
        await this.shoppingCartLink.click()
    }

    //click on last add to cart button
    async addToCartLastItem() {
        await this.addToCartButton.nth(5).click();
        // await this.addToCartButton.last().click();
        await this.shoppingCartLink.click()
    }
}

module.exports = home;