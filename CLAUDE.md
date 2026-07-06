# Pendu Accessible — Documentation projet pour Claude

## Vue d'ensemble

PWA du jeu du pendu en français, jouable en solo.
Conçue en priorité pour les **utilisateurs non-voyants** : l'accessibilité au
lecteur d'écran est la contrainte n°1, non négociable (objectif RGAA/WCAG).

- **Technologie** : HTML/CSS/JS vanille, aucun framework
- **Modules** : ES Modules dans `js/`, bundlés avec esbuild → `bundle.js`
- **Mode de jeu** : solo, 3 difficultés selon la longueur du mot
- **Déploiement** : GitHub Pages (branche `master`), auto-deploy à chaque push
- **URL de production** : `https://ateliernumerique37-tech.github.io/pendu-accessible/`
- **Le repo doit rester public** — GitHub Pages gratuit ne fonctionne qu'avec les repos publics

Ce projet réutilise délibérément les conventions du projet **Petits Chevaux**
(`../petits-chevaux`, même compte GitHub) : structure de fichiers, système
d'annonces ARIA à double région, stratégie de service worker network-first,
blocs SEO/GEO. Voir ce projet en référence en cas de doute sur un pattern.

---

## Structure des fichiers

```
pendu-accessible/
├── index.html          # Écran de difficulté + jeu + fin de partie
├── regles.html         # Règles du jeu (page statique classique)
├── accessibilite.html  # Déclaration d'accessibilité RGAA
├── 404.html            # Page 404 (chemins absolus /pendu-accessible/...)
├── style.css            # Feuille de style unique (dark mode, high contrast, reduced motion)
├── manifest.json         # PWA manifest (icône SVG inline)
├── service-worker.js     # Cache offline, stratégie network-first
├── bundle.js              # Artefact de build (NE PAS éditer directement)
├── robots.txt / sitemap.xml
├── og-image.svg / og-image.png  # Image de partage 1200×630 (svg = source, non précaché)
├── .nojekyll
└── js/                   # Sources ES Modules (seul main.js committé, reste gitignoré)
    ├── main.js           # Orchestrateur — cycle de partie, init des écrans
    ├── game.js           # Logique pure du jeu (aucun DOM)
    ├── ui.js             # Écrans, annonces ARIA, rendu des cases/lettres tentées
    └── words.js          # Liste de mots + normalisation accents + tirage
```

> **Règle Git** : seuls `bundle.js` et `js/main.js` sont commités. `game.js`,
> `ui.js`, `words.js` sont dans `.gitignore` (bundlés dans `bundle.js`), comme
> pour petits-chevaux.

---

## Build

```bash
cd Projets/pendu-accessible
npx esbuild js/main.js --bundle --outfile=bundle.js --format=iife --platform=browser
```

À faire **après chaque modification** d'un fichier `js/`. Bundle ~16 kb (IIFE, non minifié).

---

## Architecture JS

### `js/words.js` — Données et tirage

- `ALL_WORDS` : ~340 noms communs français (pas de noms propres, pas de mots
  composés à espace/trait d'union, pas de ligatures œ/æ — remplacées par "oe"/"ae"
  pour rester compatibles avec `normalize()`).
- **Le classement par difficulté n'est pas figé à l'écriture** : `poolForDifficulty()`
  filtre dynamiquement `ALL_WORDS` par longueur réelle (`word.length`). Évite tout
  risque d'erreur de comptage manuel lors de l'ajout de nouveaux mots.
- `DIFFICULTIES` : `facile` (4-5), `moyen` (6-8), `difficile` (9-14) — tranches disjointes.
- `normalize(str)` : `NFD` + suppression des diacritiques (`̀-ͯ`) + majuscule.
  Utilisée pour comparer la saisie aux lettres du mot, insensible aux accents/casse.
  **N'affecte jamais l'affichage** : la case révélée montre toujours la vraie lettre
  accentuée du mot d'origine (`state.word`, jamais `state.normalizedWord`).
