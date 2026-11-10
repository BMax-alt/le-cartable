// Le Cartable : ouverture sans réseau.
// La page de l'app et ses fichiers (polices, icônes) sont gardés sur l'iPad.
// La page passe par le réseau d'abord (la nouvelle version arrive toujours quand il y a du wifi),
// et la copie gardée ne sert que si le réseau ne répond pas.
// Le coffre (api.github.com) n'est jamais touché ici : paquets et progression ont leur propre mémoire.
const CACHE = "cartable-app-v1";
const FICHIERS = [
  "./", "index.html", "manifest.webmanifest",
  "icon.svg", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "apple-touch-icon-152.png", "apple-touch-icon-167.png",
  "fonts/andika-400-latin.woff2", "fonts/andika-400-latin-ext.woff2", "fonts/andika-700-latin.woff2", "fonts/andika-700-latin-ext.woff2",
  "fonts/grandstander-600-latin.woff2", "fonts/grandstander-600-latin-ext.woff2", "fonts/grandstander-800-latin.woff2", "fonts/grandstander-800-latin-ext.woff2"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith("cartable-app-") && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Réseau d'abord, avec un délai : au-delà, on sert la copie gardée.
function reseauDabord(req, cle, delai) {
  return new Promise(resolve => {
    let fini = false;
    const secours = () => caches.match(cle, { ignoreSearch: true }).then(r => { if (!fini && r) { fini = true; resolve(r); } });
    const t = setTimeout(secours, delai);
    fetch(req, { cache: "no-store" }).then(res => {
      clearTimeout(t);
      if (res.ok) { const copie = res.clone(); caches.open(CACHE).then(c => c.put(cle, copie)); }
      if (!fini) { fini = true; resolve(res); }
    }).catch(() => {
      clearTimeout(t);
      caches.match(cle, { ignoreSearch: true }).then(r => { if (!fini) { fini = true; resolve(r || Response.error()); } });
    });
  });
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // coffre GitHub, etc. : pas touché
  // La page de l'app (ouverture, ou vérification de version « ?v= ») : réseau d'abord.
  if (req.mode === "navigate" || url.pathname.endsWith("/index.html") || url.pathname.endsWith("/")) {
    // La vérification de version doit voir le réseau, jamais la copie : sans réseau elle échoue, c'est normal.
    if (url.searchParams.has("v")) return;
    e.respondWith(reseauDabord(req, "index.html", 4000));
    return;
  }
  // Polices, icônes, manifeste : la copie gardée d'abord, le réseau sinon.
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req)));
});
