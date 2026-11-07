// Paquets de cartes du Cartable. Un objet par paquet, rangé par matière.
// Carte courte : { q, r }. Carte longue : { q, r, points: [...] } (les points clés à cocher soi-même).
window.DECKS = [
  {
    id: "histoire-revolution-exemple",
    matiere: "Histoire",
    titre: "La Révolution française",
    exemple: true,
    cartes: [
      {
        q: "Qui était roi de France au début de la Révolution ?",
        r: "Louis XVI"
      },
      {
        q: "Quel jour a eu lieu la prise de la Bastille ?",
        r: "Le 14 juillet 1789"
      },
      {
        q: "Que dit la Déclaration des droits de l'homme et du citoyen ?",
        r: "Elle est adoptée le 26 août 1789.",
        points: [
          "Les hommes naissent et demeurent libres et égaux en droits",
          "La liberté d'expression et de religion",
          "La fin des privilèges de la noblesse et du clergé"
        ]
      }
    ]
  }
];
