import { Item } from './Item';
import { Pages } from "./Pages";

export class Book extends Item {
    protected pages: Pages;
    private readonly title: string;
    private readonly author: string;

    constructor(title: string, author: string, pages: Pages) {
        super();
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.length}`
    }

}
