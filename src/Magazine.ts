import { Item } from './Item';
import {Pages} from "./Pages";

export class Magazine extends Item {
    protected pages: Pages;
    private title: string = '';

    constructor(title: string, pages: Pages) {
        super();
        this.setTitle(title);
        this.pages = pages;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }

    toString(): string {
        return `Magazine: ${this.getTitle()} with number of pages: ${this.pages.length}`
    }

}