- `pickWord(difficulty, avoidWord)` : tire un mot au hasard, évite de reproposer
  immédiatement le mot précédent quand le pool le permet.

Distribution actuelle (vérifiée par script) : 89 mots facile, 181 moyen, 70 difficile.

### `js/game.js` — Logique pure (zéro DOM)

- `createGame(difficulty, avoidWord)` → état complet (voir ci-dessous)
- `guessLetter(state, rawLetter)` → mute l'état, retourne un résultat décrivant
  ce qui vient de se passer (pour que `ui.js` construise l'annonce)
- `getBoxes(state)` → représentation des cases (révélée ou vide)
- `MAX_ERRORS_BY_DIFFICULTY = { facile: 6, moyen: 8, difficile: 10 }`

**État du jeu :**
```js
{
  difficulty, word, normalizedWord,
  uniqueLetters,      // Set des lettres normalisées uniques du mot
  foundLetters,       // Set des lettres normalisées trouvées
  triedLetters,       // [{ letter, hit }] dans l'ordre de saisie
  errors,             // erreurs CONSÉCUTIVES depuis la dernière bonne lettre — remis à 0 sur un hit
  maxErrors,          // MAX_ERRORS_BY_DIFFICULTY[difficulty], figé à la création de la partie
  phase,              // 'playing' | 'won' | 'lost'
  milestonesShown,    // Set('half' | 'two-left') — jamais répétés
}
```

> ⚠️ **`errors` n'est PAS un total cumulé sur toute la partie** — c'est une
> série d'erreurs sans succès entre elles. Chaque lettre trouvée remet le
> compteur à 0 (`guessLetter`, branche `hit`). La défaite survient quand cette
> série atteint `state.maxErrors`, qui dépend de la difficulté (6/8/10) et non
> d'une constante globale unique. Décision utilisateur : avec un total cumulé
> fixe, un mot avec beaucoup de lettres rares serait quasi impossible à
> trouver ; remettre le compteur à zéro à chaque succès et faire varier le
> seuil par difficulté est plus cohérent avec la longueur du mot à deviner.

**Jalons d'encouragement (`checkMilestone`)** : détectés par **transition**
(comparaison avant/après la tentative), jamais par simple état statique — ça
évite qu'un mot à peu de lettres uniques déclenche un jalon dès la première
tentative ou le confonde avec la victoire. Priorité : `two-left` > `half`.
Un jalon ne se déclenche que si `state.phase === 'playing'` après la tentative
(pas de jalon redondant avec l'annonce de victoire).

**Une lettre déjà tentée** (`guessLetter` retourne `{ alreadyTried: true }`)
ne mute jamais l'état (pas de double comptage, pas de doublon dans `triedLetters`).

### `js/ui.js` — Couche UI et accessibilité

**Annonces ARIA — dual live regions**, pattern identique à petits-chevaux :
```js
// index.html
<div id="aria-status-a" role="status" aria-live="polite" aria-atomic="true" class="sr-only"></div>
<div id="aria-status-b" role="status" aria-live="polite" aria-atomic="true" class="sr-only"></div>
<div id="aria-alert"    role="alert"  aria-live="assertive" aria-atomic="true" class="sr-only"></div>
```
`announce()` alterne entre les deux régions polite (un lecteur d'écran ignore
une annonce identique à la précédente dans la même région) ; `announce(msg, true)`
utilise la région assertive pour victoire/défaite.

**Construction du message de tentative** (`announceGuessResult`) :
- Déjà tentée → `"Vous avez déjà proposé la lettre X."`
- Correspondance → `"Lettre X : correspondance en case(s) N[, N...]."` + encouragement
- Aucune correspondance → `"Lettre X : aucune correspondance. Il reste N essai(s)."` (accord singulier/pluriel)

**Encouragements (`buildEncouragement`)** — priorité stricte, jamais les deux à la fois :
1. Jalon factuel (`two-left`/`half`) si présent ce tour → phrase piochée dans un petit pool de variantes
2. Sinon, 30% de chance d'ajouter un encouragement générique aléatoire
3. Jamais sur une tentative ratée (pas d'encouragement sur une erreur)

**Cases du mot et lettres tentées** : chaque item est un `<span tabindex="0">`
individuellement focusable (choix explicite de l'utilisateur — à revoir vers un
pattern à tabindex géré si ça s'avère pénible en difficile avec beaucoup de lettres).

**Fin de partie** : le focus va directement sur le bouton "Nouveau mot" plutôt
que sur le titre de l'écran, pour éviter une annonce redondante avec l'alerte
assertive déjà émise. Un second bouton "Retour à l'accueil et changer de
difficulté" (`btn-change-difficulty`) ramène à l'écran de choix de difficulté
(`onChangeDifficulty` dans `main.js`, remet `state` à `null`).

**Dessin du pendu (SVG, décoratif)** : 10 `.stage` fixes dans le HTML (potence :
sol, poteau, poutre, corde + personnage : tête, torse, 2 bras, 2 jambes).
`renderErrors(errors, maxErrors)` révèle les `errors` premières étapes — comme
`errors` repart à 0 à chaque bonne lettre, le dessin **se réinitialise
visuellement dès qu'une lettre est trouvée**, ce qui renforce le message "vous
avez repris de la marge". En facile/moyen (`maxErrors` 6/8), les dernières
étapes du gabarit à 10 ne sont simplement jamais atteintes — pas besoin de
prévoir un SVG différent par difficulté.

### `js/main.js` — Orchestrateur

```
DOMContentLoaded → showScreen('difficulty') → initDifficultyScreen(startGame)
startGame(difficulty) → createGame → renderAll → showScreen('game') → focus input
onGuess(letter) → guessLetter → renderAll
  → phase 'won'/'lost' : announce assertive + showEndScreen (skip l'annonce normale)
  → sinon : announceGuessResult (annonce polite normale)
onNewWord() → startGame(state.difficulty, state.word)  // même difficulté, évite le mot précédent
```

---

## Accessibilité — règles à ne pas casser

1. Ne jamais annoncer un résultat de victoire/défaite ET l'annonce normale de
   tentative pour la même action — l'un exclut l'autre (voir `onGuess` dans `main.js`).
2. Un jalon d'encouragement ne se déclenche qu'une fois par partie (`milestonesShown`).
3. Jamais d'encouragement sur une lettre qui ne correspond pas.
4. `guessLetter` sur une lettre déjà tentée ne mute jamais l'état (idempotent).
5. Étiquettes de boutons = texte visible, pas d'`aria-label` redondant (WCAG 2.5.3).
6. `[hidden] { display: none !important; }`, `.sr-only` conforme, `prefers-reduced-motion`
   et `prefers-contrast: more` pris en charge dans `style.css`.
7. Le dessin du pendu (SVG) est **décoratif uniquement** (`aria-hidden="true"`) —
   l'info réelle (nombre d'erreurs) passe toujours par le texte visible + l'annonce.

### Limite connue des tests automatisés en environnement headless

Le pattern `announce()` utilise `requestAnimationFrame` pour forcer une double
mutation du DOM (clear puis set) — technique éprouvée pour fiabiliser la lecture
par les lecteurs d'écran. **En Chrome headless, `document.visibilityState` reste
`'hidden'` en permanence et `requestAnimationFrame` ne se déclenche jamais**,
ce qui empêche de vérifier le contenu exact des annonces via un test automatisé
dans cet environnement (confirmé : 0 déclenchement en 5s d'attente active). Ce
n'est pas un bug de l'app — la logique de construction des messages a été
vérifiée unitairement (Node, DOM/rAF simulés) et le comportement du DOM (cases,
lettres tentées, focus, écrans) a été vérifié dans un vrai navigateur. **Un test
manuel NVDA + Firefox reste nécessaire** avant de considérer la conformité RGAA acquise.

---

## PWA et déploiement

### Service Worker

Stratégie **network-first** pour le cœur de l'app (HTML/CSS/JS/manifest),
identique à petits-chevaux v18+ : garantit que la dernière version déployée est
toujours chargée quand l'appareil est en ligne, sans dépendre du bump manuel de
`CACHE`. Version actuelle : `pendu-accessible-v1`.

### GitHub Pages

- Branche `master`, déploiement automatique à chaque push
- `.nojekyll` à la racine (site statique fait main)

**Mise en place initiale du repo + Pages (fait une seule fois)** :
```bash
gh repo create ateliernumerique37-tech/pendu-accessible --public --source=. --remote=origin --push
gh api -X POST repos/ateliernumerique37-tech/pendu-accessible/pages \
  -f "build_type=legacy" -f "source[branch]=master" -f "source[path]=/"
```
Vérifier le build : `gh api repos/ateliernumerique37-tech/pendu-accessible/pages/builds/latest`.

---

## SEO — référencement classique et moteurs IA

Mêmes principes que petits-chevaux (voir son `CLAUDE.md` pour le détail du
constat SPA / robots IA qui n'exécutent pas le JS) :
- `<noscript>` avec contenu réel + lien vers les règles
- JSON-LD `schema.org/Game` avec `accessibilityFeature`/`accessibilityControl`/`accessibilityHazard`
- Meta title/description orientés recherche, canonical, Open Graph + Twitter Card
- `regles.html` et `accessibilite.html` : pages statiques classiques indexables,
  chacune avec ses propres meta/OG/JSON-LD (`Article`)
- `robots.txt` : `Allow: /` explicite pour tous les user-agents (y compris robots IA)
- `sitemap.xml` sans `<lastmod>` figé (GitHub Pages fournit un `Last-Modified` HTTP fiable)
- `og-image.png` généré depuis `og-image.svg` via `npx sharp-cli -i og-image.svg -o og-image.png resize 1200 630`

### Déclaration d'accessibilité — ne pas sur-déclarer

`accessibilite.html` présente le site comme **auto-évalué selon les critères
RGAA/WCAG pendant le développement**, PAS comme officiellement audité/certifié
conforme RGAA (aucun audit formel 109 critères n'a été réalisé par un tiers).
Ne jamais faire dire à cette page "conformité totale RGAA" sans qu'un audit
réel ait eu lieu — ce serait une fausse déclaration.

---

## Mots — maintenance de la liste

Pour ajouter des mots : les insérer simplement dans `ALL_WORDS` (`js/words.js`),
n'importe où, sans se soucier de leur longueur — le classement par difficulté
est recalculé dynamiquement. Contraintes à respecter pour chaque entrée :
- Un seul mot, en majuscules, sans espace ni trait d'union
- Pas de ligature œ/æ (écrire "oe"/"ae")
- Pas de nom propre
- Après ajout, valider avec :
```bash
node --input-type=module -e "
import { ALL_WORDS, poolForDifficulty } from './js/words.js';
console.log('total', ALL_WORDS.length);
console.log('doublons', ALL_WORDS.filter((w,i)=>ALL_WORDS.indexOf(w)!==i));
for (const d of ['facile','moyen','difficile']) console.log(d, poolForDifficulty(d).length);
"
```

---

## Commandes utiles

```bash
# Rebuilder le bundle après modification d'un fichier js/
npx esbuild js/main.js --bundle --outfile=bundle.js --format=iife --platform=browser

# Committer et déployer
git add bundle.js js/main.js [autres fichiers modifiés]
git commit -m "description"
git push origin master

# Surveiller le déploiement
gh run list --repo ateliernumerique37-tech/pendu-accessible

# Régénérer l'image OG après modification du SVG source
npx sharp-cli -i og-image.svg -o og-image.png resize 1200 630
```
