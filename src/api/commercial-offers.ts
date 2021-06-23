import { CommercialOffers } from '../models/commercial-offers';

const baseUrl = 'https://henri-potier.techx.fr';

export function getCommercialOffers(isbn: string[]): Promise<CommercialOffers> {
  return fetch(`${baseUrl}/books/${isbn.join(',')}/commercialOffers`)
    .then((response) => response.json()) as Promise<CommercialOffers>;
}
