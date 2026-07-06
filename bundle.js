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
    "VIOLONCELLE"
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
  var MAX_ERRORS = 10;
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
      phase: "playing",
      // 'playing' | 'won' | 'lost'
      milestonesShown: /* @__PURE__ */ new Set()
      // 'half' | 'two-left'
    };
  }
  function getRemainingErrors(state2) {
    return MAX_ERRORS - state2.errors;
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
      const won = [...state2.uniqueLetters].every((l) => state2.foundLetters.has(l));
      if (won) state2.phase = "won";
    } else {
      state2.errors += 1;
      if (state2.errors >= MAX_ERRORS) state2.phase = "lost";
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
    renderErrors(state.errors, MAX_ERRORS);
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
