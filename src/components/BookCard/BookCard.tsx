import React from 'react';

import BookQuantity from '../BookQuantity/BookQuantity';
import { Book } from '../../models/books';

export interface BookCardProps {
  book: Book;
  quantity: number;
  removeFromCart: (book: Book) => void;
  addToCart: (book: Book) => void;
}

export default function BookCard({ book, quantity, removeFromCart, addToCart }: BookCardProps) {

  const handleRemoveFromCart = () => {
    removeFromCart(book);
  };

  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <article className="book-item card my-4">
      <div className="row g-0">

        <div className="book-item__cover book-cover col-md-2 text-center">
          <img src={book.cover}
               className="book-cover__image img-fluid p-2"
               alt={book.title} />
        </div>

        <div className="book-item__info book-info card-body col-md-8">
          <h5 className="book-info__title card-title">{book.title}</h5>
          <div className="book-info__summary overflow-auto">
            {book.synopsis.map((synopsisParagraph, index) =>
              <p key={index} className="card-text">{synopsisParagraph}</p>
            )}
          </div>
        </div>

        <div className="book-item__action book-action col-md-2 border-start p-3">
          <div className="book-action__price mb-4 fs-5">
            prix: <strong>{book.price}&euro;</strong>
          </div>

          <div className="book-action__add">
            <BookQuantity quantity={quantity} removeFromCart={handleRemoveFromCart} addToCart={handleAddToCart} />
          </div>
        </div>

      </div>
    </article>
  );
}
