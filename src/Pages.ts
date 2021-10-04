import { Page } from "./Page";

export class Pages {
    pages: Page[];
    length: number;

    constructor(pages: Page[]) {
        this.pages = pages;
        this.length = pages.length;
    }

    getPageById(number: number): Page {
        return this.pages[number];
    }
}
