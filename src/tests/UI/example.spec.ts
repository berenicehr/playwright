import { expect, test } from "@playwright/test";
import Common from "../../po/components/commons/utils.ts"
import Homepage from "../../po/pages/homepage.ts";
//In case I don't want to use the global setup use context

test.use({storageState: "./src/configs/cookiesNotAccepted.json"});

test.describe('Homepage', () => {

    test.skip('Navigate to Epam Homepage without accepting cookies', async ({ page, context }) => {
        const common = new Common(page);
        const homepage = new Homepage(page);
        await context.clearCookies();
        await common.navigateTo("https://www.epam.com/");
        const canadaButton = await homepage.canadaButton
        await expect(canadaButton).toBeVisible();
        page.pause();
        await canadaButton.click();
    })

    test('Navigate to Epam Homepage without setup', async ({ page }) => {
        const common = new Common(page);
        const homepage = new Homepage(page);
        await common.navigateTo("https://www.epam.com/");
        const canadaButton = await homepage.canadaButton
        await expect(canadaButton).toBeVisible();
        page.pause();
        await canadaButton.click();
    })
})