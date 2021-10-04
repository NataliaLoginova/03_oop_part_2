import { Item } from './Item';
import { Pages } from "./Pages";

export class Comics extends Item {
    protected pages: Pages;
    private title: string = '';
    private author: string = '';
    private artist: string = '';

    constructor(title: string, author: string, artist: string, pages: Pages) {
        super();
        this.setTitle(title);
        this.setAuthor(author);
        this.artist = artist;
        this.pages = pages;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setArtist(artist: string): void {
        this.artist = artist;
    }

    public getArtist(): string {
        return this.artist;
    }

    toString(): string {
        return `Comics: ${this.getTitle()} by ${this.getAuthor()}, the artist is ${this.getArtist()}, number of pages: ${this.pages.length}`
    }

}
