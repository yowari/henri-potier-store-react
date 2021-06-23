import {
  createContext,
  Dispatch,
  useContext,
  useReducer
} from 'react';
import appReducer, { AppAction, AppState, initialState } from './store/app';

export const AppStateContext = createContext<AppState>(initialState);
export const AppDispatchContext = createContext<Dispatch<AppAction>>(null as unknown as Dispatch<AppAction>);

export function useAppState(): AppState {
  return useContext(AppStateContext);
}

export function useAppDispatch(): Dispatch<AppAction> {
  return useContext(AppDispatchContext);
}

export default function AppStateProvider({children}: any) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}
