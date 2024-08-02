import { Locator, Page } from "@playwright/test";
export default class PracticePage {
    page: Page
    emailInput: Locator;
    passwordInput: Locator;
    companyInput: Locator;
    mobileInput: Locator;
    submitFormButton: Locator;
    firstCrushInput: Locator;

    constructor(page: Page) {

        this.page = page;
        this.emailInput = this.page.locator('input[dataid="sh_email1"]');
        this.passwordInput = this.page.locator('input[placeholder="Enter Password"]');
        this.companyInput = this.page.getByRole('textbox', { name: 'Enter your company' })
        this.mobileInput = this.page.getByRole('spinbutton');
        this.submitFormButton = this.page.locator('button[name="Submit"]');
        this.firstCrushInput = this.page.locator('#inp_val');
    }

    async fillInput( input: Locator, data: string | number) {
       await input.fill(String(data))
    }

}