import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Header from './Header';

test('renders the shopping cart items count in cart button', () => {
  render((
    <BrowserRouter>
      <Header itemsCount={3} />
    </BrowserRouter>
  ));
  const itemsCount = screen.getByTestId('itemsCount');
  expect(itemsCount).toHaveTextContent('3');
});

test('hide shopping cart items count', () => {
  render((
    <BrowserRouter>
      <Header itemsCount={0} />
    </BrowserRouter>
  ));
  const itemsCount = screen.queryByTestId('itemsCount');
  expect(itemsCount).not.toBeInTheDocument();
});
