import { Locator, Page } from "@playwright/test";

export default class Homepage {

    
    page: Page
    customerResultsLearnMore: Locator
    canadaButton: Locator


    constructor(page:Page){
        this.page = page
        this.customerResultsLearnMore = page.locator('p.scaling-of-text-wrapper a[href="/services/client-work"]');
        this.canadaButton = page.locator('div.owl-item.active button[data-country-title="Canada"]')
    }
}