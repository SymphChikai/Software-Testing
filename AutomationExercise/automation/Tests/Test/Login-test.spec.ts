import { test } from '@playwright/test';
import { LoginPage } from '../Pages/Login';

test.describe('Login Tests', () => {

    test('TC-L001 Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();
        await loginPage.login(
            'Ralph@email.com',
            'Pass.123'
        );

        await loginPage.verifyLoginSuccess();
    });

    test('TC-L002 Login with invalid password', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();
        await loginPage.login(
            'Ralph@email.com',
            '123456789'
        );

        await loginPage.verifyLoginFailed();
    });

    test('TC-L007 Logout after successful login', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();
        await loginPage.login(
            'Ralph@email.com',
            'Pass.123'
        );

        await loginPage.verifyLoginSuccess();

        await loginPage.logout();

        await loginPage.verifyLogoutSuccess();
    });

});