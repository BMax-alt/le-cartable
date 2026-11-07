// Paquets de cartes du Cartable. Un objet par paquet, rangé par matière.
// Carte courte : { q, r }. Carte longue : { q, r, points: [...] } (les points clés à cocher soi-même).
// Paquet de dictée : { dictee: true, cartes: [{ mot, phrase }] }. La voix dit le mot, la phrase, puis le mot.
// Site public : jamais d'information personnelle ici.
window.DECKS = [
  {
    id: "histoire-revolution-francaise",
    matiere: "Histoire",
    titre: "La Révolution française",
    cartes: [
      { q: "Qui dirige la France en 1789 ?", r: "Le roi Louis XVI" },
      { q: "La société est divisée en 3 ordres. Lesquels ?", r: "Les trois ordres :", points: ["Le clergé", "La noblesse", "Le tiers état"] },
      { q: "Qui représente la plus grande partie de la population ?", r: "Le tiers état (surtout des paysans)" },
      { q: "Qui paye peu ou pas d'impôts ?", r: "Les privilégiés :", points: ["La noblesse", "Le clergé"] },
      { q: "Que convoque le roi ?", r: "Les états généraux" },
      { q: "Quand s'ouvrent les états généraux ?", r: "Le 5 mai 1789" },
      { q: "Que veut le tiers état ?", r: "L'abolition des privilèges" },
      { q: "Que veulent les participants au serment du Jeu de paume ?", r: "Une nouvelle constitution" },
      { q: "Quand a eu lieu la prise de la Bastille ?", r: "Le 14 juillet 1789" },
      { q: "Pourquoi ont-ils pris la Bastille ?", r: "Pour prendre les armes et la poudre qui s'y trouvent" },
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
      { q: "Qu'est-ce qu'un déterminant ?", r: "Le petit mot placé devant le nom. Il introduit le nom et indique son genre et son nombre." },
      { q: "Comment savoir si un nom est masculin ou féminin ?", r: "On essaie un déterminant devant :", points: ["« le » ou « un » : masculin", "« la » ou « une » : féminin"] },
      { q: "Cite les articles définis et les articles indéfinis.", r: "Les articles :", points: ["Définis : le, la, l', les", "Indéfinis : un, une, des"] },
      { q: "Décompose les quatre articles contractés.", r: "Les articles contractés :", points: ["au = à + le", "du = de + le", "aux = à + les", "des = de + les"] },
      { q: "Cite les autres familles de déterminants, avec un exemple pour chacune.", r: "Les autres familles :", points: ["Possessifs : mon, ta, leurs…", "Démonstratifs : ce, cet, cette, ces", "Interrogatifs et exclamatifs : quel, quelle, quels, quelles", "Indéfinis : chaque, certain, aucun", "Numéraux : deux, douze (quantité) ; premier, douzième (rang)"] },
      { q: "Quand écrit-on « cet » au lieu de « ce » ?", r: "Devant un nom masculin qui commence par une voyelle ou un h muet : cet arbre, cet homme" },
      { q: "Trouve les déterminants : « Le roi traverse la cour avec ses gardes. »", r: "le, la, ses" },
      { q: "Trouve les déterminants et leur famille : « Cette maison a deux portes et une cheminée. »", r: "Trois déterminants :", points: ["cette : démonstratif", "deux : numéral", "une : article indéfini"] },
      { q: "Trouve les déterminants possessifs : « Mon frère range ses cahiers dans son cartable. »", r: "mon, ses, son" },
      { q: "Complète avec ce, cet ou cette : « … arbre », « … fleur », « … garçon »", r: "cet arbre, cette fleur, ce garçon" },
      { q: "Complète avec mon, ma ou mes : « … trousse », « … crayons », « … stylo »", r: "ma trousse, mes crayons, mon stylo" },
      { q: "« Des » : article indéfini ou contracté ? « Je mange des pommes. » « Le chien des voisins aboie. »", r: "Deux « des » différents :", points: ["des pommes : article indéfini", "des voisins : article contracté (de + les)"] },
      { q: "Corrige avec un article contracté : « Je vais à le marché. » « Le livre de les élèves. »", r: "Je vais au marché. Le livre des élèves." },
      { q: "Mets au pluriel : « ce chat », « mon livre », « un oiseau »", r: "ces chats, mes livres, des oiseaux" },
      { q: "Complète avec le bon déterminant interrogatif : « … heure est-il ? »", r: "Quelle heure est-il ? (féminin singulier)" },
      { q: "« J'ai vu un chien. Le chien courait. » Pourquoi « un », puis « le » ?", r: "Indéfini puis défini :", points: ["un : on ne connaît pas encore ce chien (article indéfini)", "le : on sait de quel chien on parle (article défini)"] },
      { q: "Genre et nombre de ces groupes nominaux : « leurs voitures », « cette école », « un oiseau »", r: "Genre et nombre :", points: ["leurs voitures : féminin pluriel", "cette école : féminin singulier", "un oiseau : masculin singulier"] }
    ]
  },
  {
    id: "dictee-essai",
    matiere: "Dictées",
    titre: "Dictée d'essai",
    exemple: true,
    dictee: true,
    cartes: [
      { mot: "aujourd'hui", phrase: "Aujourd'hui, il fait beau." },
      { mot: "beaucoup", phrase: "Il y a beaucoup de livres dans la classe." },
      { mot: "longtemps", phrase: "Nous avons attendu longtemps." },
      { mot: "maintenant", phrase: "Maintenant, on range les cahiers." },
      { mot: "pourtant", phrase: "Il pleut, pourtant le ciel est bleu." },
      { mot: "quelquefois", phrase: "Quelquefois, je lis le soir." }
    ]
  }
];
