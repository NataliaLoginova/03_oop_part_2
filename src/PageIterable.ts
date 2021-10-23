export const PagesIterableMixin = (superclass: any) => class extends superclass {
    [Symbol.iterator]() {
        let index = 0;

        return {
            next: () => {
                if (index < this.pages.length) {
                    let page = this.pages.getPageById(index);
                    index++;
                    return {
                        value: {
                            toString: () => {
                                return `${this.toString()}, ${page.toString()}`
                            }
                        },
                        done: false
                    };
                } else {
                    return {done: true};
                }
            }
        }
    }
}
