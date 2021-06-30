import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';

import './App.css';
import AppStateProvider from './AppStateProvider';
import AppRouter from './AppRouter';

function App() {
  return (
    <BrowserRouter basename="/henri-potier-store-react">
      <AppStateProvider>

        <AppRouter />

      </AppStateProvider>
    </BrowserRouter>
  );
}

export default App;
