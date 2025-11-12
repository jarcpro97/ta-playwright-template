import {test, expect} from "@playwright/test";
import { LoginPage } from "../../src/pages/login.page";
import { HomePage } from "../../src/pages/home.page";

test.describe('login tests', { tag: ['@regression', '@login']}, () => {
    test('login with pom', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);
        await loginPage.visit();
        await loginPage.enterCredentials('standard_user','secret_sauce')
        await loginPage.pressLoginButton()
        await homePage.assertLoggedIn();
    });

    test('login with codegen', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="title"]')).toBeVisible();
        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
      });
});