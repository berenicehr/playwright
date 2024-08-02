import {test} from "../../fixtures/fixtures.ts"
import { expect } from "@playwright/test"
import data from "../../fixtures/data.json"

test.describe('Homepage', () => {

    test('Navigate to Epam Homepage and accept cookies', async ({ page, common, homepage }) => {
        await common.navigateTo("https://www.epam.com/");
        const canadaButton = await homepage.canadaButton
        await expect(canadaButton).toBeVisible();
        page.pause();
        await canadaButton.click();
    })

    test('Navigate to Epam Careers page', async ({ page, common }) => {
        await common.navigateTo("https://www.epam.com/careers");
    })
    test.afterAll('Close browser', async({browser}) => {
        await browser.close()
    })
})
