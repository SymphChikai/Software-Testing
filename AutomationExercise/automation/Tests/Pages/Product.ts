import { Page, expect } from '@playwright/test';

export class ProductPage {
    constructor(private page: Page) {}

    async navigateToProducts() {
        await this.page.goto('https://automationexercise.com/');
        await this.page.click('a[href="/products"]');
    }

    async searchProduct(keyword: string) {
        await this.page.fill('input[name="search"]', keyword);
        await this.page.click('#submit_search');
    }

    async verifySearchResultContains(keyword: string) {
        await expect(
            this.page.locator('.features_items')
        ).toContainText(keyword);
    }

    async verifySearchReturnedProducts() {
        await expect(
            this.page.locator('.single-products').first()
        ).toBeVisible();

        const count = await this.page.locator('.single-products').count();

        console.log(`Number of products found: ${count}`);
        expect(count).toBeGreaterThan(0);
    }

    async verifyNoProductsFound() {
        await expect(
            this.page.locator('.features_items')
        ).not.toBeVisible();
    }

    async verifyProductNameContains(keyword: string) {
        const products = this.page.locator('.single-products p');
        const count = await products.count();

        expect(count).toBeGreaterThan(0);

        for (let i = 1; i < count; i++) {
            await expect(products.nth(i)).toContainText(keyword, {
                ignoreCase: true
            });
            console.log(`${await products.nth(i).textContent()} contains keyword "${keyword}"`);
        }
    }

    async verifyProductsVisible() {
        await expect(this.page.locator('.features_items')).toBeVisible();

        const products = this.page.locator('.single-products');
        const count = await products.count();
        console.log(`Number of products found: ${count}`);
        expect(count).toBe(0);
    }

    async selectWomenDressCategory() {
        await this.page.click('a[href="#Women"]');
        await this.page.click('a[href="/category_products/1"]');
    }

    async verifyCategoryPage(category: string) {
        await expect(this.page).toHaveURL(/category_products/);
        await expect(this.page.getByRole('heading', { name: category }))
            .toBeVisible();
    }

    async selectBrand(brandName: string) {
        await this.page.getByRole('link', { name: brandName }).click();
    }

    async verifyBrandPage(brandName: string) {
        await expect(this.page.getByRole('heading', { name: brandName }))
            .toBeVisible();
    }

    async viewFirstProduct() {
        await this.page.locator('a:has-text("View Product")')
            .first()
            .click();
    }

    async verifyProductDetailPage() {
        await expect(this.page).toHaveURL(/product_details/);
    }
}