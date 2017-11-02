import { BookItem } from './bookItem.model';
export class BookDetail {
    public kind: string;
    public totalItems: number;
    public items: Array<BookItem>;
}