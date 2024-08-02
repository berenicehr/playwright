import { chromium, Page, Browser } from "@playwright/test";
import CookiesBanner from "../po/components/cookiesBanner";

export default async function globalSetup(){
    try {
        const cookiesFile = "src/configs/cookies.json"
        const browser: Browser = await chromium.launch({headless: false});
        const context = await browser.newContext();
        const page: Page = await context.newPage();
        const cookieBanner = new CookiesBanner(page)
        await page.goto("https://www.epam.com/");
        await cookieBanner.acceptCookiesButton.click();
        await page.context().storageState({path: cookiesFile})
        await browser.close();
    } catch (error) {
        console.error('Error in global setup:', error);
        throw error;
    }

}