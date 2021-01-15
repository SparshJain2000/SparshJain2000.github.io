importScripts("/cache-polyfill.js");

self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open("airhorner").then(function(cache) {
            return cache.addAll([
                "/",
                "/index.html",
                "/index.html?homescreen=1",
                "/assets/",
                "/assets/styles/main.min.css",
                "/assets/scripts/main.min.js",
                "/images/",
            ]);
        }),
    );
});