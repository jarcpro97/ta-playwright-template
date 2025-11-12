import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly url: string;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;


    constructor(page: Page){
        this.page = page;
        this.url = 'https://www.saucedemo.com';
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async visit(): Promise<void> {
        await this.page.goto(this.url);
    }

    async enterCredentials(username: string, password: string): Promise<void>{
        await this.userNameInput.click();
        await this.userNameInput.fill(username);
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
    }

    async pressLoginButton(): Promise <void> {
        await this.loginButton.click();
    }

}