import {test} from "../fixtures/custom.fixtures.ts"
import data from "../fixtures/data.json"
//Fixture example: 
// const practicePage = new PracticePage(page)
//Not required anymore

test("Validate inputs can be filled", async({page, practicePage}) => {
    await page.goto("https://selectorshub.com/xpath-practice-page/")
    const emailInput = await practicePage.emailInput
    await emailInput.click();
    await practicePage.fillInput(practicePage.emailInput, data.email);
    await practicePage.fillInput(practicePage.passwordInput, "MyFakePassword");
    await practicePage.fillInput(practicePage.companyInput, "EPAM");
    await practicePage.fillInput(practicePage.mobileInput, 551920173);
    await practicePage.fillInput(practicePage.firstCrushInput, "Javascript");
})