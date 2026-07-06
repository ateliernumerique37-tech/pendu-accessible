# ❓ Pendu Accessible — PWA du jeu du pendu

Jeu du pendu en français, jouable en solo avec trois niveaux de difficulté, conçu en priorité pour être **jouable sans jamais voir l'écran**.

🔗 **Jouer** : https://ateliernumerique37-tech.github.io/pendu-accessible/

## Objectif du projet

Un jeu du pendu classique n'est pas seulement une grille et un dessin qui se
complète à chaque erreur — c'est un jeu qui repose entièrement sur un retour
visuel immédiat. La contrainte de départ ici était de rendre ce retour **100%
porté par le son et le texte** : chaque tentative de lettre annonce sa
correspondance et sa position, le nombre d'erreurs restantes est toujours dit
à voix haute, et rien d'important ne repose uniquement sur le dessin du pendu
qui, lui, reste purement décoratif.

Trois niveaux de difficulté, selon la longueur du mot à deviner :
- **Facile** : 4 à 5 lettres
- **Moyen** : 6 à 8 lettres
- **Difficile** : 9 à 14 lettres

## Stack technique

Volontairement minimaliste, sans framework :

- **HTML / CSS / JavaScript vanille**, modules ES bundlés avec `esbuild`
- **PWA** installable, service worker en stratégie *network-first* pour toujours charger la dernière version
- **Déploiement continu** sur GitHub Pages à chaque `push`
- Aucun compte, aucune donnée collectée, liste de mots entièrement embarquée (fonctionne hors-ligne une fois installée)

## Choix d'accessibilité

- **Doubles régions ARIA alternées** (`aria-live="polite"`) : une annonce est toujours relue par le lecteur d'écran, même identique à la précédente.
- **Comparaison des lettres insensible aux accents et à la casse** : proposer "e" trouve aussi bien "é" que "è" — la case affiche toujours la vraie orthographe du mot.
- **Cases du mot et lettres déjà tentées navigables individuellement au clavier**, chacune avec une description explicite ("Case 3, lettre M").
- **Gestion de focus explicite** en fin de partie, directement sur l'action suivante.
- **Messages d'encouragement** pensés pour ne pas saturer l'écoute : jalons factuels annoncés une seule fois, messages génériques limités à 30% des bonnes réponses.
- Respect de `prefers-reduced-motion`, prise en charge du mode sombre et du contraste élevé.

## Pour aller plus loin

Le détail technique complet est documenté dans [`CLAUDE.md`](./CLAUDE.md).
La démarche d'accessibilité est expliquée dans la [déclaration d'accessibilité](https://ateliernumerique37-tech.github.io/pendu-accessible/accessibilite.html) du site.

---

*Développé par Saifeddin Ayedi — coach en accessibilité numérique, Tours (37).*
