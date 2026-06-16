import { Page, expect } from '@playwright/test';

export class CheckoutPage {

    constructor(private page: Page) {}

    async navigateToProducts() {
        await this.page.goto('https://automationexercise.com/products');
    }

    async addFirstProductToCart() {
        await this.page.locator('a:has-text("Add to cart")')
            .first()
            .click();
    }

    async viewCart() {
        await this.page.getByRole('link', { name: 'View Cart' })
            .click();
    }

    async proceedToCheckout() {
        await this.page.click(
            'a:has-text("Proceed To Checkout")'
        );
    }

    async verifyLoginRequired() {
        await expect(
            this.page.getByText(
                'Register / Login account to proceed on checkout.'
            )
        ).toBeVisible();
    }

    async login(email: string, password: string) {
        await this.page.goto(
            'https://automationexercise.com/login'
        );

        await this.page.fill(
            'input[data-qa="login-email"]',
            email
        );

        await this.page.fill(
            'input[data-qa="login-password"]',
            password
        );

        await this.page.click(
            'button[data-qa="login-button"]'
        );
        await expect(
            this.page.locator('a:has-text("Logged in as")')
        ).toBeVisible();
    }

    async placeOrder() {
        await this.page.click(
            'a:has-text("Place Order")'
        );
    }

    async fillPaymentDetails() {

        await this.page.fill(
            'input[name="name_on_card"]',
            'John Doe'
        );

        await this.page.fill(
            'input[name="card_number"]',
            '4111111111111111'
        );

        await this.page.fill(
            'input[name="cvc"]',
            '123'
        );

        await this.page.fill(
            'input[name="expiry_month"]',
            '12'
        );

        await this.page.fill(
            'input[name="expiry_year"]',
            '2025'
        );
    }

    async confirmOrder() {
        await this.page.click(
            'button:has-text("Pay and Confirm Order")'
        );
    }

    async verifyOrderSuccess() {
        await expect(
            this.page.getByText(
                'Congratulations! Your order has been confirmed!'
            )
        ).toBeVisible();
    }

    async downloadInvoice() {

        const downloadPromise =
            this.page.waitForEvent('download');

        await this.page.click(
            'a:has-text("Download Invoice")'
        );
        
        return await downloadPromise;
    }
}