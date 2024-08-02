import { Locator, Page } from "@playwright/test";

export default class Header {
    page: Page
    hamburgerMenu: Locator
    headerLogoLink: Locator
    themeSwitch: Locator
    servicesLink: Locator
    insightsLink: Locator
    aboutLink: Locator
    industriesLink: Locator
    careersLink: Locator
    contactUsLink: Locator
    languageButton: Locator
    headerSearchButton: Locator


    constructor(page: Page){
        this.page = page
        this.hamburgerMenu = page.locator('.hamburger-menu__button');
        this.headerLogoLink = page.locator('.header__logo-link');
        this.themeSwitch = page.locator('.header__vaulting-container > .theme-switcher-ui > .theme-switcher');
        this.servicesLink = page.locator('a[href="/services"]');
        this.insightsLink = page.locator('a[href="/insights"]');
        this.aboutLink = page.locator('a[href="/about"]');
        this.industriesLink = page.locator('a').filter({ hasText: 'Industries' }).nth(2)
        this.careersLink = page.locator('a[href="/careers"]');
        this.contactUsLink = page.getByRole('link', { name: 'CONTACT US' });
        this.languageButton = page.getByRole('button', { name: 'Global (EN)' });
        this.headerSearchButton = page.locator('button.header-search__button');
    }
}