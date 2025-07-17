import { expect, Locator, Page } from "@playwright/test";

export class homePage {
  readonly page: Page;
  readonly computersTab : Locator;
  readonly notebookCategory: Locator;
  readonly addtoCartButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.computersTab = page.locator('[href="/computers"]');
    this.notebookCategory = page.locator('[href="/notebooks"]');
    this.addtoCartButton = page.locator('[class="button-2 product-box-add-to-cart-button"]');
    this.successMessage = page.locator('[class="content"]');
  }

  async addProductToCart(){
    await this.computersTab.first().click();
    await this.notebookCategory.first().click();
    await this.addtoCartButton.click();
    await expect(this.successMessage).toBeVisible();
  }
}