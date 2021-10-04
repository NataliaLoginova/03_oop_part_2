import {PagesIterableMixin} from "./PageIterable";

export abstract class Item extends PagesIterableMixin(Object){
    abstract toString(): string;
}
