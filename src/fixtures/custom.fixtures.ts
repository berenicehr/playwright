import {test as base } from "@playwright/test";
import PracticePage from "../po/pages/xpath.practice.page";
type uiPages = {
    practicePage: PracticePage,
}

export const test = base.extend<uiPages>({

    practicePage: async({page}, use) => {
        const practice = new PracticePage(page);
        await use(practice);
    },
})