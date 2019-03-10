let staticCacheName = 'restaurants-cache';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            return cache.addAll([
                '/',
                '/css/styles.css',
                '/css/main-responsive.css',
                '/css/restaurant-responsive.css',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
                '/data/restaurants.json',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/js/dbhelper.js',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
            ]);
        })
    )
})


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
})
