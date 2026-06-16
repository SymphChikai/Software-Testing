import {test, expect} from '@playwright/test';
import { CartPage } from '../Pages/Cart';

test.describe('Cart Tests', () => {

    test('TC-A031 Add to cart one product', async ({ page }) => {

        const cartPage = new CartPage(page);

        await cartPage.navigateToProducts();

        await page.click('a:has-text("View Product")');

        await cartPage.setQuantity(1);

        await cartPage.addToCart();

        await cartPage.verifyAddedPopup();

        await cartPage.viewCart();

        await cartPage.verifyQuantity(1);
    });

    test('TC-A032 Add to cart product with zero quantity', async ({ page }) => {

        const cartPage = new CartPage(page);

        await cartPage.navigateToProducts();

        await page.click('a:has-text("View Product")');

        await cartPage.setQuantity(0);

        await cartPage.addToCart();

        // Verify actual website behavior
    });   

    test('TC-A033 Add to cart product with max quantity', async ({ page }) => {

        const cartPage = new CartPage(page);

        await cartPage.navigateToProducts();

        await page.click('a:has-text("View Product")');

        await cartPage.setQuantity(9999);

        await cartPage.addToCart();

        // Verify actual website behavior
    });

    test('TC-A035 Remove product listed from shopping cart', async ({ page }) => {

        const cartPage = new CartPage(page);

        await cartPage.navigateToProducts();

        await page.click('a:has-text("Add to cart")');

        await cartPage.viewCart();

        await cartPage.removeFirstProduct();

        await expect(
            page.getByText('Cart is empty')
        ).toBeVisible();
    });
});
        