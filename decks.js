// Paquets de cartes du Cartable. Un objet par paquet, rangé par matière.
// Carte courte : { q, r }. Carte longue : { q, r, points: [...] } (les points clés à cocher soi-même).
// Site public : jamais d'information personnelle ici.
window.DECKS = [
  {
    id: "histoire-revolution-francaise",
    matiere: "Histoire",
    titre: "La Révolution française",
    cartes: [
      { q: "Qui dirige la France en 1789 ?", r: "Le roi Louis XVI" },
      { q: "La société est divisée en 3 ordres. Lesquels ?", r: "Les trois ordres :", points: ["Le clergé", "La noblesse", "Le tiers état"] },
      { q: "Qui représente la plus grande partie de la population ?", r: "Les paysans du tiers état" },
      { q: "Qui paye peu ou pas d'impôts ?", r: "Les privilégiés :", points: ["La noblesse", "Le clergé"] },
      { q: "Que convoque le roi ?", r: "Les états généraux" },
      { q: "Quand s'ouvrent les états généraux ?", r: "Le 5 mai 1789" },
      { q: "Que veut le tiers état ?", r: "L'abolition des privilèges" },
      { q: "Que veulent les participants au serment du Jeu de paume ?", r: "Une nouvelle constitution" },
      { q: "Quand a eu lieu la prise de la Bastille ?", r: "Le 14 juillet 1789" },
      { q: "Pourquoi ont-ils pris la Bastille ?", r: "Pour prendre des armes" },
      { q: "Que votent les députés pour rétablir l'égalité entre les différents ordres de la société française ?", r: "L'abolition des privilèges" },
      { q: "Quel texte très important votent-ils 3 semaines plus tard ?", r: "La Déclaration des droits de l'homme et du citoyen" },
      { q: "Quand la famille royale est-elle ramenée aux Tuileries ?", r: "En octobre 1789 (le 6 octobre)" },
      { q: "Où et quand le roi est-il arrêté ?", r: "Le roi est arrêté :", points: ["À Varennes", "Le 21 juin 1791"] },
      { q: "Quand la Marseillaise est-elle devenue l'hymne national ?", r: "En 1879" },
      { q: "Quand le roi a-t-il été guillotiné ?", r: "Le 21 janvier 1793" },
      { q: "Comment s'appelle la femme de Louis XVI ?", r: "Marie-Antoinette" }
    ]
  },
  {
    id: "francais-determinants",
    matiere: "Français",
    titre: "Les déterminants",
    cartes: [
      { q: "À quelle famille appartiennent les articles ?", r: "À la famille des déterminants" },
      { q: "Qu'indiquent les articles sur le nom ?", r: "Ils indiquent :", points: ["Le genre : masculin ou féminin", "Le nombre : singulier ou pluriel"] },
      { q: "Que forment l'article et le nom commun ensemble ?", r: "Le groupe nominal (GN) de base : déterminant + nom. Exemple : la plage" },
      { q: "Quels sont les articles définis ?", r: "le, la, l', les" },
      { q: "À quoi servent les articles définis ?", r: "Ils désignent plus précisément un nom. Exemple : le roi" },
      { q: "Quels sont les articles indéfinis ?", r: "un, une, des" },
      { q: "À quoi servent les articles indéfinis ?", r: "Ils ne précisent pas le nom dont il s'agit. Exemple : un voyage" },
      { q: "Quels sont les articles contractés ?", r: "au, du, aux, des" },
      { q: "Que remplace un article contracté ?", r: "Une préposition et un article défini" },
      { q: "Décompose les quatre articles contractés.", r: "Les articles contractés :", points: ["au = à + le (au moment)", "du = de + le (du temps)", "aux = à + les (aux environs)", "des = de + les (des gens)"] },
      { q: "« Des » peut être deux sortes d'article. Lesquelles ?", r: "Deux sortes :", points: ["Article indéfini : des romains", "Article contracté (de + les) : des gens"] },
      { q: "Comment appelle-t-on le petit mot qui précède et précise le nom commun ?", r: "Le déterminant" },
      { q: "Quels renseignements le déterminant donne-t-il sur le nom ?", r: "Trois renseignements :", points: ["Le genre (masculin / féminin)", "Le nombre (singulier / pluriel)", "L'appartenance"] },
      { q: "Mon chien, ce chien, chaque chien : quel type de déterminant est souligné à chaque fois ?", r: "Trois types :", points: ["mon : possessif", "ce : démonstratif", "chaque : indéfini"] },
      { q: "Que désignent les déterminants possessifs ?", r: "Celui qui possède, celui qui a" },
      { q: "Déterminants possessifs : mon, ton, son au masculin singulier. Quels sont-ils au féminin singulier ?", r: "ma, ta, sa" },
      { q: "Quel est le pluriel de mon, ton, son ?", r: "mes, tes, ses" },
      { q: "Quel est le pluriel de notre, votre, leur ?", r: "nos, vos, leurs" }
    ]
  }
];
