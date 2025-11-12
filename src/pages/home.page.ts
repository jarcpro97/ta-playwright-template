import { expect, Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly homeTitle: Locator;
    readonly shoppingCartButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.homeTitle = page.locator('.title');
        this.shoppingCartButton = page.locator('.shopping_cart_link');
    }

    async assertLoggedIn(): Promise<void> {
        await expect(this.homeTitle).toBeVisible();
        await expect(this.shoppingCartButton).toBeVisible();
    }
}