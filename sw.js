const CACHE_NAME = 'hanzi-app-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  'https://unpkg.com/react@18/umd/react.development.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
  'https://unpkg.com/@babel/standalone/babel.min.js',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js',
  'https://cdn.jsdelivr.net/npm/cnchar/cnchar.min.js',
  'https://cdn.jsdelivr.net/npm/cnchar-poly/cnchar.poly.min.js',
  'https://cdn.jsdelivr.net/npm/cnchar-order/cnchar.order.min.js',
  'https://cdn.jsdelivr.net/npm/cnchar-trad/cnchar.trad.min.js',
  'https://cdn.jsdelivr.net/npm/cnchar-radical/cnchar.radical.min.js',
  'https://cdn.jsdelivr.net/npm/cnchar-words/cnchar.words.min.js',
  'https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Varela+Round&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});