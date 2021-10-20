import { Page } from "./Page";

export class PageFactory {
    static build(pageConfig: ConstructorParameters<typeof Page>[]): Page[] {
        return pageConfig.map(page => new Page(...page));
    }
}

const bookConfig: ConstructorParameters<typeof Page>[] = [
    [1, 'with text', 'simple paper'],
    [2, 'with text', 'simple paper']
];

PageFactory.build(bookConfig)
