import { Book } from '../models/books';
import { ShoppingCartItem } from '../models/shopping-cart';

export interface ShoppingCartState {
  items: ShoppingCartItem[];
}

export const initialState: ShoppingCartState = {
  items: []
};

export type ShoppingCartAction =
 | { type: '[Books Search Page] Add to Cart', payload: Book }
 | { type: '[Books Search Page] Remove from Cart', payload: Book };

export const getShoppingCartItemsCount = (shoppingCartState: ShoppingCartState): number => {
  return shoppingCartState.items.reduce((acc, item) => acc + item.quantity, 0);
};

export const getTotalPrice = (shoppingCartState: ShoppingCartState) => {
  return shoppingCartState.items.reduce((acc, item) => acc + (item.quantity * item.book.price), 0);
}

export const getShoppingCartItemQuantity = (isbn: string) => {
  return (shoppingCartState: ShoppingCartState): number => {
    const item = shoppingCartState.items.find(i => i.book.isbn === isbn);

    if (item) {
      return item.quantity;
    } else {
      return 0;
    }
  };
}

export default function shoppingCartReducer(state: ShoppingCartState, action: ShoppingCartAction): ShoppingCartState {
  switch (action.type) {
    case '[Books Search Page] Add to Cart':
      const indexBookToAdd = state.items.findIndex(item => item.book.isbn === action.payload.isbn);

      if (indexBookToAdd >= 0) {
        return {
          ...state,
          items: [
            ...state.items.slice(0, indexBookToAdd),
            {
              book: action.payload,
              quantity: state.items[indexBookToAdd].quantity + 1
            },
            ...state.items.slice(indexBookToAdd + 1)
          ]
        };
      } else {
        return {
          ...state,
          items: [
            ...state.items,
            {
              book: action.payload,
              quantity: 1
            }
          ]
        };
      }

    case '[Books Search Page] Remove from Cart':
      const indexBookToRemove = state.items.findIndex(item => item.book.isbn === action.payload.isbn);

    if (indexBookToRemove >= 0) {
      if (state.items[indexBookToRemove].quantity - 1 === 0) {
        return {
          ...state,
          items: [
            ...state.items.slice(0, indexBookToRemove),
            ...state.items.slice(indexBookToRemove + 1)
          ]
        };
      } else {
        return {
          ...state,
          items: [
            ...state.items.slice(0, indexBookToRemove),
            {
              book: action.payload,
              quantity: state.items[indexBookToRemove].quantity - 1
            },
            ...state.items.slice(indexBookToRemove + 1)
          ]
        };
      }
    } else {
      return state;
    }
  }
  return state;
}
