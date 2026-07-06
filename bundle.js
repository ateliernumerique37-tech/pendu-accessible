(() => {
  // js/words.js
  var ALL_WORDS = [
    // Animaux
    "LION",
    "CHAT",
    "OURS",
    "LOUP",
    "CERF",
    "BOEUF",
    "VACHE",
    "CHEVAL",
    "MOUTON",
    "COCHON",
    "LAPIN",
    "SOURIS",
    "RENARD",
    "ECUREUIL",
    "HERISSON",
    "SANGLIER",
    "HIBOU",
    "AIGLE",
    "CORBEAU",
    "MOINEAU",
    "PIGEON",
    "CANARD",
    "CYGNE",
    "FAISAN",
    "GRENOUILLE",
    "CRAPAUD",
    "LEZARD",
    "SERPENT",
    "TORTUE",
    "CROCODILE",
    "DAUPHIN",
    "BALEINE",
    "REQUIN",
    "POULPE",
    "MEDUSE",
    "CREVETTE",
    "HOMARD",
    "ABEILLE",
    "PAPILLON",
    "COCCINELLE",
    "FOURMI",
    "ARAIGNEE",
    "SCARABEE",
    "LIBELLULE",
    "ESCARGOT",
    "CHENILLE",
    "GIRAFE",
    "ZEBRE",
    "ELEPHANT",
    "HIPPOPOTAME",
    "RHINOCEROS",
    "CHIMPANZE",
    "GORILLE",
    "KANGOUROU",
    "PANDA",
    "CHOUETTE",
    "FLAMANT",
    "PELICAN",
    "TOUCAN",
    "PERROQUET",
    "COLIBRI",
    // Corps
    "TETE",
    "BRAS",
    "MAIN",
    "DOIGT",
    "JAMBE",
    "GENOU",
    "COUDE",
    "EPAULE",
    "VISAGE",
    "BOUCHE",
    "OEIL",
    "OREILLE",
    "MENTON",
    "SOURCIL",
    "CHEVEUX",
    "DENT",
    "LANGUE",
    "GORGE",
    "POUMON",
    "COEUR",
    "ESTOMAC",
    "CERVEAU",
    "MUSCLE",
    "SQUELETTE",
    // Maison et objets
    "PORTE",
    "FENETRE",
    "TOIT",
    "ESCALIER",
    "CHAISE",
    "TABLE",
    "ARMOIRE",
    "TIROIR",
    "LAMPE",
    "MIROIR",
    "TAPIS",
    "RIDEAU",
    "COUSSIN",
    "COUVERTURE",
    "OREILLER",
    "HORLOGE",
    "BOUGIE",
    "SERRURE",
    "BALAI",
    "EPONGE",
    "SAVON",
    "BROSSE",
    "PEIGNE",
    "SERVIETTE",
    "ASSIETTE",
    "VERRE",
    "FOURCHETTE",
    "COUTEAU",
    "CUILLERE",
    "CASSEROLE",
    "POELE",
    "FOUR",
    "FRIGO",
    "EVIER",
    "ROBINET",
    "BAIGNOIRE",
    "DOUCHE",
    "TELEVISEUR",
    "ORDINATEUR",
    "TELEPHONE",
    "CLAVIER",
    "ECRAN",
    "IMPRIMANTE",
    "CHARGEUR",
    "TELECOMMANDE",
    // Nature
    "ARBRE",
    "FLEUR",
    "FEUILLE",
    "RACINE",
    "BRANCHE",
    "FORET",
    "MONTAGNE",
    "COLLINE",
    "VALLEE",
    "RIVIERE",
    "RUISSEAU",
    "CASCADE",
    "ETANG",
    "OCEAN",
    "PLAGE",
    "FALAISE",
    "DUNE",
    "DESERT",
    "VOLCAN",
    "GLACIER",
    "NUAGE",
    "ORAGE",
    "ECLAIR",
    "TONNERRE",
    "NEIGE",
    "GIVRE",
    "BROUILLARD",
    "SOLEIL",
    "ETOILE",
    "GALAXIE",
    "COMETE",
    "PLANETE",
    "CAILLOU",
    "ROCHE",
    "SABLE",
    "BOUE",
    "HERBE",
    "MOUSSE",
    "CHAMPIGNON",
    "FOUGERE",
    // Nourriture
    "PAIN",
    "FROMAGE",
    "BEURRE",
    "LAIT",
    "OEUF",
    "SUCRE",
    "FARINE",
    "GATEAU",
    "BISCUIT",
    "CHOCOLAT",
    "BONBON",
    "CONFITURE",
    "MIEL",
    "POMME",
    "POIRE",
    "BANANE",
    "ORANGE",
    "CITRON",
    "FRAISE",
    "CERISE",
    "RAISIN",
    "ANANAS",
    "ABRICOT",
    "PECHE",
    "MELON",
    "CAROTTE",
    "TOMATE",
    "SALADE",
    "OIGNON",
    "PATATE",
    "HARICOT",
    "POISSON",
    "VIANDE",
    "POULET",
    "SAUCISSE",
    "JAMBON",
    "SOUPE",
    // Metiers
    "BOULANGER",
    "BOUCHER",
    "POMPIER",
    "FACTEUR",
    "MEDECIN",
    "INFIRMIERE",
    "DENTISTE",
    "VETERINAIRE",
    "ARCHITECTE",
    "INGENIEUR",
    "PROFESSEUR",
    "INSTITUTEUR",
    "AVOCAT",
    "JUGE",
    "POLICIER",
    "JARDINIER",
    "CUISINIER",
    "MENUISIER",
    "ELECTRICIEN",
    "PLOMBIER",
    "PEINTRE",
    "MUSICIEN",
    "CHANTEUR",
    "DANSEUR",
    "ACTEUR",
    "ECRIVAIN",
    "JOURNALISTE",
    "PHOTOGRAPHE",
    "AGRICULTEUR",
    "PECHEUR",
    "MARIN",
    "PILOTE",
    "ASTRONAUTE",
    "CHAUFFEUR",
    "VENDEUR",
    "COIFFEUR",
    "COUTURIER",
    "BIBLIOTHECAIRE",
    // Vetements
    "CHEMISE",
    "PANTALON",
    "ROBE",
    "JUPE",
    "MANTEAU",
    "ECHARPE",
    "CHAPEAU",
    "CHAUSSURE",
    "CHAUSSETTE",
    "GANT",
    "CEINTURE",
    "PULL",
    "VESTE",
    "BOTTE",
    "SANDALE",
    "PYJAMA",
    // Transport
    "VELO",
    "VOITURE",
    "CAMION",
    "TRAIN",
    "AVION",
    "BATEAU",
    "MOTO",
    "METRO",
    "TRAMWAY",
    "HELICOPTERE",
    "FUSEE",
    "MONTGOLFIERE",
    "TROTTINETTE",
    // Temps et sentiments
    "MATIN",
    "MIDI",
    "SOIR",
    "NUIT",
    "AUBE",
    "CREPUSCULE",
    "SEMAINE",
    "ANNEE",
    "SAISON",
    "PRINTEMPS",
    "AUTOMNE",
    "HIVER",
    "JOIE",
    "TRISTESSE",
    "COLERE",
    "PEUR",
    "SURPRISE",
    "FIERTE",
    "JALOUSIE",
    "TENDRESSE",
    "COURAGE",
    "PATIENCE",
    "CURIOSITE",
    // Ecole et jeux
    "CAHIER",
    "CRAYON",
    "GOMME",
    "REGLE",
    "CISEAUX",
    "TABLEAU",
    "CARTABLE",
    "TROUSSE",
    "DICTIONNAIRE",
    "BIBLIOTHEQUE",
    "RECREATION",
    "ANNIVERSAIRE",
    "CADEAU",
    "BALLON",
    "TOBOGGAN",
    "BALANCOIRE",
    "TRAMPOLINE",
    "PUZZLE",
    "MARIONNETTE",
    // Sport
    "FOOTBALL",
    "BASKET",
    "TENNIS",
    "NATATION",
    "ESCALADE",
    "CYCLISME",
    "ATHLETISME",
    "GYMNASTIQUE",
    "JUDO",
    "KARATE",
    "ESCRIME",
    "AVIRON",
    "VOILE",
    "PLONGEE",
    // Mots longs divers
    "PARAPLUIE",
    "AMBULANCE",
    "BOULANGERIE",
    "PHARMACIE",
    "CHARCUTERIE",
    "PATISSERIE",
    "CALCULATRICE",
    "EXTRATERRESTRE",
    "MICROPHONE",
    "VIOLONCELLE",
    // --- Enrichissement (juillet 2026) ---
    // Animaux (nouveaux)
    "CHIEN",
    "POULE",
    "DINDE",
    "CHEVRE",
    "TAUREAU",
    "TAUPE",
    "BLAIREAU",
    "LOUTRE",
    "CASTOR",
    "MARMOTTE",
    "HERMINE",
    "BELETTE",
    "FURET",
    "PUMA",
    "LEOPARD",
    "JAGUAR",
    "GUEPARD",
    "LYNX",
    "HYENE",
    "CHACAL",
    "BISON",
    "ELAN",
    "ANTILOPE",
    "GAZELLE",
    "CHAMEAU",
    "DROMADAIRE",
    "LAMA",
    "ALPAGA",
    "OTARIE",
    "PHOQUE",
    "MORSE",
    "NARVAL",
    "ORQUE",
    "CACHALOT",
    "ESPADON",
    "THON",
    "SAUMON",
    "TRUITE",
    "ANGUILLE",
    "RAIE",
    "HIPPOCAMPE",
    "OURSIN",
    "ECREVISSE",
    "MOULE",
    "HUITRE",
    "COQUILLAGE",
    "CIGOGNE",
    "HERON",
    "MOUETTE",
    "ALBATROS",
    "PINGOUIN",
    "MANCHOT",
    "AUTRUCHE",
    "PAON",
    "DINDON",
    "CAILLE",
    "PERDRIX",
    "FAUCON",
    "VAUTOUR",
    "CONDOR",
    "BUSE",
    "CHOUCAS",
    "GEAI",
    "PIVERT",
    "ROSSIGNOL",
    "HIRONDELLE",
    "MESANGE",
    "MERLE",
    "PINSON",
    "COLOMBE",
    "GUEPE",
    "FRELON",
    "MOUSTIQUE",
    "MOUCHE",
    "PUCE",
    "TIQUE",
    "CIGALE",
    "SAUTERELLE",
    "CRIQUET",
    "MANTE",
    "TERMITE",
    "PUNAISE",
    "CAFARD",
    "LIMACE",
    "VIPERE",
    "COULEUVRE",
    "CAMELEON",
    "IGUANE",
    "SALAMANDRE",
    "TRITON",
    "POUSSIN",
    "AGNEAU",
    "VEAU",
    "PORCELET",
    "CHEVREAU",
    "POULAIN",
    // Corps (nouveaux)
    "NUQUE",
    "FRONT",
    "JOUE",
    "LEVRE",
    "PAUPIERE",
    "NARINE",
    "MACHOIRE",
    "POIGNET",
    "CHEVILLE",
    "TALON",
    "ORTEIL",
    "OMOPLATE",
    "COLONNE",
    "FOIE",
    "REIN",
    "INTESTIN",
    "VESSIE",
    "PEAU",
    "VEINE",
    "ARTERE",
    "SANG",
    "SALIVE",
    "LARME",
    "SOURIRE",
    "GRIMACE",
    // Maison et objets (nouveaux)
    "PLAFOND",
    "PLANCHER",
    "CHEMINEE",
    "BALCON",
    "TERRASSE",
    "GRENIER",
    "CAVE",
    "GARAGE",
    "JARDIN",
    "PORTAIL",
    "CLOTURE",
    "PELOUSE",
    "POTAGER",
    "SERRE",
    "NICHE",
    "CABANE",
    "GRANGE",
    "ETABLE",
    "FERME",
    "MOULIN",
    "CHATEAU",
    "TOUR",
    "PONT",
    "ROUTE",
    "CHEMIN",
    "SENTIER",
    "TROTTOIR",
    "CARREFOUR",
    "PANNEAU",
    "LAMPADAIRE",
    "BANC",
    "FONTAINE",
    "STATUE",
    "MONUMENT",
    "EGLISE",
    "MAIRIE",
    "ECOLE",
    "HOPITAL",
    "BANQUE",
    "MUSEE",
    "CINEMA",
    "THEATRE",
    "STADE",
    "PISCINE",
    "MARCHE",
    "MAGASIN",
    "BOUTIQUE",
    "SUPERMARCHE",
    "RESTAURANT",
    "HOTEL",
    "USINE",
    "BUREAU",
    "IMMEUBLE",
    "APPARTEMENT",
    "VILLA",
    "CHALET",
    "CABINE",
    "TENTE",
    "CAMPING",
    "VALISE",
    "PANIER",
    "PORTEFEUILLE",
    "LUNETTES",
    "MONTRE",
    "BIJOU",
    "BAGUE",
    "COLLIER",
    "BRACELET",
    "BOUCLE",
    "MOUCHOIR",
    "OMBRELLE",
    "CANNE",
    "SEAU",
    "ARROSOIR",
    "PELLE",
    "RATEAU",
    "BECHE",
    "TONDEUSE",
    "ECHELLE",
    "MARTEAU",
    "TOURNEVIS",
    "PINCE",
    "CLOU",
    "SCIE",
    "PERCEUSE",
    "ETABLI",
    "NIVEAU",
    "ENCLUME",
    "FORGE",
    "SOUDURE",
    "VISSEUSE",
    "MEULEUSE",
    "TRONCONNEUSE",
    "BROUETTE",
    "CADENAS",
    "VERROU",
    "CHARNIERE",
    "POIGNEE",
    // Nature (nouveaux)
    "FLEUVE",
    "TORRENT",
    "SOURCE",
    "MARAIS",
    "MARECAGE",
    "PRAIRIE",
    "CLAIRIERE",
    "BOSQUET",
    "TAILLIS",
    "HAIE",
    "BUISSON",
    "RONCE",
    "ORTIE",
    "PISSENLIT",
    "TOURNESOL",
    "MARGUERITE",
    "TULIPE",
    "ROSIER",
    "LIERRE",
    "CHENE",
    "SAPIN",
    "BOULEAU",
    "PEUPLIER",
    "CHATAIGNIER",
    "NOISETIER",
    "OLIVIER",
    "PALMIER",
    "BAMBOU",
    "CACTUS",
    "ALGUE",
    "CORAIL",
    "RECIF",
    "PENINSULE",
    "CONTINENT",
    "AVALANCHE",
    "SEISME",
    "ERUPTION",
    "TREMBLEMENT",
    "INONDATION",
    "SECHERESSE",
    "BRUME",
    "ROSEE",
    "GRELE",
    "VERGLAS",
    "TEMPETE",
    "CYCLONE",
    "OURAGAN",
    "TORNADE",
    "VENT",
    "BRISE",
    "RAFALE",
    // Nourriture (nouveaux)
    "LEGUME",
    "COURGETTE",
    "AUBERGINE",
    "POIVRON",
    "CONCOMBRE",
    "RADIS",
    "NAVET",
    "CELERI",
    "EPINARD",
    "CHOU",
    "BROCOLI",
    "ARTICHAUT",
    "ASPERGE",
    "COURGE",
    "CITROUILLE",
    "PASTEQUE",
    "MANGUE",
    "KIWI",
    "MYRTILLE",
    "FRAMBOISE",
    "MURE",
    "GROSEILLE",
    "PRUNE",
    "MIRABELLE",
    "FIGUE",
    "NOISETTE",
    "AMANDE",
    "CACAHUETE",
    "CHATAIGNE",
    "PAMPLEMOUSSE",
    "MANDARINE",
    "CLEMENTINE",
    "YAOURT",
    "CREME",
    "PATES",
    "NOUILLE",
    "SEMOULE",
    "LENTILLE",
    "HUILE",
    "VINAIGRE",
    "MOUTARDE",
    "POIVRE",
    "EPICE",
    "CANNELLE",
    "VANILLE",
    "GINGEMBRE",
    "PERSIL",
    "BASILIC",
    "THYM",
    "MENTHE",
    "CAFE",
    "LIMONADE",
    "SIROP",
    "CIDRE",
    "BIERE",
    "CROISSANT",
    "BAGUETTE",
    "TARTINE",
    "CREPE",
    "GAUFRE",
    "TARTE",
    "FLAN",
    "GLACE",
    "SORBET",
    "CARAMEL",
    "NOUGAT",
    "REGLISSE",
    "PATE",
    "OMELETTE",
    "RATATOUILLE",
    "GRATIN",
    "POTAGE",
    "BOUILLON",
    "ROTI",
    "STEAK",
    "COTELETTE",
    "ESCALOPE",
    "MERGUEZ",
    "LANGOUSTE",
    "SARDINE",
    // Metiers (nouveaux)
    "AVIATEUR",
    "CAPITAINE",
    "HOTESSE",
    "CONDUCTEUR",
    "MECANICIEN",
    "SERRURIER",
    "MACON",
    "CARRELEUR",
    "COUVREUR",
    "PAYSAGISTE",
    "FLEURISTE",
    "BIJOUTIER",
    "HORLOGER",
    "TAPISSIER",
    "RELIEUR",
    "IMPRIMEUR",
    "LIBRAIRE",
    "EDITEUR",
    "TRADUCTEUR",
    "INTERPRETE",
    "NOTAIRE",
    "HUISSIER",
    "COMPTABLE",
    "BANQUIER",
    "ASSUREUR",
    "COMMERCANT",
    "CAISSIER",
    "LIVREUR",
    "DEMENAGEUR",
    "EBENISTE",
    "TAILLEUR",
    "MODISTE",
    "CORDONNIER",
    "CHOCOLATIER",
    "PATISSIER",
    "TRAITEUR",
    "SOMMELIER",
    "APICULTEUR",
    "VITICULTEUR",
    "ELEVEUR",
    "BUCHERON",
    "DOUANIER",
    "GENDARME",
    "MILITAIRE",
    "SOLDAT",
    "OFFICIER",
    "GENERAL",
    "AMIRAL",
    "PRETRE",
    "MOINE",
    "NONNE",
    "RABBIN",
    "IMAM",
    "PASTEUR",
    "CHIRURGIEN",
    "PSYCHOLOGUE",
    "PSYCHIATRE",
    "PHARMACIEN",
    "OPTICIEN",
    "OSTEOPATHE",
    "MASSEUR",
    "ENTRAINEUR",
    "ARBITRE",
    "ATHLETE",
    "NAGEUR",
    "COUREUR",
    "CYCLISTE",
    "FOOTBALLEUR",
    "GYMNASTE",
    "DANSEUSE",
    "CHOREGRAPHE",
    "REALISATEUR",
    "PRODUCTEUR",
    "MONTEUR",
    "DECORATEUR",
    "COSTUMIER",
    "MAQUILLEUR",
    "CASCADEUR",
    "HUMORISTE",
    "CLOWN",
    "MAGICIEN",
    "JONGLEUR",
    "ACROBATE",
    "DRESSEUR",
    // Vetements (nouveaux)
    "TSHIRT",
    "DEBARDEUR",
    "GILET",
    "CARDIGAN",
    "BLOUSON",
    "IMPERMEABLE",
    "COMBINAISON",
    "SALOPETTE",
    "COLLANT",
    "LEGGING",
    "CULOTTE",
    "CALECON",
    "CHAUSSON",
    "PANTOUFLE",
    "TONG",
    "ESPADRILLE",
    "BONNET",
    "CASQUETTE",
    "BERET",
    "FOULARD",
    "CRAVATE",
    "CEINTURON",
    "BRETELLE",
    "BOUTON",
    "POCHE",
    "CAPUCHE",
    "MANCHE",
    // Transport (nouveaux)
    "SCOOTER",
    "CAMIONNETTE",
    "CARAVANE",
    "REMORQUE",
    "TRACTEUR",
    "PELLETEUSE",
    "BULLDOZER",
    "GRUE",
    "BETONNIERE",
    "CORBILLARD",
    "TAXI",
    "LIMOUSINE",
    "FOURGON",
    "MINIBUS",
    "TELEPHERIQUE",
    "FUNICULAIRE",
    "PAQUEBOT",
    "VOILIER",
    "CANOT",
    "KAYAK",
    "PEDALO",
    "SUBMERSIBLE",
    "PLANEUR",
    "DELTAPLANE",
    "PARAPENTE",
    "NAVETTE",
    // Temps et sentiments (nouveaux)
    "EPOQUE",
    "INSTANT",
    "MOMENT",
    "SIECLE",
    "DECENNIE",
    "CALENDRIER",
    "HORAIRE",
    "MINUTE",
    "SECONDE",
    "HEURE",
    "JOURNEE",
    "SOIREE",
    "VACANCES",
    "CONGE",
    "ESPOIR",
    "BONHEUR",
    "MALHEUR",
    "CHAGRIN",
    "ANGOISSE",
    "CALME",
    "SERENITE",
    "ENTHOUSIASME",
    "NOSTALGIE",
    "MELANCOLIE",
    "GRATITUDE",
    "COMPASSION",
    "GENEROSITE",
    "HONNETETE",
    "MODESTIE",
    "HUMILITE",
    "SAGESSE",
    "FOLIE",
    "ENNUI",
    "FATIGUE",
    "EPUISEMENT",
    "SOULAGEMENT",
    "ETONNEMENT",
    "EMERVEILLEMENT",
    "CONFIANCE",
    "MEFIANCE",
    "DOUTE",
    "CERTITUDE",
    "AMITIE",
    "AMOUR",
    "PASSION",
    "ENVIE",
    "DEGOUT",
    "HONTE",
    "REGRET",
    "REMORDS",
    // Ecole et jeux (nouveaux)
    "MAITRESSE",
    "DIRECTEUR",
    "ELEVE",
    "CAMARADE",
    "COPAIN",
    "CANTINE",
    "CLASSE",
    "LECON",
    "DEVOIR",
    "EXAMEN",
    "NOTE",
    "BULLETIN",
    "RENTREE",
    "UNIFORME",
    "AGENDA",
    "CLASSEUR",
    "SURLIGNEUR",
    "FEUTRE",
    "CRAIE",
    "ARDOISE",
    "GLOBE",
    "CARTE",
    "ATLAS",
    "DOMINO",
    "ECHECS",
    "DAMES",
    "CARTES",
    "TOUPIE",
    "DINETTE",
    "POUPEE",
    "PELUCHE",
    "ROBOT",
    "PATIN",
    "ELASTIQUE",
    "BILLE",
    "MARELLE",
    // Sport (nouveaux)
    "RUGBY",
    "HANDBALL",
    "VOLLEYBALL",
    "GOLF",
    "BADMINTON",
    "SQUASH",
    "BOXE",
    "LUTTE",
    "MUSCULATION",
    "MARATHON",
    "SPRINT",
    "RELAIS",
    "SAUT",
    "LANCER",
    "PERCHE",
    "TRIATHLON",
    "DECATHLON",
    "PENTATHLON",
    "LUGE",
    "PATINAGE",
    "CURLING",
    "HOCKEY",
    "BOWLING",
    "BILLARD",
    "PETANQUE",
    "FLECHETTES",
    "EQUITATION",
    "DRESSAGE",
    "VOLTIGE",
    "SURF",
    "PLANCHE",
    "REGATE",
    "CANOE",
    "RANDONNEE",
    "ALPINISME",
    // Technologie et science (nouveaux)
    "LOGICIEL",
    "PROGRAMME",
    "INTERNET",
    "RESEAU",
    "SATELLITE",
    "ANTENNE",
    "BATTERIE",
    "ECOUTEUR",
    "CAMERA",
    "APPAREIL",
    "OBJECTIF",
    "TELESCOPE",
    "MICROSCOPE",
    "LABORATOIRE",
    "EXPERIENCE",
    "MOLECULE",
    "ATOME",
    "ELECTRON",
    "PROTON",
    "NEUTRON",
    "GRAVITE",
    "ENERGIE",
    "ELECTRICITE",
    "MAGNETISME",
    "CHIMIE",
    "PHYSIQUE",
    "BIOLOGIE",
    "GEOLOGIE",
    "ASTRONOMIE",
    "ASTEROIDE",
    "METEORE",
    // Famille (noms communs)
    "PARENT",
    "ENFANT",
    "FRERE",
    "SOEUR",
    "COUSIN",
    "COUSINE",
    "NEVEU",
    "NIECE",
    "ONCLE",
    "TANTE",
    "BEBE",
    "JUMEAU",
    "JUMELLE",
    "FAMILLE",
    "VOISIN",
    "VOISINE",
    "COPINE",
    "AMIE",
    "FIANCE",
    "EPOUX",
    "EPOUSE",
    "FILLEUL",
    "PARRAIN",
    "MARRAINE",
    // Ville et lieux (nouveaux)
    "VILLAGE",
    "QUARTIER",
    "RUELLE",
    "AVENUE",
    "BOULEVARD",
    "IMPASSE",
    "TUNNEL",
    "VIADUC",
    "BARRAGE",
    "AEROPORT",
    "GARE",
    "STATION",
    "ARRET",
    "QUAI",
    "ENTREPOT",
    "CHANTIER",
    "ECHAFAUDAGE",
    "PHARE",
    "DIGUE",
    "JETEE",
    "CRIQUE",
    "LAGON",
    "ATOLL",
    "ARCHIPEL",
    "DELTA",
    "EMBOUCHURE",
    "AFFLUENT",
    "BASSIN",
    "RESERVOIR",
    "CANAL",
    "ECLUSE",
    // Musique (nouveaux)
    "GUITARE",
    "PIANO",
    "VIOLON",
    "FLUTE",
    "TROMPETTE",
    "TROMBONE",
    "CLARINETTE",
    "SAXOPHONE",
    "HARPE",
    "ACCORDEON",
    "TAMBOUR",
    "CYMBALE",
    "XYLOPHONE",
    "TRIANGLE",
    "MARACAS",
    "CASTAGNETTES",
    "ORGUE",
    "CORNEMUSE",
    "UKULELE",
    "CHANSON",
    "MELODIE",
    "RYTHME",
    "PARTITION",
    "CONCERT",
    "ORCHESTRE",
    "CHORALE",
    "REFRAIN",
    "COUPLET",
    // Couleurs (nouveaux)
    "ROUGE",
    "VERT",
    "BLEU",
    "JAUNE",
    "NOIR",
    "BLANC",
    "VIOLET",
    "ROSE",
    "GRIS",
    "MARRON",
    "BEIGE",
    "TURQUOISE",
    "INDIGO",
    "POURPRE",
    "DORE",
    "ARGENTE"
  ];
  var DIFFICULTIES = {
    facile: { min: 4, max: 5, label: "4 \xE0 5 lettres" },
    moyen: { min: 6, max: 8, label: "6 \xE0 8 lettres" },
    difficile: { min: 9, max: 14, label: "9 \xE0 14 lettres" }
  };
  function normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
  }
  function poolForDifficulty(difficulty) {
    const { min, max } = DIFFICULTIES[difficulty];
    return ALL_WORDS.filter((w) => w.length >= min && w.length <= max);
  }
  function pickWord(difficulty, avoidWord = null) {
    const pool = poolForDifficulty(difficulty);
    const candidates = pool.length > 1 && avoidWord ? pool.filter((w) => w !== avoidWord) : pool;
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  // js/game.js
  var MAX_ERRORS_BY_DIFFICULTY = { facile: 6, moyen: 8, difficile: 10 };
  function createGame(difficulty, avoidWord = null) {
    const word = pickWord(difficulty, avoidWord);
    const normalizedWord = normalize(word);
    const uniqueLetters = new Set(normalizedWord.split(""));
    return {
      difficulty,
      word,
      normalizedWord,
      uniqueLetters,
      foundLetters: /* @__PURE__ */ new Set(),
      triedLetters: [],
      // [{ letter, hit }] dans l'ordre de saisie
      errors: 0,
      // erreurs consécutives depuis la dernière bonne lettre
      maxErrors: MAX_ERRORS_BY_DIFFICULTY[difficulty],
      phase: "playing",
      // 'playing' | 'won' | 'lost'
      milestonesShown: /* @__PURE__ */ new Set()
      // 'half' | 'two-left'
    };
  }
  function getRemainingErrors(state2) {
    return state2.maxErrors - state2.errors;
  }
  function findPositions(state2, normalizedLetter) {
    const positions = [];
    for (let i = 0; i < state2.normalizedWord.length; i++) {
      if (state2.normalizedWord[i] === normalizedLetter) positions.push(i);
    }
    return positions;
  }
  function checkMilestone(state2, beforeRemaining, beforeFoundCount) {
    if (state2.phase !== "playing") return null;
    const total = state2.uniqueLetters.size;
    const afterRemaining = total - state2.foundLetters.size;
    if (beforeRemaining > 2 && afterRemaining === 2 && !state2.milestonesShown.has("two-left")) {
      state2.milestonesShown.add("two-left");
      return "two-left";
    }
    const beforeRatio = total > 0 ? beforeFoundCount / total : 0;
    const afterRatio = total > 0 ? state2.foundLetters.size / total : 0;
    if (beforeRatio < 0.5 && afterRatio >= 0.5 && !state2.milestonesShown.has("half")) {
      state2.milestonesShown.add("half");
      return "half";
    }
    return null;
  }
  function guessLetter(state2, rawLetter) {
    if (state2.phase !== "playing") {
      return { ignored: true, reason: "game-over" };
    }
    const letter = normalize(rawLetter);
    const already = state2.triedLetters.find((t) => t.letter === letter);
    if (already) {
      return { alreadyTried: true, letter, hit: already.hit };
    }
    const positions = findPositions(state2, letter);
    const hit = positions.length > 0;
    const beforeFoundCount = state2.foundLetters.size;
    const beforeRemaining = state2.uniqueLetters.size - beforeFoundCount;
    state2.triedLetters.push({ letter, hit });
    if (hit) {
      state2.foundLetters.add(letter);
      state2.errors = 0;
      const won = [...state2.uniqueLetters].every((l) => state2.foundLetters.has(l));
      if (won) state2.phase = "won";
    } else {
      state2.errors += 1;
      if (state2.errors >= state2.maxErrors) state2.phase = "lost";
    }
    const milestone = hit ? checkMilestone(state2, beforeRemaining, beforeFoundCount) : null;
    return {
      letter,
      hit,
      positions,
      errors: state2.errors,
      remainingErrors: getRemainingErrors(state2),
      phase: state2.phase,
      milestone
    };
  }
  function getBoxes(state2) {
    return state2.word.split("").map((char, i) => {
      const normalizedChar = state2.normalizedWord[i];
      const revealed = state2.foundLetters.has(normalizedChar) || state2.phase === "lost";
      return { position: i + 1, char: revealed ? char : null, revealed };
    });
  }

  // js/ui.js
  function $(id) {
    return document.getElementById(id);
  }
  var lastAnnouncement = "";
  var politeToggle = false;
  function announce(message, urgent = false) {
    lastAnnouncement = message;
    if (urgent) {
      const region = $("aria-alert");
      region.textContent = "";
      requestAnimationFrame(() => {
        region.textContent = message;
      });
    } else {
      politeToggle = !politeToggle;
      const activeId = politeToggle ? "aria-status-a" : "aria-status-b";
      const inactiveId = politeToggle ? "aria-status-b" : "aria-status-a";
      $(inactiveId).textContent = "";
      const active = $(activeId);
      active.textContent = "";
      requestAnimationFrame(() => {
        active.textContent = message;
      });
    }
  }
  function repeatLastAnnouncement() {
    if (lastAnnouncement) announce(lastAnnouncement);
  }
  var MILESTONE_MESSAGES = {
    "two-left": ["Encore deux lettres !", "Vous y \xEAtes presque, plus que deux lettres !"],
    half: ["Vous \xEAtes \xE0 la moiti\xE9 !", "D\xE9j\xE0 la moiti\xE9 du mot trouv\xE9e !"]
  };
  var GENERIC_ENCOURAGEMENTS = [
    "Bien jou\xE9 !",
    "Continuez comme \xE7a !",
    "Belle intuition !",
    "Vous progressez bien !",
    "Excellent !"
  ];
  var GENERIC_CHANCE = 0.3;
  function pickOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function buildEncouragement(milestone) {
    if (milestone && MILESTONE_MESSAGES[milestone]) {
      return " " + pickOne(MILESTONE_MESSAGES[milestone]);
    }
    if (Math.random() < GENERIC_CHANCE) {
      return " " + pickOne(GENERIC_ENCOURAGEMENTS);
    }
    return "";
  }
  function announceGuessResult(result) {
    if (result.alreadyTried) {
      announce(`Vous avez d\xE9j\xE0 propos\xE9 la lettre ${result.letter}.`);
      return;
    }
    if (result.hit) {
      const casesLabel = result.positions.length > 1 ? "cases" : "case";
      const positionsText = result.positions.map((p) => p + 1).join(", ");
      const encouragement = buildEncouragement(result.milestone);
      announce(`Lettre ${result.letter} : correspondance en ${casesLabel} ${positionsText}.${encouragement}`);
    } else {
      const essaiLabel = result.remainingErrors > 1 ? "essais" : "essai";
      announce(`Lettre ${result.letter} : aucune correspondance. Il reste ${result.remainingErrors} ${essaiLabel}.`);
    }
  }
  function showScreen(name) {
    document.querySelectorAll(".screen").forEach((el) => {
      el.hidden = el.id !== `screen-${name}`;
    });
    const heading = $(`screen-${name}`)?.querySelector("h1");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus();
    }
  }
  function initDifficultyScreen(onChoose) {
    document.querySelectorAll(".difficulty-btn").forEach((btn) => {
      btn.addEventListener("click", () => onChoose(btn.dataset.difficulty));
    });
  }
  function initGuessForm(onGuess2) {
    const form = $("guess-form");
    const input = $("letter-input");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = input.value.trim();
      input.value = "";
      input.focus();
      if (!value) return;
      onGuess2(value[0]);
    });
  }
  function focusGuessInput() {
    $("letter-input")?.focus();
  }
  function renderBoxes(boxes) {
    const list = $("word-boxes");
    list.innerHTML = "";
    for (const box of boxes) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.className = "letter-box" + (box.revealed ? " revealed" : "");
      span.tabIndex = 0;
      span.textContent = box.char || "";
      span.setAttribute(
        "aria-label",
        box.char ? `Case ${box.position}, lettre ${box.char}` : `Case ${box.position}, case vide`
      );
      li.appendChild(span);
      list.appendChild(li);
    }
  }
  function renderTriedLetters(triedLetters) {
    const list = $("tried-letters");
    list.innerHTML = "";
    for (const { letter, hit } of triedLetters) {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.className = "tried-letter" + (hit ? " hit" : " miss");
      span.tabIndex = 0;
      span.textContent = letter;
      span.setAttribute("aria-label", `Lettre ${letter}, ${hit ? "correspond" : "ne correspond pas"}`);
      li.appendChild(span);
      list.appendChild(li);
    }
  }
  function renderErrors(errors, maxErrors) {
    $("errors-value").textContent = String(errors);
    $("errors-max").textContent = String(maxErrors);
    document.querySelectorAll("#hangman-drawing .stage").forEach((el, i) => {
      el.style.visibility = i < errors ? "visible" : "hidden";
    });
  }
  function renderWordLength(length) {
    $("word-length").textContent = String(length);
  }
  function showEndScreen({ won, word }) {
    $("end-heading").textContent = won ? "Gagn\xE9 !" : "Perdu";
    $("end-message").textContent = won ? `Bravo, vous avez trouv\xE9 le mot ${word} !` : `Dommage, le mot \xE9tait ${word}.`;
    showScreen("end");
    $("btn-new-word").focus();
  }
  function initNewWordButton(onClick) {
    $("btn-new-word").addEventListener("click", onClick);
  }
  function initChangeDifficultyButton(onClick) {
    $("btn-change-difficulty").addEventListener("click", onClick);
  }
  function initRepeatButton(onClick) {
    $("btn-repeat").addEventListener("click", onClick);
  }

  // js/main.js
  var state = null;
  function renderAll() {
    renderWordLength(state.word.length);
    renderBoxes(getBoxes(state));
    renderTriedLetters(state.triedLetters);
    renderErrors(state.errors, state.maxErrors);
  }
  function startGame(difficulty, avoidWord = null) {
    state = createGame(difficulty, avoidWord);
    renderAll();
    showScreen("game");
    focusGuessInput();
    announce(`Nouvelle partie. On cherche un mot de ${state.word.length} lettres.`);
  }
  function onGuess(letter) {
    const result = guessLetter(state, letter);
    if (result.ignored) return;
    if (result.alreadyTried) {
      announceGuessResult(result);
      return;
    }
    renderAll();
    if (result.phase === "won") {
      announce(`Victoire ! Vous avez trouv\xE9 le mot ${state.word}.`, true);
      showEndScreen({ won: true, word: state.word });
      return;
    }
    if (result.phase === "lost") {
      announce(`Perdu. Le mot \xE9tait ${state.word}.`, true);
      showEndScreen({ won: false, word: state.word });
      return;
    }
    announceGuessResult(result);
  }
  function onNewWord() {
    startGame(state.difficulty, state.word);
  }
  function onChangeDifficulty() {
    state = null;
    showScreen("difficulty");
  }
  document.addEventListener("DOMContentLoaded", () => {
    showScreen("difficulty");
    initDifficultyScreen((difficulty) => startGame(difficulty));
    initGuessForm(onGuess);
    initNewWordButton(onNewWord);
    initChangeDifficultyButton(onChangeDifficulty);
    initRepeatButton(repeatLastAnnouncement);
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./service-worker.js");
    }
  });
})();
