import { test } from '@playwright/test';
import { ProductPage } from '../Pages/Product';

test.describe('Product Search Tests', () => {

    test('TC-S021 Valid and existing product search', async ({ page }) => {

        const productPage = new ProductPage(page);

        await productPage.navigateToProducts();

        await productPage.searchProduct('Top');

        await productPage.verifySearchReturnedProducts();
    });

    test('TC-S022 Partial searching products', async ({ page }) => {

        const productPage = new ProductPage(page);

        await productPage.navigateToProducts();

        await productPage.searchProduct('Ze');

        await productPage.verifyProductNameContains('Ze');
    });

    test('TC-S023 Select products with listed category', async ({ page }) => {

        const productPage = new ProductPage(page);

        await productPage.navigateToProducts();

        await productPage.selectWomenDressCategory();

        await productPage.verifyCategoryPage('WOMEN - DRESS PRODUCTS');
    });

    test('TC-S024 Select products with listed brands', async ({ page }) => {

        const productPage = new ProductPage(page);

        await productPage.navigateToProducts();

        await productPage.selectBrand('Allen Solly Junior');

        await productPage.verifyBrandPage('BRAND - ALLEN SOLLY JUNIOR PRODUCTS');
    });

    test('TC-S025 Invalid product search', async ({ page }) => {

        const productPage = new ProductPage(page);

        await productPage.navigateToProducts();

        await productPage.searchProduct('Sando');

        await productPage.verifyProductsVisible();
    });

    test('TC-S026 Viewing product details', async ({ page }) => {

        const productPage = new ProductPage(page);

        await productPage.navigateToProducts();

        await productPage.viewFirstProduct();

        await productPage.verifyProductDetailPage();
    });

});