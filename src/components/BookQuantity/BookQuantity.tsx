import React from 'react';

export interface BookQuantityProps {
  quantity: number;
  removeFromCart: () => void;
  addToCart: () => void;
}

export default function BookQuantity(props: BookQuantityProps) {
  return (
    <div className="d-grid">
      {props.quantity > 0
        ? <div className="row g-0 bg-light border rounded">
            <button className="btn btn-primary col-3" onClick={props.removeFromCart} data-cy="removeFromCart">-</button>
            <div className="col text-center d-flex flex-column justify-content-center align-items-center">
              <div>{props.quantity}</div>
            </div>
            <button className="btn btn-primary col-3" onClick={props.addToCart} data-cy="addToCart">+</button>
          </div>
        : <button className="btn btn-primary" onClick={props.addToCart} data-cy="addToCart">Ajouter au Panier</button>
      }
    </div>
  );
}
