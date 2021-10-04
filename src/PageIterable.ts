export const PagesIterableMixin = (superclass: any) => class extends superclass {
    [Symbol.iterator]() {
        let index = 0;

        return {
            next: () => {
                index++;
                if (index - 1 < this.pages.length) {
                    let page = this.pages.getPageById(index - 1);
                    let descriptionOfPage = page.toString();
                    return {
                        value: Object.assign(page, {
                            toString: () => {
                                return `${this.toString()}, ${descriptionOfPage}`
                            }
                        }), done: false
                    };
                } else {
                    return {done: true};
                }
            }
        }
    }
}
