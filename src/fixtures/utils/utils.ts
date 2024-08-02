import { Page } from "@playwright/test";

export default class Utils {
    page: Page

    constructor(page: Page){
        this.page = page
    }

    async navigateTo(url: string){
        await this.page.goto(url)
    }
}