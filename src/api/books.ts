import { Book } from '../models/books';

const baseUrl = 'https://henri-potier.techx.fr';

export function getAllBooks(): Promise<Book[]> {
  return fetch(`${baseUrl}/books`)
    .then((response) => response.json()) as Promise<Book[]>;
}
