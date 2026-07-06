// Bump à chaque déploiement modifiant des fichiers statiques : utile pour
// purger les vieux caches, mais PLUS critique pour la fraîcheur grâce à la
// stratégie network-first ci-dessous (voir CLAUDE.md de petits-chevaux pour
// l'historique du bug que ça évite).
const CACHE = 'pendu-accessible-v1';

const ASSETS = [
  './',
  './index.html',
  './regles.html',
  './accessibilite.html',
  './style.css',
  './manifest.json',
  './bundle.js',
  './og-image.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(ASSETS.map(a => c.add(a))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Cœur de l'app : NETWORK-FIRST. Toujours la dernière version en ligne ;
  // le cache ne sert qu'en secours hors-ligne.
  e.respondWith(
    fetch(req)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      })
      .catch(() =>
        caches.match(req).then(cached => cached || caches.match('./index.html'))
      )
  );
});
