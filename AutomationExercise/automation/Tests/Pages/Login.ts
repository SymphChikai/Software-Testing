import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async navigateToLoginPage() {
        await this.page.goto('https://automationexercise.com/');
        await this.page.click('a[href="/login"]');
    }

    async login(email: string, password: string) {
        await this.page.fill('input[data-qa="login-email"]', email);
        await this.page.fill('input[data-qa="login-password"]', password);
        await this.page.click('button[data-qa="login-button"]');
    }

    async logout() {
        await this.page.click('a[href="/logout"]');
    }

    async verifyLoginSuccess() {
        await expect(
            this.page.locator('a:has-text("Logged in as")')
        ).toBeVisible();
    }

    async verifyLoginFailed() {
        await expect(
            this.page.locator('p:has-text("Your email or password is incorrect!")')
        ).toBeVisible();
    }

    async verifyLogoutSuccess() {
        await expect(
            this.page.locator('a[href="/login"]')
        ).toBeVisible();
    }
}