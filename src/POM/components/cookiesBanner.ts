import { Page, Locator } from "@playwright/test";

export default class CookiesBanner {

    page: Page
    acceptCookiesButton: Locator
    cookiesSetttingsButton: Locator
    policyText: Locator

    constructor(page:Page){
        this.page = page
        this.acceptCookiesButton = page.locator("#onetrust-accept-btn-handler");
        this.cookiesSetttingsButton = page.locator("#onetrust-pc-btn-handler");
        this.policyText = page.locator('#onetrust-policy-text');
    }
}