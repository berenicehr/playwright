import {test as base} from "@playwright/test"
import Header from "../POM/components/commons/header.ts"
import CookiesBanner from "../POM/components/cookiesBanner.ts"

type ui = {
    header: Header,
    cookiesBanner: CookiesBanner
}

export const test = base.extend<ui>({

    header: async({page}, use) =>{
        const epamHeader = new Header(page);
        await use(epamHeader)
    },

    cookiesBanner: async({page}, use) => {
        const cookieBanner = new CookiesBanner(page);
        await use(cookieBanner)
    }
})
