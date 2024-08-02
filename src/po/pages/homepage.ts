import { Locator, Page } from "@playwright/test";

export default class Homepage {

    
    page: Page
    canadaButton: Locator

    constructor(page:Page){
        this.page = page
        this.canadaButton = page.locator('div.owl-item.active button[data-country-title="Canada"]')
    }
}