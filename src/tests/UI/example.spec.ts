import { expect, test } from "@playwright/test";
import Common from "../../POM/components/commons/common.ts"
import Homepage from "../../POM/pages/homepage.ts";

//In case I don't want to use the global setup use context

test.describe('Homepage', () => {

    test('Navigate to Epam Homepage and accept cookies', async ({ page, context }) => {
        const common = new Common(page);
        const homepage = new Homepage(page);
        await context.clearCookies();
        await common.navigateTo("https://www.epam.com/");
        const canadaButton = await homepage.canadaButton
        await expect(canadaButton).toBeVisible();
        page.pause();
        await canadaButton.click();
    })
})