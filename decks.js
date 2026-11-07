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
      { q: "Quand la famille royale est-elle ramenée aux Tuileries ?", r: "En octobre 1789" },
      { q: "Où et quand le roi est-il arrêté ?", r: "Le roi est arrêté :", points: ["À Varennes", "Le 21 juin 1791"] },
      { q: "Quand la Marseillaise est-elle devenue l'hymne national ?", r: "En 1879" },
      { q: "Quand le roi a-t-il été guillotiné ?", r: "Le 21 janvier 1793" },
      { q: "Comment s'appelle la femme de Louis XVI ?", r: "Marie-Antoinette" }
    ]
  }
];
