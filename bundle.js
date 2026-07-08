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
    "\xC9CUREUIL",
    "H\xC9RISSON",
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
    "L\xC9ZARD",
    "SERPENT",
    "TORTUE",
    "CROCODILE",
    "DAUPHIN",
    "BALEINE",
    "REQUIN",
    "POULPE",
    "M\xC9DUSE",
    "CREVETTE",
    "HOMARD",
    "ABEILLE",
    "PAPILLON",
    "COCCINELLE",
    "FOURMI",
    "ARAIGN\xC9E",
    "SCARAB\xC9E",
    "LIBELLULE",
    "ESCARGOT",
    "CHENILLE",
    "GIRAFE",
    "Z\xC8BRE",
    "\xC9L\xC9PHANT",
    "HIPPOPOTAME",
    "RHINOC\xC9ROS",
    "CHIMPANZ\xC9",
    "GORILLE",
    "KANGOUROU",
    "PANDA",
    "CHOUETTE",
    "FLAMANT",
    "P\xC9LICAN",
    "TOUCAN",
    "PERROQUET",
    "COLIBRI",
    // Corps
    "T\xCATE",
    "BRAS",
    "MAIN",
    "DOIGT",
    "JAMBE",
    "GENOU",
    "COUDE",
    "\xC9PAULE",
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
    "FEN\xCATRE",
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
    "\xC9PONGE",
    "SAVON",
    "BROSSE",
    "PEIGNE",
    "SERVIETTE",
    "ASSIETTE",
    "VERRE",
    "FOURCHETTE",
    "COUTEAU",
    "CUILL\xC8RE",
    "CASSEROLE",
    "PO\xCALE",
    "FOUR",
    "FRIGO",
    "\xC9VIER",
    "ROBINET",
    "BAIGNOIRE",
    "DOUCHE",
    "T\xC9L\xC9VISEUR",
    "ORDINATEUR",
    "T\xC9L\xC9PHONE",
    "CLAVIER",
    "\xC9CRAN",
    "IMPRIMANTE",
    "CHARGEUR",
    "T\xC9L\xC9COMMANDE",
    // Nature
    "ARBRE",
    "FLEUR",
    "FEUILLE",
    "RACINE",
    "BRANCHE",
    "FOR\xCAT",
    "MONTAGNE",
    "COLLINE",
    "VALL\xC9E",
    "RIVI\xC8RE",
    "RUISSEAU",
    "CASCADE",
    "\xC9TANG",
    "OC\xC9AN",
    "PLAGE",
    "FALAISE",
    "DUNE",
    "D\xC9SERT",
    "VOLCAN",
    "GLACIER",
    "NUAGE",
    "ORAGE",
    "\xC9CLAIR",
    "TONNERRE",
    "NEIGE",
    "GIVRE",
    "BROUILLARD",
    "SOLEIL",
    "\xC9TOILE",
    "GALAXIE",
    "COM\xC8TE",
    "PLAN\xC8TE",
    "CAILLOU",
    "ROCHE",
    "SABLE",
    "BOUE",
    "HERBE",
    "MOUSSE",
    "CHAMPIGNON",
    "FOUG\xC8RE",
    // Nourriture
    "PAIN",
    "FROMAGE",
    "BEURRE",
    "LAIT",
    "OEUF",
    "SUCRE",
    "FARINE",
    "G\xC2TEAU",
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
    "P\xCACHE",
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
    "M\xC9DECIN",
    "INFIRMI\xC8RE",
    "DENTISTE",
    "V\xC9T\xC9RINAIRE",
    "ARCHITECTE",
    "ING\xC9NIEUR",
    "PROFESSEUR",
    "INSTITUTEUR",
    "AVOCAT",
    "JUGE",
    "POLICIER",
    "JARDINIER",
    "CUISINIER",
    "MENUISIER",
    "\xC9LECTRICIEN",
    "PLOMBIER",
    "PEINTRE",
    "MUSICIEN",
    "CHANTEUR",
    "DANSEUR",
    "ACTEUR",
    "\xC9CRIVAIN",
    "JOURNALISTE",
    "PHOTOGRAPHE",
    "AGRICULTEUR",
    "P\xCACHEUR",
    "MARIN",
    "PILOTE",
    "ASTRONAUTE",
    "CHAUFFEUR",
    "VENDEUR",
    "COIFFEUR",
    "COUTURIER",
    "BIBLIOTH\xC9CAIRE",
    // Vetements
    "CHEMISE",
    "PANTALON",
    "ROBE",
    "JUPE",
    "MANTEAU",
    "\xC9CHARPE",
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
    "V\xC9LO",
    "VOITURE",
    "CAMION",
    "TRAIN",
    "AVION",
    "BATEAU",
    "MOTO",
    "M\xC9TRO",
    "TRAMWAY",
    "H\xC9LICOPT\xC8RE",
    "FUS\xC9E",
    "MONTGOLFI\xC8RE",
    "TROTTINETTE",
    // Temps et sentiments
    "MATIN",
    "MIDI",
    "SOIR",
    "NUIT",
    "AUBE",
    "CR\xC9PUSCULE",
    "SEMAINE",
    "ANN\xC9E",
    "SAISON",
    "PRINTEMPS",
    "AUTOMNE",
    "HIVER",
    "JOIE",
    "TRISTESSE",
    "COL\xC8RE",
    "PEUR",
    "SURPRISE",
    "FIERT\xC9",
    "JALOUSIE",
    "TENDRESSE",
    "COURAGE",
    "PATIENCE",
    "CURIOSIT\xC9",
    // Ecole et jeux
    "CAHIER",
    "CRAYON",
    "GOMME",
    "R\xC8GLE",
    "CISEAUX",
    "TABLEAU",
    "CARTABLE",
    "TROUSSE",
    "DICTIONNAIRE",
    "BIBLIOTH\xC8QUE",
    "R\xC9CR\xC9ATION",
    "ANNIVERSAIRE",
    "CADEAU",
    "BALLON",
    "TOBOGGAN",
    "BALAN\xC7OIRE",
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
    "ATHL\xC9TISME",
    "GYMNASTIQUE",
    "JUDO",
    "KARAT\xC9",
    "ESCRIME",
    "AVIRON",
    "VOILE",
    "PLONG\xC9E",
    // Mots longs divers
    "PARAPLUIE",
    "AMBULANCE",
    "BOULANGERIE",
    "PHARMACIE",
    "CHARCUTERIE",
    "P\xC2TISSERIE",
    "CALCULATRICE",
    "EXTRATERRESTRE",
    "MICROPHONE",
    "VIOLONCELLE",
    // --- Enrichissement (juillet 2026) ---
    // Animaux (nouveaux)
    "CHIEN",
    "POULE",
    "DINDE",
    "CH\xC8VRE",
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
    "L\xC9OPARD",
    "JAGUAR",
    "GU\xC9PARD",
    "LYNX",
    "HY\xC8NE",
    "CHACAL",
    "BISON",
    "\xC9LAN",
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
    "\xC9CREVISSE",
    "MOULE",
    "HU\xCETRE",
    "COQUILLAGE",
    "CIGOGNE",
    "H\xC9RON",
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
    "M\xC9SANGE",
    "MERLE",
    "PINSON",
    "COLOMBE",
    "GU\xCAPE",
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
    "VIP\xC8RE",
    "COULEUVRE",
    "CAM\xC9L\xC9ON",
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
    "L\xC8VRE",
    "PAUPI\xC8RE",
    "NARINE",
    "M\xC2CHOIRE",
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
    "ART\xC8RE",
    "SANG",
    "SALIVE",
    "LARME",
    "SOURIRE",
    "GRIMACE",
    // Maison et objets (nouveaux)
    "PLAFOND",
    "PLANCHER",
    "CHEMIN\xC9E",
    "BALCON",
    "TERRASSE",
    "GRENIER",
    "CAVE",
    "GARAGE",
    "JARDIN",
    "PORTAIL",
    "CL\xD4TURE",
    "PELOUSE",
    "POTAGER",
    "SERRE",
    "NICHE",
    "CABANE",
    "GRANGE",
    "\xC9TABLE",
    "FERME",
    "MOULIN",
    "CH\xC2TEAU",
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
    "\xC9GLISE",
    "MAIRIE",
    "\xC9COLE",
    "H\xD4PITAL",
    "BANQUE",
    "MUS\xC9E",
    "CIN\xC9MA",
    "TH\xC9\xC2TRE",
    "STADE",
    "PISCINE",
    "MARCH\xC9",
    "MAGASIN",
    "BOUTIQUE",
    "SUPERMARCH\xC9",
    "RESTAURANT",
    "H\xD4TEL",
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
    "R\xC2TEAU",
    "B\xCACHE",
    "TONDEUSE",
    "\xC9CHELLE",
    "MARTEAU",
    "TOURNEVIS",
    "PINCE",
    "CLOU",
    "SCIE",
    "PERCEUSE",
    "\xC9TABLI",
    "NIVEAU",
    "ENCLUME",
    "FORGE",
    "SOUDURE",
    "VISSEUSE",
    "MEULEUSE",
    "TRON\xC7ONNEUSE",
    "BROUETTE",
    "CADENAS",
    "VERROU",
    "CHARNI\xC8RE",
    "POIGN\xC9E",
    // Nature (nouveaux)
    "FLEUVE",
    "TORRENT",
    "SOURCE",
    "MARAIS",
    "MAR\xC9CAGE",
    "PRAIRIE",
    "CLAIRI\xC8RE",
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
    "CH\xCANE",
    "SAPIN",
    "BOULEAU",
    "PEUPLIER",
    "CH\xC2TAIGNIER",
    "NOISETIER",
    "OLIVIER",
    "PALMIER",
    "BAMBOU",
    "CACTUS",
    "ALGUE",
    "CORAIL",
    "R\xC9CIF",
    "P\xC9NINSULE",
    "CONTINENT",
    "AVALANCHE",
    "S\xC9ISME",
    "\xC9RUPTION",
    "TREMBLEMENT",
    "INONDATION",
    "S\xC9CHERESSE",
    "BRUME",
    "ROS\xC9E",
    "GR\xCALE",
    "VERGLAS",
    "TEMP\xCATE",
    "CYCLONE",
    "OURAGAN",
    "TORNADE",
    "VENT",
    "BRISE",
    "RAFALE",
    // Nourriture (nouveaux)
    "L\xC9GUME",
    "COURGETTE",
    "AUBERGINE",
    "POIVRON",
    "CONCOMBRE",
    "RADIS",
    "NAVET",
    "C\xC9LERI",
    "\xC9PINARD",
    "CHOU",
    "BROCOLI",
    "ARTICHAUT",
    "ASPERGE",
    "COURGE",
    "CITROUILLE",
    "PAST\xC8QUE",
    "MANGUE",
    "KIWI",
    "MYRTILLE",
    "FRAMBOISE",
    "M\xDBRE",
    "GROSEILLE",
    "PRUNE",
    "MIRABELLE",
    "FIGUE",
    "NOISETTE",
    "AMANDE",
    "CACAHU\xC8TE",
    "CH\xC2TAIGNE",
    "PAMPLEMOUSSE",
    "MANDARINE",
    "CL\xC9MENTINE",
    "YAOURT",
    "CR\xC8ME",
    "P\xC2TES",
    "NOUILLE",
    "SEMOULE",
    "LENTILLE",
    "HUILE",
    "VINAIGRE",
    "MOUTARDE",
    "POIVRE",
    "\xC9PICE",
    "CANNELLE",
    "VANILLE",
    "GINGEMBRE",
    "PERSIL",
    "BASILIC",
    "THYM",
    "MENTHE",
    "CAF\xC9",
    "LIMONADE",
    "SIROP",
    "CIDRE",
    "BI\xC8RE",
    "CROISSANT",
    "BAGUETTE",
    "TARTINE",
    "CR\xCAPE",
    "GAUFRE",
    "TARTE",
    "FLAN",
    "GLACE",
    "SORBET",
    "CARAMEL",
    "NOUGAT",
    "R\xC9GLISSE",
    "P\xC2TE",
    "OMELETTE",
    "RATATOUILLE",
    "GRATIN",
    "POTAGE",
    "BOUILLON",
    "R\xD4TI",
    "STEAK",
    "C\xD4TELETTE",
    "ESCALOPE",
    "MERGUEZ",
    "LANGOUSTE",
    "SARDINE",
    // Metiers (nouveaux)
    "AVIATEUR",
    "CAPITAINE",
    "H\xD4TESSE",
    "CONDUCTEUR",
    "M\xC9CANICIEN",
    "SERRURIER",
    "MA\xC7ON",
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
    "\xC9DITEUR",
    "TRADUCTEUR",
    "INTERPR\xC8TE",
    "NOTAIRE",
    "HUISSIER",
    "COMPTABLE",
    "BANQUIER",
    "ASSUREUR",
    "COMMER\xC7ANT",
    "CAISSIER",
    "LIVREUR",
    "D\xC9M\xC9NAGEUR",
    "\xC9B\xC9NISTE",
    "TAILLEUR",
    "MODISTE",
    "CORDONNIER",
    "CHOCOLATIER",
    "P\xC2TISSIER",
    "TRAITEUR",
    "SOMMELIER",
    "APICULTEUR",
    "VITICULTEUR",
    "\xC9LEVEUR",
    "B\xDBCHERON",
    "DOUANIER",
    "GENDARME",
    "MILITAIRE",
    "SOLDAT",
    "OFFICIER",
    "G\xC9N\xC9RAL",
    "AMIRAL",
    "PR\xCATRE",
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
    "OST\xC9OPATHE",
    "MASSEUR",
    "ENTRA\xCENEUR",
    "ARBITRE",
    "ATHL\xC8TE",
    "NAGEUR",
    "COUREUR",
    "CYCLISTE",
    "FOOTBALLEUR",
    "GYMNASTE",
    "DANSEUSE",
    "CHOR\xC9GRAPHE",
    "R\xC9ALISATEUR",
    "PRODUCTEUR",
    "MONTEUR",
    "D\xC9CORATEUR",
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
    "D\xC9BARDEUR",
    "GILET",
    "CARDIGAN",
    "BLOUSON",
    "IMPERM\xC9ABLE",
    "COMBINAISON",
    "SALOPETTE",
    "COLLANT",
    "LEGGING",
    "CULOTTE",
    "CALE\xC7ON",
    "CHAUSSON",
    "PANTOUFLE",
    "TONG",
    "ESPADRILLE",
    "BONNET",
    "CASQUETTE",
    "B\xC9RET",
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
    "B\xC9TONNI\xC8RE",
    "CORBILLARD",
    "TAXI",
    "LIMOUSINE",
    "FOURGON",
    "MINIBUS",
    "T\xC9L\xC9PH\xC9RIQUE",
    "FUNICULAIRE",
    "PAQUEBOT",
    "VOILIER",
    "CANOT",
    "KAYAK",
    "P\xC9DALO",
    "SUBMERSIBLE",
    "PLANEUR",
    "DELTAPLANE",
    "PARAPENTE",
    "NAVETTE",
    // Temps et sentiments (nouveaux)
    "\xC9POQUE",
    "INSTANT",
    "MOMENT",
    "SI\xC8CLE",
    "D\xC9CENNIE",
    "CALENDRIER",
    "HORAIRE",
    "MINUTE",
    "SECONDE",
    "HEURE",
    "JOURN\xC9E",
    "SOIR\xC9E",
    "VACANCES",
    "CONG\xC9",
    "ESPOIR",
    "BONHEUR",
    "MALHEUR",
    "CHAGRIN",
    "ANGOISSE",
    "CALME",
    "S\xC9R\xC9NIT\xC9",
    "ENTHOUSIASME",
    "NOSTALGIE",
    "M\xC9LANCOLIE",
    "GRATITUDE",
    "COMPASSION",
    "G\xC9N\xC9ROSIT\xC9",
    "HONN\xCATET\xC9",
    "MODESTIE",
    "HUMILIT\xC9",
    "SAGESSE",
    "FOLIE",
    "ENNUI",
    "FATIGUE",
    "\xC9PUISEMENT",
    "SOULAGEMENT",
    "\xC9TONNEMENT",
    "\xC9MERVEILLEMENT",
    "CONFIANCE",
    "M\xC9FIANCE",
    "DOUTE",
    "CERTITUDE",
    "AMITI\xC9",
    "AMOUR",
    "PASSION",
    "ENVIE",
    "D\xC9GO\xDBT",
    "HONTE",
    "REGRET",
    "REMORDS",
    // Ecole et jeux (nouveaux)
    "MA\xCETRESSE",
    "DIRECTEUR",
    "\xC9L\xC8VE",
    "CAMARADE",
    "COPAIN",
    "CANTINE",
    "CLASSE",
    "LE\xC7ON",
    "DEVOIR",
    "EXAMEN",
    "NOTE",
    "BULLETIN",
    "RENTR\xC9E",
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
    "\xC9CHECS",
    "DAMES",
    "CARTES",
    "TOUPIE",
    "DINETTE",
    "POUP\xC9E",
    "PELUCHE",
    "ROBOT",
    "PATIN",
    "\xC9LASTIQUE",
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
    "D\xC9CATHLON",
    "PENTATHLON",
    "LUGE",
    "PATINAGE",
    "CURLING",
    "HOCKEY",
    "BOWLING",
    "BILLARD",
    "P\xC9TANQUE",
    "FL\xC9CHETTES",
    "\xC9QUITATION",
    "DRESSAGE",
    "VOLTIGE",
    "SURF",
    "PLANCHE",
    "R\xC9GATE",
    "CANO\xCB",
    "RANDONN\xC9E",
    "ALPINISME",
    // Technologie et science (nouveaux)
    "LOGICIEL",
    "PROGRAMME",
    "INTERNET",
    "R\xC9SEAU",
    "SATELLITE",
    "ANTENNE",
    "BATTERIE",
    "\xC9COUTEUR",
    "CAM\xC9RA",
    "APPAREIL",
    "OBJECTIF",
    "T\xC9LESCOPE",
    "MICROSCOPE",
    "LABORATOIRE",
    "EXP\xC9RIENCE",
    "MOL\xC9CULE",
    "ATOME",
    "\xC9LECTRON",
    "PROTON",
    "NEUTRON",
    "GRAVIT\xC9",
    "\xC9NERGIE",
    "\xC9LECTRICIT\xC9",
    "MAGN\xC9TISME",
    "CHIMIE",
    "PHYSIQUE",
    "BIOLOGIE",
    "G\xC9OLOGIE",
    "ASTRONOMIE",
    "AST\xC9RO\xCFDE",
    "M\xC9T\xC9ORE",
    // Famille (noms communs)
    "PARENT",
    "ENFANT",
    "FR\xC8RE",
    "SOEUR",
    "COUSIN",
    "COUSINE",
    "NEVEU",
    "NI\xC8CE",
    "ONCLE",
    "TANTE",
    "B\xC9B\xC9",
    "JUMEAU",
    "JUMELLE",
    "FAMILLE",
    "VOISIN",
    "VOISINE",
    "COPINE",
    "AMIE",
    "FIANC\xC9",
    "\xC9POUX",
    "\xC9POUSE",
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
    "A\xC9ROPORT",
    "GARE",
    "STATION",
    "ARR\xCAT",
    "QUAI",
    "ENTREP\xD4T",
    "CHANTIER",
    "\xC9CHAFAUDAGE",
    "PHARE",
    "DIGUE",
    "JET\xC9E",
    "CRIQUE",
    "LAGON",
    "ATOLL",
    "ARCHIPEL",
    "DELTA",
    "EMBOUCHURE",
    "AFFLUENT",
    "BASSIN",
    "R\xC9SERVOIR",
    "CANAL",
    "\xC9CLUSE",
    // Musique (nouveaux)
    "GUITARE",
    "PIANO",
    "VIOLON",
    "FL\xDBTE",
    "TROMPETTE",
    "TROMBONE",
    "CLARINETTE",
    "SAXOPHONE",
    "HARPE",
    "ACCORD\xC9ON",
    "TAMBOUR",
    "CYMBALE",
    "XYLOPHONE",
    "TRIANGLE",
    "MARACAS",
    "CASTAGNETTES",
    "ORGUE",
    "CORNEMUSE",
    "UKUL\xC9L\xC9",
    "CHANSON",
    "M\xC9LODIE",
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
    "DOR\xC9",
    "ARGENT\xC9"
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
