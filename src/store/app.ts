import shoppingCartReducer, {
  ShoppingCartAction,
  ShoppingCartState,
  initialState as shoppingCartInitialState
} from './shopping-cart';

export interface AppState {
  shoppingCart: ShoppingCartState;
}

export const initialState: AppState = {
  shoppingCart: shoppingCartInitialState
}

export type AppAction =
 | ShoppingCartAction;

export default function appReducer(state: AppState, action: AppAction): AppState {
  return {
    shoppingCart: shoppingCartReducer(state.shoppingCart, action)
  };
}
