import {test, expect} from '@playwright/test';
import { CheckoutPage } from '../Pages/Checkout';

test.describe('Checkout Tests', () => {

    test('TC-A036 Checkout product without logged-in user account', async ({ page }) => {

        const checkoutPage = new CheckoutPage(page);

        await checkoutPage.navigateToProducts();

        await checkoutPage.addFirstProductToCart();

        await checkoutPage.viewCart();

        await checkoutPage.proceedToCheckout();

        await checkoutPage.verifyLoginRequired();
    });

    test('TC-A037 Checkout product with logged-in user account', async ({ page }) => {

        const checkoutPage = new CheckoutPage(page);

        await checkoutPage.login(
            'Ralph@email.com',
            'Pass.123'
        );

        await checkoutPage.navigateToProducts();

        await checkoutPage.addFirstProductToCart();

        await checkoutPage.viewCart();

        await checkoutPage.proceedToCheckout();

        await checkoutPage.placeOrder();

        await checkoutPage.fillPaymentDetails();

        await checkoutPage.confirmOrder();

        await checkoutPage.verifyOrderSuccess();
    });

    test('TC-A038 Downloading invoice after order placed', async ({ page }) => {

        const checkoutPage = new CheckoutPage(page);

        await checkoutPage.login(
            'Ralph@email.com',
            'Pass.123'
        );

        await checkoutPage.navigateToProducts();

        await checkoutPage.addFirstProductToCart();

        await checkoutPage.viewCart();

        await checkoutPage.proceedToCheckout();

        await checkoutPage.placeOrder();

        await checkoutPage.fillPaymentDetails();

        await checkoutPage.confirmOrder();

        await checkoutPage.verifyOrderSuccess();

        const invoice = await checkoutPage.downloadInvoice();

        await invoice.saveAs(
            `Tests/downloads/invoice-${Date.now()}.txt`
        );

        expect(await invoice.path()).not.toBeNull();
    });

});