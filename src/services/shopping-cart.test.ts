import {
  BestOffer,
  MinusOffer,
  PercentageOffer,
  SliceOffer
} from '../models/commercial-offers';
import { getBestOffer, getDiscount } from './shopping-cart';

describe('ShoppingCartService', () => {
  const total = 100;

  const minusOffer: MinusOffer = {
    type: 'minus',
    value: 15
  }

  const percentageOffer: PercentageOffer = {
    type: 'percentage',
    value: 10
  }

  const sliceOffer: SliceOffer = {
    type: 'slice',
    value: 5,
    sliceValue: 25
  }

  it('should find the best offer', () => {
    const bestOffer: BestOffer = {
      offer: sliceOffer,
      discount: 20
    };

    expect(getBestOffer(total, [minusOffer, percentageOffer, sliceOffer]))
      .toEqual(bestOffer);
  });

  it('should retrieve the discount based on the provided offer', () => {
    expect(getDiscount(total, minusOffer)).toEqual(15);
    expect(getDiscount(total, percentageOffer)).toEqual(10);
    expect(getDiscount(total, sliceOffer)).toEqual(20);
  });
});
