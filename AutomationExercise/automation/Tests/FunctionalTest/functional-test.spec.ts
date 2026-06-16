import { test, expect } from '@playwright/test';


test('Full function testing from account registration to checkout then logout', async ({ page }) => {

    test.setTimeout(180000);

    await page.route('**/api/ads', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                ads: []
            })
        });
    });

    const userData = {
        name: 'John Doe',
        email: `john.doe1${Date.now()}@example.com`, // Unique email for each test run
        password: 'Pass.123'
    };

    // 1. Navigate to the website
    await page.goto('https://automationexercise.com/');

    // 2. Click on 'Signup / Login' button
    await page.click('a[href="/login"]');

    // 3. Fill in the registration form and submit
    await page.fill('input[data-qa="signup-name"]', userData.name);
    await page.fill('input[data-qa="signup-email"]', userData.email);
    await page.click('button[data-qa="signup-button"]');

    // 4. Fill in the account details and create account
    await expect(page.locator('h2:has-text("Enter Account Information")')).toBeVisible();

    await page.getByLabel('Mr.').check();
    await page.fill('input[data-qa="password"]', userData.password);
    await page.fill('input[data-qa="first_name"]', 'John');
    await page.fill('input[data-qa="last_name"]', 'Doe');
    await page.fill('input[data-qa="company"]', 'Example Inc.');

    await page.fill('input[id="address1"]', '123 Main St');
    await page.selectOption('select[name="country"]', 'Canada');
    await page.fill('input[name="state"]', 'CA');
    await page.fill('input[data-qa="city"]', 'Anytown');
    await page.fill('input[name="zipcode"]', '12345');
    await page.fill('input[name="mobile_number"]', '1234567890');
    await page.click('button[type="submit"]');

    // 5. Verify account creation
    await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();
    await page.click('a:has-text("Continue")');

    // 6. Search for and add products to cart
    await page.click('a[href="/products"]');

    await page.locator('h2:has-text("All Products")').waitFor();

    await page.fill('input[name="search"]', 'T-Shirt');
    await page.locator('#submit_search').click();
    await expect(page.locator('h2:has-text("Searched Products")')).toBeVisible();

    const firstProduct = await page.locator('a:has-text("Add to cart")');
    await expect(firstProduct.first()).toBeVisible();
    await firstProduct.first().click();


    await expect(page.locator('p:has-text("Your product has been added to cart.")')).toBeVisible();
    await page.click('button:has-text("Continue Shopping")');

    await page.fill('input[name="search"]', 'Jeans');
    await page.locator('#submit_search').click();
    
    await expect(page.locator('h2:has-text("Searched Products")')).toBeVisible();

    const secondProduct = await page.locator('a:has-text("Add to cart")');
    await expect(secondProduct.first()).toBeVisible();
    await secondProduct.first().click();

    await page.locator('p:has-text("Your product has been added to cart.")').waitFor();
    await page.getByRole('link', { name: 'View Cart' }).click();

    // 7. Proceed to checkout.  
    await page.locator('li:has-text("Shopping Cart")').waitFor();

    await page.click('a:has-text("Proceed To Checkout")');
    await expect(page.locator('h2:has-text("Address Details")')).toBeVisible();

    await page.fill('textarea[name="message"]', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');

    await page.click('a:has-text("Place Order")');

    // 8. Fill in billing details and place order
    await expect(page.locator('h2:has-text("Payment")')).toBeVisible();

    await page.fill('input[name="name_on_card"]', 'John Doe');
    await page.fill('input[name="card_number"]', '4111111111111111');
    await page.fill('input[name="cvc"]', '123');
    await page.fill('input[name="expiry_month"]', '12');
    await page.fill('input[name="expiry_year"]', '2025');
    await page.click('button:has-text("Pay and Confirm Order")');

    
    await expect(page.locator('p:has-text("Congratulations! Your order has been confirmed!")')).toBeVisible();
    
    const downloadInvocice = page.waitForEvent('download');
    await page.click('a:has-text("Download Invoice")');
    const invoice = await downloadInvocice;

    await invoice.saveAs(`FunctionalTest/invoice${Date.now()}.txt`);
    expect(await invoice.path()).not.toBeNull();

    await page.click('a:has-text("Continue")');

    // 9. Logout
    await page.click('a:has-text("Logout")');
    await expect(page.locator('a:has-text("Signup / Login")')).toBeVisible();

    // 10. Login with the registered credentials
    await page.click('a[href="/login"]');
    await page.fill('input[data-qa="login-email"]', userData.email);
    await page.fill('input[data-qa="login-password"]', userData.password);
    await page.click('button[data-qa="login-button"]');

    await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();

    // 11. Delete the account
    await page.getByRole('link', { name: ' Delete Account' }).click();

    await page.getByText('Account Deleted!').waitFor();
    await page.getByRole('link', { name: 'Continue' }).click();

});
