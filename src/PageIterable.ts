export const PagesIterableMixin = (superclass: any) => class extends superclass {
    [Symbol.iterator]() {
        let index = 0;

        return {
            next: () => {
                if (index < this.pages.length) {
                    let page = this.pages.getPageById(index);
                    let descriptionOfPage = page.toString();
                    index++;
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
