const CACHE = 'static-cache';

const ASSETS = [
    '/index.html',
    '/favicon.png',
    '/images/bg.webp',
    '/style.css',
    '/app.js'
];

self.addEventListener('install', () => {
    caches.open(CACHE).then(cache =>
        cache.addAll(ASSETS)
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, { ignoreVary: true }).then(response => {
            if (response) {
                return response;
            }
            else {
                return fetch(event.request).then(response => {
                    const clone = response.clone();
                    caches.open(CACHE).then(cache => {
                        cache.put(event.request, response);
                    });
                    return clone;
                });
            }
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.map(key =>
                    caches.delete(key)
                )
            )
        )
    );
}); 