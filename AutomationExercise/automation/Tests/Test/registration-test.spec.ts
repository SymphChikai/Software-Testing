import { test } from '@playwright/test';
import { RegisterPage } from '../Pages/Register';

test('TC-R011 Register new user with valid data', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    const timestamp = Date.now();

    const user = {
        title: 'Mr' as const,
        name: `Ben${timestamp}`,
        email: `ben${timestamp}@email.com`,
        password: 'Qwerty123.',
        firstName: 'Ben',
        lastName: 'Ten',
        company: 'ABC Company',
        address: '123 Main Street',
        country: 'India',
        state: 'Quezon',
        city: 'Lucena',
        zipcode: '4301',
        mobileNumber: `09${Math.floor(Math.random() * 1000000000)}`
    };

    await registerPage.navigateToRegistration();

    await registerPage.startSignup(
        user.name,
        user.email
    );

    await registerPage.completeRegistration(user);

    await registerPage.verifyAccountCreated();
});

    test('TC-R012 Register with existing email address', async ({ page }) => {
        const registerPage = new RegisterPage(page);

        await registerPage.navigateToRegistration();

        await registerPage.startSignup(
            'Ben',
            'Ben@email.com'
        );

        await registerPage.verifyExistingEmailError();
    });

