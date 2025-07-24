import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { homePage } from '../pages/homePage';
import { cartPage } from '../pages/cartPage';
import {checkoutPage} from '../pages/checkoutPage';


test('Test E2E shopping in the Demo Workshop', async ({ page }, testInfo) => {
    const login = new loginPage(page);
    await login.goto();
    await login.clickLoginLink();
    await login.enterUserEmailAndPassword();
    const home = new homePage(page);
    await home.addProductToCart();
    const cart = new cartPage(page);
    await cart.checkoutTheProduct();

});
