import React from 'react';
import { Link } from 'react-router-dom';

export interface HeaderProps {
  itemsCount: number;
}

export default function Header({ itemsCount }: HeaderProps) {

  return (
    <header className="navbar navbar-light bg-white sticky-top border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Henri Potier Store</Link>

        <Link
         className="btn btn-outline-primary"
         to="/shopping-cart"
         data-cy="cartButton">
          {itemsCount > 0 &&
            <><span className="badge rounded-pill bg-primary" data-testid="itemsCount">{itemsCount}</span>{' '}</>
          }
          Panier
        </Link>
      </div>
    </header>
  );
}
