import { BestOffer, Offer } from '../models/commercial-offers';

export function getBestOffer(total: number, offers: Offer[]): BestOffer {
  const discounts = offers.map(offer => getDiscount(total, offer));
  let minimalPriceIndex = 0;

  for (let i = 0; i < discounts.length; i++) {
    if (discounts[i] > discounts[minimalPriceIndex]) {
      minimalPriceIndex = i;
    }
  }

  return {
    offer: offers[minimalPriceIndex],
    discount: discounts[minimalPriceIndex]
  };
}

export function getDiscount(total: number, offer: Offer): number {
  switch (offer.type) {
    case 'minus':
      return offer.value;
    case 'percentage':
      return total * (offer.value / 100);
    case 'slice':
        return Math.floor(total / offer.sliceValue) * offer.value;
    default:
      throw new Error('Unrecognized offer type');
  }
}
