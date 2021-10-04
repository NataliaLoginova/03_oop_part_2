import { Page } from "./Page";

export class PageFactory {
    static build(pageConfig: Set<any>): Page[] {
        const pages: Page[] = [];
        pageConfig.forEach((page: [number, string, string]) => {
            pages.push(new Page(...page))
        })
        return pages;
    }
}

const bookConfig = new Set([
    [1, 'with text', 'simple paper'],
    [2, 'with text', 'simple paper']
])

PageFactory.build(bookConfig)
