import { test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
});
//POSITIVE
//Search Product Testing
test('Search Product Test', async ({ page }) => {

    const productName = "Hammer";
    
    await page.locator('[data-test="search-query"]').fill(productName);

    const searchButton = page.locator('[data-test="search-submit"]');
    await expect(searchButton).toBeVisible();
    await searchButton.click();

    await expect(page.locator('[data-test="search-term"]')).toHaveText(productName);

    const productNames = await page.locator('[data-test="product-name"]');

    await expect(productNames.first()).toBeVisible();

    const count = await productNames.count();

    for (let i = 0; i < count; i++) {
        const name = await productNames.nth(i).textContent();

        await expect(name?.toLowerCase()).toContain(productName.toLowerCase());
        console.log(name);
    }
    
    await page.screenshot({
        path: 'Playwright/e2etest/PracticeSoftwareTestingWebsite/Screenshots/Search/search-product.png',
        fullPage: true
    });
});
test('Search Product with Partial Input', async ({ page }) => {

    const productName = "ers";
    
    await page.locator('[data-test="search-query"]').fill(productName);

    const searchButton = page.locator('[data-test="search-submit"]');
    await expect(searchButton).toBeVisible();
    await searchButton.click();

    await expect(page.locator('[data-test="search-term"]')).toHaveText(productName);

    const productNames = await page.locator('[data-test="product-name"]');
    await expect(productNames.first()).toBeVisible();

     const count = await productNames.count();

    for (let i = 0; i < count; i++) {
        const name = await productNames.nth(i).textContent();
        await expect(name?.toLowerCase()).toContain(productName.toLowerCase());
        console.log(name);
    }
    
    await page.screenshot({
        path: 'Playwright/e2etest/PracticeSoftwareTestingWebsite/Screenshots/Search/search-partial-input.png',
        fullPage: true
    });
});
//NEGATIVE
//No Results Testing
test('Search Product with No Results Test', async ({ page }) => {

    const productName = "ItemNotInCatalog";
    
    await page.locator('[data-test="search-query"]').fill(productName);

    const searchButton = page.locator('[data-test="search-submit"]');
    await expect(searchButton).toBeVisible();
    await searchButton.click();

    await expect(page.locator('[data-test="search-term"]')).toHaveText(productName);

    const noResults = page.locator('[data-test="no-results"]');
    await expect(noResults).toBeVisible();
    await expect(noResults).toHaveText('There are no products found.');

    await page.screenshot({
        path: 'Playwright/e2etest/PracticeSoftwareTestingWebsite/Screenshots/Search/search-no-results.png',
        fullPage: true
    });
});
//Space Only Search Test
test('Search Product with Spaces Only', async ({ page }) => {

    const productName = "   ";
    
    await page.locator('[data-test="search-query"]').fill(productName);

    const searchButton = page.locator('[data-test="search-submit"]');
    await expect(searchButton).toBeVisible();
    await searchButton.click();

    await expect(page.locator('[data-test="search-term"]')).toHaveText(productName);

    const noResults = page.locator('[data-test="no-results"]');
    await expect(noResults).toBeVisible();
    await expect(noResults).toHaveText('There are no products found.');

    await page.screenshot({
        path: 'Playwright/e2etest/PracticeSoftwareTestingWebsite/Screenshots/Search/search-space-only.png',
        fullPage: true
    });
});
//Incorrect Spelling Test
test('Search Product with Incorrect Spelling', async ({ page }) => {

    const productName = "pleirs";
    
    await page.locator('[data-test="search-query"]').fill(productName);

    const searchButton = page.locator('[data-test="search-submit"]');
    await expect(searchButton).toBeVisible();
    await searchButton.click();

    await expect(page.locator('[data-test="search-term"]')).toHaveText(productName);

    const noResults = page.locator('[data-test="no-results"]');
    await expect(noResults).toBeVisible();
    await expect(noResults).toHaveText('There are no products found.');

    await page.screenshot({
        path: 'Playwright/e2etest/PracticeSoftwareTestingWebsite/Screenshots/Search/search-incorrect-spelling.png',
        fullPage: true
    });
});
//Partial Input Testing

//OTHER SEARCH OPTION TEST
test('Search Product with Name Sort Search Option', async ({ page }) => {

    await page.locator('[data-test="sort"]').selectOption("Name (Z - A)");

    const productNames = await page.locator('[data-test="product-name"]');
    await expect(productNames.first()).toBeVisible();

     const count = await productNames.count();

    for (let i = 0; i < count; i++) {
        const name = await productNames.nth(i).textContent();
        console.log(name);
    }
    
    await page.screenshot({
        path: 'Playwright/e2etest/PracticeSoftwareTestingWebsite/Screenshots/Search/search-sort.png',
        fullPage: true
    });

});

test('Search Product with Price Sort Search Option', async ({ page }) => {

    await page.locator('[data-test="sort"]').selectOption("Price (High - Low)");

    const productNames = await page.locator('[data-test="product-name"]');
    const productPrices = await page.locator('[data-test="product-price"]');

    await expect(productPrices.first()).toBeVisible();
    await expect(productNames.first()).toBeVisible();

     const count = await productNames.count();

    for (let i = 0; i < count; i++) {
        const name = await productNames.nth(i).textContent();
        const price = await productPrices.nth(i).textContent();
        console.log(name, price);
    }
    
    await page.screenshot({
        path: 'Playwright/e2etest/PracticeSoftwareTestingWebsite/Screenshots/Search/search-sort-price.png',
        fullPage: true
    });

});
