

import { Publisher } from "app/book/components/shared/publisher";

export interface Book {
    title: string;
    subtitle: string;
    isbn: string;
    abstract: string;
    numPages: number,
    author: string;
    publisher: Publisher
}
