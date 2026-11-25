/* RAILBREAKER service worker. Bump CACHE to invalidate everything. */
const CACHE = 'railbreaker-v3';
const SCENERY = ['spire', 'mesa', 'tower', 'smelter', 'load', 'stack'];
const MODELS = ['hero', 'boss', 'drone', 'turret', 'bulwark', 'roller', 'claw', ...SCENERY].flatMap((n) => ['./models/' + n + '.rbm', './models/' + n + '.webp'])
  .concat(SCENERY.map((n) => './models/' + n + '-lo.rbm'));
const PRECACHE = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', ...MODELS];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.allSettled(PRECACHE.map((url) => cache.add(url))),
    ).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

function cacheable(res) {
  return res && res.status === 200 && res.type !== 'opaque';
}

async function put(request, res) {
  if (!cacheable(res)) return;
  const cache = await caches.open(CACHE);
  await cache.put(request, res);
}

async function networkFirst(request, fallbackUrl) {
  try {
    const res = await fetch(request);
    if (cacheable(res)) put(request, res.clone()).catch(() => {});
    return res;
  } catch (err) {
    const hit = (await caches.match(request)) || (fallbackUrl ? await caches.match(fallbackUrl) : undefined);
    if (hit) return hit;
    throw err;
  }
}

async function staleWhileRevalidate(event) {
  const request = event.request;
  const hit = await caches.match(request);
  const refresh = fetch(request)
    .then((res) => { if (cacheable(res)) return put(request, res.clone()).then(() => res); return res; })
    .catch(() => undefined);
  if (hit) {
    event.waitUntil(refresh);
    return hit;
  }
  const res = await refresh;
  return res || Response.error();
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, './index.html'));
    return;
  }
  if (url.pathname.endsWith('/hotfix.override.json')) {
    event.respondWith(networkFirst(request, null));
    return;
  }
  event.respondWith(staleWhileRevalidate(event));
});
