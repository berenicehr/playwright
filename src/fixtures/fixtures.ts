import {test as base} from "@playwright/test"
import {CookiesBanner, HamburgerMenu, Header, Utils} from "../po/components/index.components.ts"
import {Homepage} from "../po/pages/index.pages.ts"
type ui = {
    header: Header,
    cookiesBanner: CookiesBanner,
    common: Utils
    homepage: Homepage
    hamburgerMenu: HamburgerMenu
}

export const test = base.extend<ui>({

    header: async({page}, use) =>{
        const epamHeader = new Header(page);
        await use(epamHeader);
    },

    cookiesBanner: async({page}, use) => {
        const cookieBanner = new CookiesBanner(page);
        await use(cookieBanner);
    },

    common: async({page}, use) => {
        const common = new Utils(page);
        await use(common);
    },

    homepage: async({page}, use) => {
        const home = new Homepage(page);
        await use(home);
    },

    hamburgerMenu: async({page}, use) => {
        const hamburger = new HamburgerMenu(page);
        await use(hamburger);
    }
})
