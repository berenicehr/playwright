import { Locator, Page } from "@playwright/test";

export default class HamburgerMenu {
    page: Page
    services: Locator
    industries: Locator
    insights: Locator
    about: Locator

    constructor(page: Page){
        this.page = page
        this.services = page.locator('span > a.hamburger-menu__link.first-level-link[href="/services"]:first-child');
        this.industries = page.locator('//a[contains(text(), "Industries") and @class="hamburger-menu__link first-level-link gradient-text"]');
        this.industries = page.locator('span').filter({ hasText: 'Insights Insights' }).getByRole('link');
        this.about = page.locator('span').filter({ hasText: 'About About' }).getByRole('link');
    }
}