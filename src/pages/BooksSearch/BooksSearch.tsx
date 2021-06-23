import React, { useEffect, useState } from 'react';

import BookCard from '../../components/BookCard/BookCard';
import { getAllBooks } from '../../api/books';
import { Book } from '../../models/books';
import { useAppDispatch, useAppState } from '../../AppStateProvider';
import { getShoppingCartItemQuantity } from '../../store/shopping-cart';
import { filterBooks } from '../../services/filter-books';

export default function BooksSearch() {
  const state = useAppState();
  const dispatch = useAppDispatch();

  const [books, setBooks] = useState<Book[]>([]);
  const [booksLoading, setBooksLoading] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      setBooksLoading(true);
      const books = await getAllBooks();
      setBooks(books);
      setBooksLoading(false);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const filteredBooks = filterBooks(books, filterText);
    setFilteredBooks(filteredBooks);
  }, [books, filterText]);

  const handleRemoveFromCart = (book: Book) => {
    dispatch({ type: '[Books Search Page] Remove from Cart', payload: book });
  };

  const handleAddToCart = (book: Book) => {
    dispatch({ type: '[Books Search Page] Add to Cart', payload: book });
  };

  const handleFilterTextChange = (event: any) => {
    setFilterText(event.target.value);
  };

  return (
    <>
      <div className="my-4">
        <input className="form-control"
               type="search"
               placeholder="Rechercher un livre..."
               aria-label="Rechercher un livre"
               name="searchText"
               value={filterText}
               onChange={handleFilterTextChange}
               data-cy="searchText" />
      </div>

      {!booksLoading
        ? filteredBooks.map((book, index) => <BookCard key={index} book={book} removeFromCart={handleRemoveFromCart} addToCart={handleAddToCart} quantity={getShoppingCartItemQuantity(book.isbn)(state.shoppingCart)} />)
        : <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
      }
    </>
  );
}
