import { Book } from '../models/books';

export function filterBooks(books: Book[], filterText: string): Book[] {
  const lowerFilterText = filterText.toLocaleLowerCase();
  return books.filter(book =>
    book.title.toLocaleLowerCase().includes(lowerFilterText) ||
    book.synopsis.some(s => s.toLocaleLowerCase().includes(lowerFilterText))
  );
}
