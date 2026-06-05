import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/auth/login');
});

// Successful Login Test
test('Login with valid credentials', async ({ page }) => {

    const email = 'admin@practicesoftwaretesting.com';
    const password = 'welcome01';

    await page.locator('[data-test="email"]').fill(email);
    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-submit"]').click();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

    await page.screenshot({
        path: 'Playwright/e2etest/PracticeSoftwareTestingWebsite/Screenshots/Login/login-valid-inputs.png',
        fullPage: true
    });
});
// Empty Input Login Test
test('Login with empty email and password', async ({ page }) => {
    
    await page.locator('[data-test="email"]').fill('');
    await page.locator('[data-test="password"]').fill('');
    await page.locator('[data-test="login-submit"]').click();

    const userErrorMessage = page.locator('[data-test="email-error"]');
    const passwordErrorMessage = page.locator('[data-test="password-error"]');

    await expect(userErrorMessage).toBeVisible();
    await expect(userErrorMessage).toHaveText('Email is required');

    await page.screenshot({
        path: 'e2etest/PracticeSoftwareTestingWebsite/Screenshots/login-empty-inputs.png',
        fullPage: true
    });

    await expect(passwordErrorMessage).toBeVisible();
    await expect(passwordErrorMessage).toHaveText('Password is required');


});

//Unacceptable Email and Acceptable Password Login Test
test('Login with unacceptable email and acceptable password', async ({ page }) => {
    const email = 'invalid-email';
    const password = 'welcome01';

    await page.locator('[data-test="email"]').fill(email);
    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-submit"]').click();

    const emailErrorMessage = page.locator('[data-test="email-error"]');
    await expect(emailErrorMessage).toBeVisible();

    await page.screenshot({
        path: 'Playwright/e2etest/PracticeSoftwareTestingWebsite/Screenshots/Login/login-unacceptable-email.png',
        fullPage: true
    });

    await expect(emailErrorMessage).toHaveText('Email format is invalid');
});

//Unacceptable Email with extra Space Login Test
test('Login with unacceptable email with Space', async ({ page }) => {
    const email = 'custo mer1@a';
    const password = 'welcome01';

    await page.locator('[data-test="email"]').fill(email);
    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-submit"]').click();

    const emailErrorMessage = page.locator('[data-test="email-error"]');
    await expect(emailErrorMessage).toBeVisible();

    await expect(emailErrorMessage).toHaveText('Email format is invalid');

    await page.screenshot({
        path: 'Playwright/e2etest/PracticeSoftwareTestingWebsite/Screenshots/Login/login-unacceptable-email-space.png',
        fullPage: true
    });
});

// Correct Email and Incorrect Password Login Test
test('Login with correct email and incorrect password', async ({ page }) => {

    const email = 'customer@practicesoftwaretesting.com';
    const password = 'wrongpassword';

    await page.locator('[data-test="email"]').fill(email);
    await page.locator('[data-test="password"]').fill(password);

    for (let i = 0; i < 3; i++) {
        await page.locator('[data-test="login-submit"]').click();
    }

    const errorMessage = page.locator('[data-test="login-error"]');
    
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Invalid email or password');

    await page.screenshot({
        path: 'Playwright/e2etest/PracticeSoftwareTestingWebsite/Screenshots/Login/login-incorrect-pass.png',
        fullPage: true
    });
});

// Correct Email and Short Password Login Test
test('Login with correct email and Short password', async ({ page }) => {

    const email = 'customer2@practicesoftwaretesting.com';
    const password = '12';

    await page.locator('[data-test="email"]').fill(email);
    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-submit"]').click();

    const errorMessage = page.locator('[data-test="password-error"]');
    
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Password length is invalid');

    await page.screenshot({
        path: 'Playwright/e2etest/PracticeSoftwareTestingWebsite/Screenshots/Login/login-short-pass.png',
        fullPage: true
    });
});

// Correct Email and Long Password Login Test
test('Login with correct email and Long password', async ({ page }) => {

    const email = 'admin@practicesoftwaretesting.com';
    const password = '12345678901234567890123456789012345678901';

    await page.locator('[data-test="email"]').fill(email);
    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-submit"]').click();

    const errorMessage = page.locator('[data-test="password-error"]');
    
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Password length is invalid');

    await page.screenshot({
        path: 'Playwright/e2etest/PracticeSoftwareTestingWebsite/Screenshots/Login/login-long-pass1.png',
        fullPage: true
    });
});

// Multiple Incorrect Login Attempts Test
// Working but not proven total click to show the error
test('Login with Same Email and Many Incorrect Password Attempt', async ({ page }) => {

    const email = 'admin@practicesoftwaretesting.com';
    const password = 'wrongpassword';

    await page.locator('[data-test="email"]').fill(email);
    await page.locator('[data-test="password"]').fill(password);

    for (let i = 0; i < 9; i++) {
    await page.locator('[data-test="login-submit"]').click();

    if (i < 8) {
            await expect(page.locator('[data-test="login-error"]'))
                .toHaveText('Invalid email or password');
        }
    }

    await expect(page.locator('[data-test="login-error"]'))
        .toHaveText(
            'Account locked, too many failed attempts. Please contact the administrator.'
        );

    const errorMessage = page.locator('[data-test="login-error"]');
    
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Account locked, too many failed attempts. Please contact the administrator.');

    await page.screenshot({
        path: 'Playwright/e2etest/PracticeSoftwareTestingWebsite/Screenshots/Login/login-many-fail.png',
        fullPage: true
    });
});

