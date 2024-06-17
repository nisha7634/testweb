import { Keyboard, Locator, Page, expect } from "@playwright/test";
import dotenv from "dotenv";

export class LoginPage {
    readonly page: Page;
    readonly userNameOrEmailInputField: Locator;
    readonly passwordInputField: Locator;
    readonly signinButton: Locator;
    readonly loader: Locator;
    constructor(page: Page) {
        this.page = page;
        this.userNameOrEmailInputField = page.locator('#mat-input-0');
        this.passwordInputField = page.locator('#mat-input-1');
        this.loader = page.locator('loader-overlay');
        this.signinButton = page.locator('button[type="submit"] span[class="mat-button-wrapper"]');

    }

    async gotoLoginPage(url: string) {
        await this.page.goto(process.env.URL as string || url);
        await this.page.waitForLoadState('networkidle');
    }

    async loginToApplication(superUser: string, password: string) {
        await this.userNameOrEmailInputField.fill(superUser);
        await this.passwordInputField.fill(password);
        await this.signinButton.click();

    }

    async enterLoginDetails(superUser: string, password: string) {
        await this.userNameOrEmailInputField.fill(superUser);
        await this.passwordInputField.fill(password);
    }
    async enterEmailId(emailID: string) {
        await this.userNameOrEmailInputField.fill(emailID);
    }

    async clickOnSigninButton() {
        await this.signinButton.click();
        await this.page.waitForLoadState('networkidle');
    }
    /**
     * This function is used to verify the current page title
     * @param expectedPageTitle - the title youwant to verify
     */
    async verifyPageTitle(expectedPageTitle: string) {
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(10000);
        const actualPageTitle = await this.page.title();
        expect(actualPageTitle).toBe(expectedPageTitle);
    }
}