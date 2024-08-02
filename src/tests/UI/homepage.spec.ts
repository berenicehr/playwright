import { expect, test } from "@playwright/test";
import Common from "../../POM/components/commons/common.ts"
import Homepage from "../../POM/pages/homepage.ts";

test.describe('Homepage', () => {

    test('Navigate to Epam Homepage and accept cookies', async ({ page }) => {
        const common = new Common(page);
        const homepage = new Homepage(page);
        await common.navigateTo("https://www.epam.com/");
        const canadaButton = await homepage.canadaButton
        await expect(canadaButton).toBeVisible();
        page.pause();
        await canadaButton.click();
    })

    test('Navigate to Epam Careers page', async ({ page }) => {
        const common = new Common(page);
        await common.navigateTo("https://www.epam.com/careers");
    })
})