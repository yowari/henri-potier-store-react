import React, { useEffect, useState } from 'react';

import { getCommercialOffers } from '../../api/commercial-offers';
import { getBestOffer } from '../../services/shopping-cart';
import { useAppState } from '../../AppStateProvider';
import ShoppingCartSummary from '../../components/ShoppingCartSummary/ShoppingCartSummary';
import { BestOffer } from '../../models/commercial-offers';
import { getShoppingCartItemsCount, getTotalPrice } from '../../store/shopping-cart';

export default function ShoppingCart() {
  const state = useAppState();
  const [bestOffer, setBestOffer] = useState<BestOffer>();
  const [commercialOffersLoading, setCommercialOffersLoading] = useState<boolean>(false);

  const items = state.shoppingCart.items;
  const itemsCount = getShoppingCartItemsCount(state.shoppingCart);
  const total = getTotalPrice(state.shoppingCart);

  useEffect(() => {
    const fetchBestOffer = async () => {
      setCommercialOffersLoading(true);
      if (items.length > 0) {
        const commercialOffers = await getCommercialOffers(items.map(i => i.book.isbn));
        if (commercialOffers.offers.length > 0) {
          const bestOfferResult = getBestOffer(total, commercialOffers.offers);
          setBestOffer(bestOfferResult);
        } else {
          setBestOffer(undefined);
        }
      }
      setCommercialOffersLoading(false);
    };
    fetchBestOffer();
  }, [items, total]);

  return (
    <div className="row my-4">
      <div className="card col-md-8">
        <div className="card-body">
          <h4 className="card-title">Panier ({itemsCount} Livres)</h4>
          {!commercialOffersLoading
            ? (items.length > 0)
              ? <ShoppingCartSummary items={items} total={total} bestOffer={bestOffer} />
              : 'Votre panier est vide'
            : <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  );
}
