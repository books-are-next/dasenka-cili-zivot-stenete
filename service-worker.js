/* eslint-disable no-restricted-globals */

/* global self, caches, fetch */

const CACHE = 'cache-3831c02';

self.addEventListener('install', e => {
  e.waitUntil(precache()).then(() => self.skipWaiting());
});

self.addEventListener('activate', event => {
  self.clients
    .matchAll({
      includeUncontrolled: true,
    })
    .then(clientList => {
      const urls = clientList.map(client => client.url);
      console.log('[ServiceWorker] Matching clients:', urls.join(', '));
    });

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
            return null;
          })
        )
      )
      .then(() => {
        console.log('[ServiceWorker] Claiming clients for version', CACHE);
        return self.clients.claim();
      })
  );
});

function precache() {
  return caches.open(CACHE).then(cache => cache.addAll(["./","./colophon.html","./dasenka_cili_zivot_stenete_002.html","./dasenka_cili_zivot_stenete_005.html","./dasenka_cili_zivot_stenete_006.html","./dasenka_cili_zivot_stenete_007.html","./dasenka_cili_zivot_stenete_008.html","./dasenka_cili_zivot_stenete_009.html","./dasenka_cili_zivot_stenete_010.html","./dasenka_cili_zivot_stenete_011.html","./dasenka_cili_zivot_stenete_012.html","./dasenka_cili_zivot_stenete_013.html","./dasenka_cili_zivot_stenete_014.html","./dasenka_cili_zivot_stenete_015.html","./dasenka_cili_zivot_stenete_016.html","./dasenka_cili_zivot_stenete_017.html","./dasenka_cili_zivot_stenete_018.html","./dasenka_cili_zivot_stenete_019.html","./dasenka_cili_zivot_stenete_020.html","./dasenka_cili_zivot_stenete_021.html","./dasenka_cili_zivot_stenete_022.html","./dasenka_cili_zivot_stenete_023.html","./dasenka_cili_zivot_stenete_024.html","./dasenka_cili_zivot_stenete_025.html","./dasenka_cili_zivot_stenete_026.html","./dasenka_cili_zivot_stenete_027.html","./dasenka_cili_zivot_stenete_028.html","./dasenka_cili_zivot_stenete_029.html","./dasenka_cili_zivot_stenete_030.html","./dasenka_cili_zivot_stenete_031.html","./dasenka_cili_zivot_stenete_032.html","./dasenka_cili_zivot_stenete_033.html","./dasenka_cili_zivot_stenete_034.html","./dasenka_cili_zivot_stenete_035.html","./dasenka_cili_zivot_stenete_036.html","./dasenka_cili_zivot_stenete_037.html","./dasenka_cili_zivot_stenete_038.html","./dasenka_cili_zivot_stenete_039.html","./dasenka_cili_zivot_stenete_040.html","./dasenka_cili_zivot_stenete_041.html","./dasenka_cili_zivot_stenete_042.html","./dasenka_cili_zivot_stenete_043.html","./dasenka_cili_zivot_stenete_044.html","./dasenka_cili_zivot_stenete_045.html","./dasenka_cili_zivot_stenete_046.html","./dasenka_cili_zivot_stenete_047.html","./dasenka_cili_zivot_stenete_048.html","./dasenka_cili_zivot_stenete_049.html","./dasenka_cili_zivot_stenete_050.html","./dasenka_cili_zivot_stenete_051.html","./dasenka_cili_zivot_stenete_052.html","./dasenka_cili_zivot_stenete_053.html","./dasenka_cili_zivot_stenete_054.html","./dasenka_cili_zivot_stenete_055.html","./dasenka_cili_zivot_stenete_056.html","./dasenka_cili_zivot_stenete_057.html","./favicon.png","./index.html","./manifest.json","./fonts/Literata-Italic-var.woff2","./fonts/Literata-var.woff2","./fonts/LiterataTT-TextItalic.woff2","./fonts/LiterataTT-TextRegular.woff2","./fonts/LiterataTT-TextSemibold.woff2","./fonts/LiterataTT_LICENSE.txt","./fonts/SpaceGroteskVF.woff2","./fonts/SpaceGroteskVF_LICENSE.txt","./resources/dasenka_fotky_001.jpg","./resources/dasenka_fotky_002.jpg","./resources/dasenka_fotky_003.jpg","./resources/dasenka_fotky_004.jpg","./resources/dasenka_fotky_005.jpg","./resources/dasenka_fotky_006.jpg","./resources/dasenka_fotky_007.jpg","./resources/dasenka_fotky_008.jpg","./resources/dasenka_fotky_009.jpg","./resources/dasenka_fotky_010.jpg","./resources/dasenka_fotky_011.jpg","./resources/dasenka_fotky_012.jpg","./resources/dasenka_fotky_013.jpg","./resources/dasenka_fotky_014.jpg","./resources/dasenka_fotky_015.jpg","./resources/dasenka_fotky_016.jpg","./resources/dasenka_fotky_017.jpg","./resources/dasenka_fotky_018.jpg","./resources/dasenka_fotky_019.jpg","./resources/dasenka_fotky_020.jpg","./resources/dasenka_fotky_021.jpg","./resources/dasenka_fotky_022.jpg","./resources/dasenka_fotky_023.jpg","./resources/dasenka_fotky_024.jpg","./resources/dasenka_fotky_025.jpg","./resources/dasenka_fotky_026.jpg","./resources/dasenka_fotky_027.jpg","./resources/dasenka_fotky_028.jpg","./resources/dasenka_fotky_029.jpg","./resources/dasenka_fotky_030.jpg","./resources/dasenka_fotky_031.jpg","./resources/dasenka_ilustrace_001-300px.jpg","./resources/dasenka_ilustrace_002.jpg","./resources/dasenka_ilustrace_003.jpg","./resources/dasenka_ilustrace_004.jpg","./resources/dasenka_ilustrace_005.jpg","./resources/dasenka_ilustrace_006.jpg","./resources/dasenka_ilustrace_007.jpg","./resources/dasenka_ilustrace_008.jpg","./resources/dasenka_ilustrace_009.jpg","./resources/dasenka_ilustrace_010.jpg","./resources/dasenka_ilustrace_011.jpg","./resources/dasenka_ilustrace_012.jpg","./resources/dasenka_ilustrace_013.jpg","./resources/dasenka_ilustrace_014.jpg","./resources/dasenka_ilustrace_015.jpg","./resources/dasenka_ilustrace_016.jpg","./resources/dasenka_ilustrace_017.jpg","./resources/dasenka_ilustrace_018.jpg","./resources/dasenka_ilustrace_019.jpg","./resources/dasenka_ilustrace_020.jpg","./resources/dasenka_ilustrace_021.jpg","./resources/dasenka_ilustrace_022.jpg","./resources/dasenka_ilustrace_023.jpg","./resources/dasenka_ilustrace_024.jpg","./resources/dasenka_ilustrace_025.jpg","./resources/dasenka_ilustrace_026.jpg","./resources/dasenka_ilustrace_027.jpg","./resources/dasenka_ilustrace_028.jpg","./resources/dasenka_ilustrace_029.jpg","./resources/dasenka_ilustrace_030.jpg","./resources/dasenka_ilustrace_031.jpg","./resources/dasenka_ilustrace_032.jpg","./resources/dasenka_ilustrace_033.jpg","./resources/dasenka_ilustrace_034.jpg","./resources/dasenka_ilustrace_035.jpg","./resources/dasenka_ilustrace_036.jpg","./resources/dasenka_ilustrace_037.jpg","./resources/dasenka_ilustrace_038.jpg","./resources/dasenka_ilustrace_039-300px.jpg","./resources/dasenka_ilustrace_040.jpg","./resources/dasenka_ilustrace_041.jpg","./resources/dasenka_ilustrace_042-300px.jpg","./resources/dasenka_ilustrace_043-300px.jpg","./resources/dasenka_ilustrace_044.jpg","./resources/dasenka_ilustrace_045.jpg","./resources/dasenka_ilustrace_046.jpg","./resources/dasenka_ilustrace_047.jpg","./resources/dasenka_ilustrace_048.jpg","./resources/dasenka_ilustrace_049.jpg","./resources/dasenka_ilustrace_050.jpg","./resources/dasenka_ilustrace_051.jpg","./resources/dasenka_ilustrace_052.jpg","./resources/dasenka_ilustrace_053.jpg","./resources/dasenka_ilustrace_054.jpg","./resources/dasenka_ilustrace_055.jpg","./resources/dasenka_ilustrace_056.jpg","./resources/image001.jpg","./resources/image002.jpg","./resources/image003.png","./resources/obalka.jpg","./resources/upoutavka_eknihy.jpg","./scripts/bundle.js","./style/style.min.css","./template-images/circles.png"]));
}

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache => {
      return cache.match(e.request).then(matching => {
        if (matching) {
          console.log('[ServiceWorker] Serving file from cache.');
          console.log(e.request);
          return matching;
        }

        return fetch(e.request);
      });
    })
  );
});
