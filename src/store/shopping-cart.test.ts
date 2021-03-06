import shoppingCartReducer, {
  getShoppingCartItemQuantity,
  getShoppingCartItemsCount,
  getTotalPrice,
  initialState,
  ShoppingCartAction,
  ShoppingCartState
} from './shopping-cart';
import { Book } from '../models/books';

describe('shopping cart reducer', () => {
  const book: Book = {
    "isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
    "title": "Henri Potier à l'école des sorciers",
    "price": 35,
    "cover": "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp0.jpg?alt=media",
    "synopsis": [
      "Après la mort de ses parents (Lily et James Potier), Henri est recueilli par sa tante Pétunia (la sœur de Lily) et son oncle Vernon à l'âge d'un an. Ces derniers, animés depuis toujours d'une haine féroce envers les parents du garçon qu'ils qualifient de gens « bizarres », voire de « monstres », traitent froidement leur neveu et demeurent indifférents aux humiliations que leur fils Dudley lui fait subir. Henri ignore tout de l'histoire de ses parents, si ce n'est qu'ils ont été tués dans un accident de voiture",
      "Le jour des 11 ans de Henri, un demi-géant du nom de Rubeus Hagrid vient le chercher pour l’emmener à Poudlard, une école de sorcellerie, où il est inscrit depuis sa naissance et attendu pour la prochaine rentrée. Hagrid lui révèle alors qu’il a toujours été un sorcier, tout comme l'étaient ses parents, tués en réalité par le plus puissant mage noir du monde de la sorcellerie, Voldemort (surnommé « Celui-Dont-On-Ne-Doit-Pas-Prononcer-Le-Nom »), après qu'ils ont refusé de se joindre à lui. Ce serait Henri lui-même, alors qu'il n'était encore qu'un bébé, qui aurait fait ricocher le sortilège que Voldemort lui destinait, neutralisant ses pouvoirs et le réduisant à l'état de créature quasi-insignifiante. Le fait d'avoir vécu son enfance chez son oncle et sa tante dépourvus de pouvoirs magiques lui a donc permis de grandir à l'abri de la notoriété qu'il a dans le monde des sorciers.",
      "Henri entre donc à l’école de Poudlard, dirigée par le professeur Albus Dumbledore. Il est envoyé dans la maison Gryffondor par le « choixpeau ». Il y fait la connaissance de Ron Weasley et Hermione Granger, qui deviendront ses complices. Par ailleurs, Henri intègre rapidement l'équipe de Quidditch de sa maison, un sport collectif très populaire chez les sorciers se pratiquant sur des balais volants. Henri connaît probablement la plus heureuse année de sa vie, mais également la plus périlleuse, car Voldemort n'a pas totalement disparu et semble bien décidé à reprendre forme humaine."
    ],
  };

  it('should add shopping cart item to cart when book not in shopping cart', () => {
    const action: ShoppingCartAction = { type: '[Books Search Page] Add to Cart', payload: book };

    const state = shoppingCartReducer(initialState, action);

    expect(state.items).toHaveLength(1);
    expect(state.items).toContainEqual({
      book,
      quantity: 1
    });
  });

  it('should modify quantity when adding a book that is already in shopping cart', () => {
    const action: ShoppingCartAction = { type: '[Books Search Page] Add to Cart', payload: book };
    const initState: ShoppingCartState = {
      items: [
        {
          book,
          quantity: 1
        }
      ]
    }

    const state = shoppingCartReducer(initState, action);

    expect(state.items).toContainEqual({
      book,
      quantity: 2
    });
  });

  it('should remove item from shopping cart', () => {
    const action: ShoppingCartAction = { type: '[Books Search Page] Remove from Cart', payload: book };
    const initState: ShoppingCartState = {
      items: [
        {
          book,
          quantity: 1
        }
      ]
    }

    const state = shoppingCartReducer(initState, action);

    expect(state.items).toHaveLength(0);
  });

  it('should modify quantity when removing a book that still have quantity > 0', () => {
    const action: ShoppingCartAction = { type: '[Books Search Page] Remove from Cart', payload: book };
    const initState: ShoppingCartState = {
      items: [
        {
          book,
          quantity: 2
        }
      ]
    }

    const state = shoppingCartReducer(initState, action);

    expect(state.items).toContainEqual({
      book,
      quantity: 1
    });
  });
});

describe('shopping cart selectors', () => {
  const state: ShoppingCartState = {
    items: [
      {
        book: {
          "isbn": "1",
          "title": "book title 1",
          "price": 35,
          "cover": "http://cover",
          "synopsis": [],
        },
        quantity: 1
      },
      {
        book: {
          "isbn": "2",
          "title": "book title 2",
          "price": 20,
          "cover": "http://cover",
          "synopsis": [],
        },
        quantity: 2
      }
    ]
  };

  it('should get shopping cart items count', () => {
    const count = getShoppingCartItemsCount(state);

    expect(count).toBe(3);
  });

  it('should get total price', () => {
    const total = getTotalPrice(state);

    expect(total).toBe(75);
  });

  it('should get shopping cart item quantity with isbn which is present in shopping cart', () => {
    const shoppingCartItemQuantity = getShoppingCartItemQuantity(state.items[0].book.isbn);
    const quantity = shoppingCartItemQuantity(state);

    expect(quantity).toBe(1);
  });

  it('should get shopping cart item quantity with isbn which is not present in shopping cart', () => {
    const shoppingCartItemQuantity = getShoppingCartItemQuantity('inexistant isbn');
    const quantity = shoppingCartItemQuantity(state);

    expect(quantity).toBe(0);
  });
});
