import { expect, Locator, Page } from "@playwright/test";
import { environmentConfig } from "../environment.config";

export class loginPage {
  readonly page: Page;
  readonly loginLink : Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly customerInfo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = page.locator('[class= "ico-login"]');
    this.emailField = page.locator('[id="Email"]');
    this.passwordField = page.locator('[id="Password"]');
    this.loginButton = page.locator('[class="button-1 login-button"]');
    this.customerInfo = page.locator('[class="account"]');
  }

  async goto() {
    await this.page.goto(environmentConfig.baseUrl!);
  }

  async clickLoginLink(){
    await this.loginLink.click();
    await expect(this.emailField).toBeVisible();
  }

  async enterUserEmailAndPassword(){
    await this.emailField.fill(environmentConfig.userEmail!);
    await this.passwordField.fill(environmentConfig.userPassword!);
    await this.loginButton.click();
    await expect(this.customerInfo.first()).toBeVisible();

  }
}