# ❓ Pendu Accessible — PWA du jeu du pendu

Jeu du pendu en français, jouable en solo avec trois niveaux de difficulté, conçu en priorité pour être **jouable sans jamais voir l'écran**.

🔗 **Jouer** : https://ateliernumerique37-tech.github.io/pendu-accessible/
🔗 **Voir mes autres projets** : https://ateliernumerique37-tech.github.io/hub-numerique/

## Objectif du projet

Un jeu du pendu classique n'est pas seulement une grille et un dessin qui se
complète à chaque erreur — c'est un jeu qui repose entièrement sur un retour
visuel immédiat. La contrainte de départ ici était de rendre ce retour **100%
porté par le son et le texte** : chaque tentative de lettre annonce sa
correspondance et sa position, le nombre d'erreurs restantes est toujours dit
à voix haute, et rien d'important ne repose uniquement sur le dessin du pendu
qui, lui, reste purement décoratif.

Le compteur d'erreurs n'est pas un total figé sur toute la partie : il repart
à zéro à chaque bonne lettre trouvée. Seule une **série d'erreurs d'affilée**
fait perdre, ce qui reste cohérent quel que soit le nombre de lettres à
trouver dans le mot.

Trois niveaux de difficulté, selon la longueur du mot à deviner et la
tolérance aux erreurs d'affilée :
- **Facile** : 4 à 5 lettres, 6 erreurs d'affilée autorisées
- **Moyen** : 6 à 8 lettres, 8 erreurs d'affilée autorisées
- **Difficile** : 9 à 14 lettres, 10 erreurs d'affilée autorisées

## Stack technique

Volontairement minimaliste, sans framework :

- **HTML / CSS / JavaScript vanille**, modules ES bundlés avec `esbuild`
- **PWA** installable, service worker en stratégie *network-first* pour toujours charger la dernière version
- **Déploiement continu** sur GitHub Pages à chaque `push`
- Aucun compte, aucune donnée personnelle collectée, liste de mots entièrement embarquée (fonctionne hors-ligne une fois installée)
- **Statistiques publiques** (page dédiée) : seul le nombre de parties jouées par jour est enregistré, de façon anonyme, pour calculer des moyennes par jour/semaine/mois/an

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
