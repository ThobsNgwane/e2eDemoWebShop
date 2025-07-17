import { expect, Locator, Page } from "@playwright/test";

export class checkoutPage {
  readonly page: Page;
  readonly continueButton : Locator;
  readonly pickupInStoreChkbox: Locator;
  readonly nextDayAirShippingMethod: Locator;
  readonly moneyPaymentMethod: Locator;
  readonly backLink:Locator;
  readonly productName:Locator;
  readonly confirmOrderButton:Locator;


  constructor(page: Page) {
    this.page = page;
    this.continueButton = page.locator('.new-address-next-step-button');
    this.pickupInStoreChkbox = page.locator('[id="PickUpInStore"]');
    this.nextDayAirShippingMethod = page.locator('[id="shippingoption_1"]');
    this.moneyPaymentMethod = page.locator('[id="paymentmethod_1"]');
    this.backLink = page.locator('[class="back-link"]');
    this.productName = page.locator('[class="product-name"]');
    this.confirmOrderButton = page.locator('[class="button-1 confirm-order-next-step-button"]');
  }

  async enterTheBillingAddress(){
    await this.continueButton.nth(0).waitFor({state:"visible"});
    await this.continueButton.first().click();
    await expect(this.pickupInStoreChkbox).toBeVisible();
  }

  async enterShippingAddress(){
    await this.continueButton.first().click();
    await expect(this.nextDayAirShippingMethod).toBeVisible();
  }

  async selectShippingMethod(){
    await this.nextDayAirShippingMethod.click();
    await this.continueButton.first().click();
    await expect(this.moneyPaymentMethod).toBeVisible();
  }

  async selectPaymentMethod(){
    await this.moneyPaymentMethod.click();
    await this.continueButton.first().click();
    await expect(this.backLink).toBeVisible();
  }
  async verifyPaymentInformation(){
    await this.continueButton.first().click();
    await expect(this.productName).toBeVisible();
  }

  async confirmOrder(){
    await this.confirmOrderButton.click();

  }
}