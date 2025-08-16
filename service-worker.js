const CACHE_NAME = 'sj-store-cache-v2';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  'https://raw.githubusercontent.com/simojibou/logo/refs/heads/main/logo.PNG',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js',
];

self.addEventListener('install', e => {
  console.log('Service Worker Installing...');
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  console.log('Service Worker Activated');
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const requestUrl = new URL(e.request.url);

  // Dynamic caching for Firebase data/images
  if (requestUrl.origin.includes('firebaseio.com') || requestUrl.origin.includes('gstatic.com')) {
    e.respondWith(
      fetch(e.request)
        .then(networkResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(e.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request).then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(e.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => {
        if (e.request.destination === 'image') {
          return caches.match('https://raw.githubusercontent.com/simojibou/logo/refs/heads/main/logo.PNG');
        }
      });
    })
  );
});
