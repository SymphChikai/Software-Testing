import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    var email = 'customer2@practicesoftwaretesting.com';
    var password = 'welcome01';
    await page.goto('https://practicesoftwaretesting.com/');

    await page.locator('[data-test="nav-sign-in"]').click();
    await page.locator('[data-test="email"]').click();

    await page.locator('[data-test="email"]').fill(email);

    await page.locator('[data-test="password"]').fill(password);

    await page.locator('[data-test="login-submit"]').click();

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

    await page.locator('[data-test="nav-home"]').click();
});

test('Search for a product, count, and add it to the cart', async ({ page }) => {

    const productName = "Pliers";
    const expectedCount = 4;
    const searchInput = page.locator('#search-query');

    await searchInput.fill(productName);
    await page.locator('[data-test="search-submit"]').click();

    await expect(page.getByTestId('search-result-count')).toContainText(`${expectedCount} products found for '${productName}'`);
    
    const productItems = await page.locator('[data-test="search_started"] a.card');
    const totalListed = await page.locator('[data-test="search-result-count"]').innerText();

    const productCount = await productItems.count();
    
    console.log(`Total products listed: ${totalListed}`); 

    const productNames = await page
    .locator('[data-test^="product-"] img')
    .all()
    .then(images => Promise.all(
        images.map(img => img.getAttribute('alt'))
    ));

    console.log(productNames);

    await page.locator(`[alt="${productNames[0]}"]`).click();


    await expect(page.locator('[data-test="product-name"]')).toContainText(`${productNames[0]}`);

    await page.locator('[data-test="add-to-cart"]').click();

    await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();
    await page.locator('[data-test="nav-cart"]').click();
});