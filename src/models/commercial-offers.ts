export interface CommercialOffers {
  offers: Offer[];
}

export type Offer = PercentageOffer | MinusOffer | SliceOffer;

export interface PercentageOffer {
  type: 'percentage';
  value: number;
}

export interface MinusOffer {
  type: 'minus';
  value: number;
}

export interface SliceOffer {
  type: 'slice';
  value: number;
  sliceValue: number;
}

export interface BestOffer {
  offer: Offer;
  discount: number;
}
