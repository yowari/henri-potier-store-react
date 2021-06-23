import { Book } from '../models/books';
import { filterBooks } from './filter-books';

describe('filterBooks', () => {
  const books: Book[] = [
    {
      "isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
      "title": "Henri Potier à l'école des sorciers",
      "price": 35,
      "cover": "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp0.jpg?alt=media",
      "synopsis": [
        "Après la mort de ses parents (Lily et James Potier), Henri est recueilli par sa tante Pétunia (la sœur de Lily) et son oncle Vernon à l'âge d'un an. Ces derniers, animés depuis toujours d'une haine féroce envers les parents du garçon qu'ils qualifient de gens « bizarres », voire de « monstres », traitent froidement leur neveu et demeurent indifférents aux humiliations que leur fils Dudley lui fait subir. Henri ignore tout de l'histoire de ses parents, si ce n'est qu'ils ont été tués dans un accident de voiture",
        "Le jour des 11 ans de Henri, un demi-géant du nom de Rubeus Hagrid vient le chercher pour l’emmener à Poudlard, une école de sorcellerie, où il est inscrit depuis sa naissance et attendu pour la prochaine rentrée. Hagrid lui révèle alors qu’il a toujours été un sorcier, tout comme l'étaient ses parents, tués en réalité par le plus puissant mage noir du monde de la sorcellerie, Voldemort (surnommé « Celui-Dont-On-Ne-Doit-Pas-Prononcer-Le-Nom »), après qu'ils ont refusé de se joindre à lui. Ce serait Henri lui-même, alors qu'il n'était encore qu'un bébé, qui aurait fait ricocher le sortilège que Voldemort lui destinait, neutralisant ses pouvoirs et le réduisant à l'état de créature quasi-insignifiante. Le fait d'avoir vécu son enfance chez son oncle et sa tante dépourvus de pouvoirs magiques lui a donc permis de grandir à l'abri de la notoriété qu'il a dans le monde des sorciers.",
        "Henri entre donc à l’école de Poudlard, dirigée par le professeur Albus Dumbledore. Il est envoyé dans la maison Gryffondor par le « choixpeau ». Il y fait la connaissance de Ron Weasley et Hermione Granger, qui deviendront ses complices. Par ailleurs, Henri intègre rapidement l'équipe de Quidditch de sa maison, un sport collectif très populaire chez les sorciers se pratiquant sur des balais volants. Henri connaît probablement la plus heureuse année de sa vie, mais également la plus périlleuse, car Voldemort n'a pas totalement disparu et semble bien décidé à reprendre forme humaine."
      ],
    },
    {
      "isbn": "fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
      "title": "Henri Potier et le Prisonnier d'Azkaban",
      "price": 30,
      "cover": "https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp2.jpg?alt=media",
      "synopsis": [
        "Durant l'été, pour son treizième anniversaire, Henri reçoit plusieurs cartes de ses amis, notamment une lettre de Ron qui lui écrit d'Égypte, où il passe ses vacances avec sa famille. Une lettre du professeur McGonagall, directrice adjointe de Poudlard, lui informe que les élèves de troisième année auront la possibilité de visiter le village de Pré-au-Lard.",
        "Le lendemain, les informations télévisées moldues annoncent l'évasion d'un très dangereux prisonnier du nom de Sirius Black et l'oncle et la tante de Henri s'inquiètent légèrement pour eux-mêmes. Plus tard, ils annoncent à Henri que la tante Marge séjournera une semaine chez eux, à Privet Drive. La tante Marge provoque Henri en traitant son père défunt d'ancien ivrogne. Henri s'énerve, perd le contrôle de sa magie et fait accidentellement gonfler la tante Marge comme un ballon. Alors que son oncle, furieux, ordonne à Henri de rendre à Marge son apparence normale, le garçon refuse et prend la fuite en pleine nuit, emportant sa valise et sa chouette Edwige.",
        "Plus tard, sur le Chemin de traverse, Henri apprend avec surprise que Sirius Black s'est en fait échappé d'Azkaban pour le retrouver, lui. Il semblerait que l'homme veuille tuer Henri afin de permettre à Lord Voldemort, son maître, de retrouver l'étendue de son pouvoir."
      ]
    }
  ];
  const searchText = 'école des sorciers';
  const filteredBooks = [ books[0] ];

  it('should filter books and keep books that contains the text', () => {
    expect(filterBooks(books, searchText)).toEqual(filteredBooks);
  });
});
