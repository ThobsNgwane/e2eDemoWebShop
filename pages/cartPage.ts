import { expect, Locator, Page } from "@playwright/test";

export class cartPage {
  readonly page: Page;
  readonly shoppingCartLink : Locator;
  readonly termsOfServiceCheckbox: Locator;
  readonly checkoutButton: Locator;
  readonly successMessage: Locator;
  readonly checkoutSteps:Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartLink = page.locator('[class="cart-label"]');
    this.termsOfServiceCheckbox = page.locator('[id="termsofservice"]');
    this.checkoutButton = page.locator('[id="checkout"]');
    this.checkoutSteps = page.locator('[id="checkout-steps"]');
  }

  async checkoutTheProduct(){
    await this.shoppingCartLink.first().click();
    await this.termsOfServiceCheckbox.check();
    await this.checkoutButton.click();
    await expect(this.checkoutSteps).toBeVisible();


  }
}