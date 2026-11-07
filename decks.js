// Paquets de cartes du Cartable. Un objet par paquet, rangé par matière.
// Carte courte : { q, r }. Carte longue : { q, r, points: [...] } (les points clés à cocher soi-même).
// Paquet de dictée : { dictee: true, cartes: [{ mot, phrase }] }. La voix dit le mot seul ; la phrase seulement si l'enfant la demande.
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
    id: "maths-operations-decimaux",
    matiere: "Maths",
    titre: "Opérations posées avec des décimaux",
    // Cours rédigé pour l'app (méthode de la leçon, mots et exemples propres). Affiché sur demande.
    cours: {
      add: {
        titre: "Poser une addition",
        blocs: [
          { p: "Avec des nombres à virgule, on fait attention à trois choses :" },
          { liste: [
            "Aligner les chiffres de la même sorte : les unités sous les unités, les dixièmes sous les dixièmes… Les virgules sont donc l'une sous l'autre.",
            "Penser aux retenues, quand il y en a.",
            "Mettre la virgule au résultat, sous les autres virgules."
          ] },
          { p: "S'il manque un chiffre après la virgule, on peut écrire un 0. Si un nombre n'a pas de virgule, on peut lui en ajouter une, suivie de 0 : 12 = 12,00." },
          { ex: { texte: "Exemple : 12 + 4,75 + 0,6", op: "+", nombres: ["12", "4,75", "0,6"] } }
        ]
      },
      sous: {
        titre: "Poser une soustraction",
        blocs: [
          { p: "Comme pour l'addition : les virgules l'une sous l'autre, des 0 pour compléter les colonnes vides, et la virgule au résultat." },
          { p: "Le plus grand nombre se place en haut." },
          { ex: { texte: "Exemple : 27 − 8,36 (27 devient 27,00)", op: "−", nombres: ["27", "8,36"] } },
          { h: "Technique 1 : on ajoute en haut et en bas" },
          { p: "Quand le chiffre du haut est trop petit, on ajoute 10 à ce chiffre, et on ajoute 1 au chiffre du bas dans la colonne suivante, à gauche." },
          { h: "Technique 2 : on casse une dizaine" },
          { p: "Quand le chiffre du haut est trop petit, on prend 1 au chiffre voisin de gauche (on le barre et on enlève 1), et ce 1 devient 10 dans la colonne où on calcule." },
          { p: "Utilise la technique de la classe." }
        ]
      },
      mult: {
        titre: "Poser une multiplication",
        blocs: [
          { p: "Pour multiplier un nombre à virgule par un nombre entier :" },
          { liste: [
            "Placer en haut le nombre qui a le plus de chiffres.",
            "Aligner les chiffres à droite et calculer comme s'il n'y avait pas de virgule (on l'écrit quand même).",
            "Au résultat, placer la virgule : il y a autant de chiffres après la virgule que dans le nombre à virgule de l'opération."
          ] },
          { ex: { texte: "Exemple : 4,26 × 7. Dans 4,26, il y a deux chiffres après la virgule, donc deux aussi au résultat.", op: "×", nombres: ["4,26", "7"] } },
          { ex: { texte: "Exemple : 2,13 × 24. On fait une ligne par chiffre du nombre du bas, puis on additionne.", op: "×", nombres: ["2,13", "24"] } },
          { p: "Multiplier par 0, ça donne toujours 0 : pas besoin d'écrire cette ligne." }
        ]
      }
    },
    cartes: [
      { qcm: true, cours: "add", q: "Pour poser 12,5 + 3,47, comment places-tu les nombres ?", choix: ["Les virgules l'une sous l'autre", "Les derniers chiffres à droite, l'un sous l'autre", "Les premiers chiffres à gauche, l'un sous l'autre"], bon: 0, explication: "Les unités sous les unités, les dixièmes sous les dixièmes : les virgules sont alignées." },
      { qcm: true, cours: "add", q: "Tu poses 8,3 + 2,56. Dans 8,3, il manque un chiffre après la virgule. Que peux-tu écrire ?", choix: ["Un 0 : 8,30", "Un 1 : 8,31", "Rien, on décale 8,3 vers la droite"], bon: 0, explication: "8,3 et 8,30, c'est le même nombre. Le 0 aide à ne pas se tromper de colonne." },
      { qcm: true, cours: "sous", q: "Pour calculer 15 − 4,72, comment peux-tu écrire 15 ?", choix: ["0,15", "15,00", "15,72"], bon: 1, explication: "15 = 15,00. On ajoute une virgule et des 0 pour avoir autant de chiffres après la virgule que 4,72." },
      { qcm: true, cours: "mult", q: "Pour poser 3,25 × 6, comment places-tu les nombres ?", choix: ["La virgule de 3,25 au-dessus du 6", "Les chiffres alignés à droite : le 5 au-dessus du 6", "Le 6 en haut et 3,25 en bas"], bon: 1, explication: "En multiplication, on aligne à droite et on calcule comme s'il n'y avait pas de virgule." },
      { qcm: true, cours: "mult", q: "Combien de chiffres après la virgule dans le résultat de 2,36 × 4 ?", choix: ["1", "2", "3"], bon: 1, explication: "2,36 a deux chiffres après la virgule, donc le résultat aussi : 2,36 × 4 = 9,44." },

      { op: "+", nombres: ["7,4", "2,35"], cours: "add" },
      { op: "+", nombres: ["26,8", "5,47"], cours: "add" },
      { op: "+", nombres: ["135,6", "48,79"], cours: "add" },
      { op: "+", nombres: ["12", "3,65", "0,8"], cours: "add" },
      { op: "−", nombres: ["9,75", "3,4"], cours: "sous" },
      { op: "−", nombres: ["42,6", "17,38"], cours: "sous" },
      { op: "−", nombres: ["30", "8,46"], cours: "sous" },
      { op: "−", nombres: ["105,2", "36,75"], cours: "sous" },
      { op: "×", nombres: ["4,23", "6"], cours: "mult" },
      { op: "×", nombres: ["12,4", "7"], cours: "mult" },
      { op: "×", nombres: ["3,17", "23"], cours: "mult" },
      { op: "×", nombres: ["2,08", "34"], cours: "mult" }
    ]
  },
  {
    id: "dictee-07-jaune",
    matiere: "Dictées",
    titre: "Dictée 7 · Léonard de Vinci · Groupe jaune",
    dictee: true,
    cartes: [
      { mot: "un génie", phrase: "Léonard de Vinci était un génie." },
      { mot: "le symbole", phrase: "La colombe est le symbole de la paix." },
      { mot: "un peintre", phrase: "Le peintre mélange ses couleurs." },
      { mot: "un sculpteur", phrase: "Le sculpteur taille la pierre." },
      { mot: "un inventeur", phrase: "Un inventeur imagine des machines nouvelles." },
      { mot: "un architecte", phrase: "L'architecte dessine les plans de la maison." },
      { mot: "une œuvre", phrase: "La Joconde est une œuvre de Léonard de Vinci." },
      { mot: "le musée", phrase: "La Joconde est exposée au musée du Louvre." },
      { mot: "considérer", phrase: "Il faut considérer toutes les idées." },
      { mot: "conserver", phrase: "Le musée conserve des tableaux très anciens." },
      { mot: "célèbre", phrase: "La Joconde est un tableau célèbre." },
      { mot: "immense", phrase: "Le château est immense." },
      { mot: "Léonard de Vinci", phrase: "Léonard de Vinci est né en 1452." },
      { mot: "Italie", phrase: "Léonard de Vinci est né en Italie." },
      { mot: "la Renaissance", phrase: "Léonard de Vinci a vécu à la Renaissance." }
    ]
  },
  {
    id: "dictee-07-vert",
    matiere: "Dictées",
    titre: "Dictée 7 · Léonard de Vinci · Groupe vert",
    dictee: true,
    cartes: [
      { mot: "une invention", phrase: "Cette invention a changé le monde." },
      { mot: "l'ébauche", phrase: "Le peintre fait une ébauche avant de peindre son tableau." },
      { mot: "un atelier", phrase: "Le peintre travaille dans son atelier." },
      { mot: "un appareil", phrase: "Léonard a dessiné un appareil pour voler." },
      { mot: "la plongée", phrase: "Il a aussi imaginé un équipement pour la plongée." },
      { mot: "concevoir", phrase: "Les ingénieurs savent concevoir des ponts." },
      { mot: "créer", phrase: "J'aime créer des dessins." },
      { mot: "étonnant, étonnante", phrase: "Ce tour de magie est étonnant. Cette histoire est étonnante." },
      { mot: "mécanique", phrase: "Ce jouet mécanique avance tout seul." }
    ]
  },
  {
    id: "dictee-07-violet",
    matiere: "Dictées",
    titre: "Dictée 7 · Léonard de Vinci · Groupe violet",
    dictee: true,
    cartes: [
      { mot: "une idée", phrase: "J'ai une bonne idée !" },
      { mot: "un carnet", phrase: "Léonard notait tout dans ses carnets." },
      { mot: "un schéma", phrase: "Le schéma montre comment marche la machine." },
      { mot: "le gout", phrase: "Ce gâteau a le gout du chocolat." },
      { mot: "le secret", phrase: "Garde bien ce secret !" },
      { mot: "l'envers", phrase: "Dans ses carnets, il écrivait souvent à l'envers, comme dans un miroir." },
      { mot: "archiver", phrase: "On range et on archive les vieux documents." },
      { mot: "déchiffrer", phrase: "Il faut un miroir pour déchiffrer son écriture." }
    ]
  }
];
