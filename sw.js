// sw.js
const CACHE_NAME = 'ai-trader-saas-v1';
const urlsToCache = [
    '/',
    '/index.html',
    'https://cdn.jsdelivr.net/npm/apexcharts',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/webfonts/fa-solid-900.woff2',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return Promise.all(urlsToCache.map(async url => {
                    try {
                        const response = await fetch(url);
                        if (!response.ok) {
                            console.warn(`Failed to fetch ${url}: ${response.status}`);
                            return null; // Skip failed resource
                        }
                        return cache.put(url, response);
                    } catch (err) {
                        console.warn(`Error caching ${url}:`, err);
                        return null; // Skip failed resource
                    }
                })).then(() => self.skipWaiting());
            })
            .catch(err => console.error('Cache open failed:', err))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
            .catch(err => console.error('Fetch error:', err))
    );
});
