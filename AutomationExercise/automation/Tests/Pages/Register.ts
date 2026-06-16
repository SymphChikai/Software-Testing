import { Page, expect } from '@playwright/test';

export interface RegisterUser {
    title: 'Mr' | 'Mrs';
    name: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
}

export class RegisterPage {
    constructor(private page: Page) {}

    async navigateToRegistration() {
        await this.page.goto('https://automationexercise.com/');
        await this.page.click('a[href="/login"]');
    }

    async startSignup(name: string, email: string) {
        await this.page.fill(
            'input[data-qa="signup-name"]',
            name
        );

        await this.page.fill(
            'input[data-qa="signup-email"]',
            email
        );

        await this.page.click(
            'button[data-qa="signup-button"]'
        );
    }

    async completeRegistration(user: RegisterUser) {

        if (user.title === 'Mr') {
            await this.page.check('#id_gender1');
        } else {
            await this.page.check('#id_gender2');
        }

        await this.page.fill(
            'input[data-qa="password"]',
            user.password
        );

        await this.page.fill(
            'input[data-qa="first_name"]',
            user.firstName
        );

        await this.page.fill(
            'input[data-qa="last_name"]',
            user.lastName
        );

        await this.page.fill(
            'input[data-qa="company"]',
            user.company
        );

        await this.page.fill(
            '#address1',
            user.address
        );

        await this.page.selectOption(
            'select[name="country"]',
            user.country
        );

        await this.page.fill(
            'input[data-qa="state"]',
            user.state
        );

        await this.page.fill(
            'input[data-qa="city"]',
            user.city
        );

        await this.page.fill(
            'input[data-qa="zipcode"]',
            user.zipcode
        );

        await this.page.fill(
            'input[data-qa="mobile_number"]',
            user.mobileNumber
        );

        await this.page.click(
            'button[data-qa="create-account"]'
        );
    }

    async verifyAccountCreated() {
        await expect(
            this.page.getByText('Account Created!')
        ).toBeVisible();
    }

    async verifyExistingEmailError() {
        await expect(
            this.page.getByText('Email Address already exist!')
        ).toBeVisible();
    }
}