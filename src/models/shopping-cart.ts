import { Book } from './books';

export interface ShoppingCartItem {
  quantity: number;
  book: Book;
}
