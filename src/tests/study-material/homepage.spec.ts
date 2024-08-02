import { test, expect } from '@playwright/test';
import Common from '../../po/pages/components/commons/common.ts';
import PracticePage from '../../po/pages/xpath.practice.page.ts';

test.describe("Practice page", async() => {
    test.beforeAll(async({browser}) => {
        console.log(browser.version());
    });

    test.beforeEach(async({page}) => {
        const common = new Common(page); 

        await common.navigateTo("https://selectorshub.com/xpath-practice-page/")
    })

    test("Verify copaAilines title", async({page}) => {
        await expect(page).toHaveTitle(/Xpath Practice Page/);
    })

    test("Validate inputs can be filled", async({page}) => {
        const practicePage = new PracticePage(page)
        const emailInput = await practicePage.emailInput
        await emailInput.click();
        await practicePage.fillInput(practicePage.emailInput, "bere4758@gmail.com");
        await practicePage.fillInput(practicePage.passwordInput, "MyFakePassword");
        await practicePage.fillInput(practicePage.companyInput, "EPAM");
        await practicePage.fillInput(practicePage.mobileInput, 551920173);
        await practicePage.fillInput(practicePage.firstCrushInput, "Javascript");
    })

    test.beforeEach(async({ context }) => {
        await context.clearPermissions();
    });

    test.afterEach(async({ context }) => {
        await context.clearCookies();
    })

    test.afterAll(async({ page }) => {
        await page.close();
    });
});    


