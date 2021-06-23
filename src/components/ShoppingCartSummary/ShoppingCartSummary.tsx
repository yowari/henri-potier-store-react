import React from 'react';

import { BestOffer } from '../../models/commercial-offers';
import { ShoppingCartItem } from '../../models/shopping-cart';

export interface ShoppingCartSummaryProps {
  items: ShoppingCartItem[];
  total: number;
  bestOffer?: BestOffer;
}

export default function ShoppingCartSummary({ items, total, bestOffer }: ShoppingCartSummaryProps) {
  const finalPrice = getFinalPrice(total, bestOffer);

  return (
    <table className="table" >
      <tbody>
        {items.map((item, index) =>
          <tr key={index} data-cy="shoppingCartItem">
            <td>{item.book.title}</td>
            <td className="text-end">{item.quantity} x {item.book.price}&euro;</td>
          </tr>
        )}
      </tbody>
      <tfoot>
        {bestOffer &&
          <tr className="text-danger">
            <td>
              <BestOfferRow bestOffer={bestOffer} />
            </td>
            <td className="text-end">-{bestOffer.discount}&euro;</td>
          </tr>
        }
        <tr>
          <td>Total</td>
          <td className="text-end">
            {bestOffer &&
              <><span className="text-decoration-line-through">{total}&euro;</span>&nbsp;</>
            }
            <span>{finalPrice}&euro;</span>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

function getFinalPrice(total: number, bestOffer?: BestOffer): number {
  if (bestOffer && total) {
    return total - bestOffer.discount;
  } else {
    return total;
  }
}

function BestOfferRow({ bestOffer }: { bestOffer: BestOffer }) {
  switch (bestOffer.offer.type) {
    case 'percentage':
      return <>Offre -{bestOffer.offer.value / 100}&euro;</>
    case 'minus':
      return <>Offre -{bestOffer.offer.value}&euro;</>
    case 'slice':
      return <>Offre -{bestOffer.offer.value} chaque {bestOffer.offer.sliceValue}&euro;</>
    default:
      return <>Incorrect offer</>
  }
}
