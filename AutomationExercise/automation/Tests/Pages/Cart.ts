import { Page, expect } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) {}

    async navigateToProducts() {
        await this.page.goto('https://automationexercise.com/products');
    }

    async openProduct(productName: string) {
        await this.page
            .locator('.productinfo p')
            .filter({ hasText: productName })
            .first();

        await this.page
            .locator('a:has-text("View Product")')
            .first()
            .click();
    }

    async setQuantity(quantity: number) {
        await this.page.fill('#quantity', quantity.toString());
    }

    async addToCart() {
        await this.page.click('button:has-text("Add to cart")');
    }

    async viewCart() {
        await this.page.click('a:has-text("View Cart")');
    }

    async verifyAddedPopup() {
        await expect(
            this.page.getByText(
                'Your product has been added to cart.'
            )
        ).toBeVisible();
    }

    async verifyQuantity(quantity: number) {
        await expect(
            this.page.locator('.cart_quantity')
        ).toContainText(quantity.toString());
    }

    async removeFirstProduct() {
        await this.page.locator('.cart_delete a').first().click();
    }

    async verifyProductRemoved() {
        await expect(
            this.page.locator('#product-1')
        ).not.toBeVisible();
    }
}