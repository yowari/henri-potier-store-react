import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import { useAppState } from './AppStateProvider';
import Header from './components/Header/Header';
import BooksSearch from './pages/BooksSearch/BooksSearch';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import { getShoppingCartItemsCount } from './store/shopping-cart';

export default function AppRouter() {
  const state = useAppState();

  return (
    <>
      <Header itemsCount={getShoppingCartItemsCount(state.shoppingCart)} />
      <main className="container">
        <Switch>
          <Route exact path="/">
            <BooksSearch />
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart />
          </Route>
        </Switch>
      </main>
    </>
  )
}
