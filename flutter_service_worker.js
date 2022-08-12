'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "4a25cf18d48e4637fc5c920a11296e87",
"main.dart.js_87.part.js": "315aa9191a0d1c366e342fd60780dfcd",
"main.dart.js_40.part.js": "85bde34d28a670e6ea10ef746e46e634",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_67.part.js": "738dc4220337b0f8250c0d3a1fbe04be",
"main.dart.js_4.part.js": "6e78b866cb1c6a0687994a1f610cf1e1",
"main.dart.js_74.part.js": "11a0fd205f20c291c60335c53f91b2c7",
"main.dart.js_68.part.js": "aaef86365b9c96335e8316f24d243caa",
"main.dart.js_27.part.js": "897c6122b68d1b74923f7d97bb9d7363",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_47.part.js": "a518b832e4f5e11ec301304f114dcc74",
"main.dart.js_63.part.js": "35c38c168fe2765ac41c435d6d38c3ff",
"main.dart.js_62.part.js": "06191ec7e691fa3c90b870713d2b168c",
"main.dart.js_32.part.js": "2ab5f3c799cf38a51d6ce6f8e4be1721",
"main.dart.js_59.part.js": "a81f09662b060c482a2280b5439b9a8e",
"main.dart.js_85.part.js": "f0adcfb580eb43d142f6e08649853de7",
"main.dart.js_3.part.js": "7f30567bc949acea2f6caf7a2891aa6c",
"main.dart.js_50.part.js": "c40338c726fddef886c5845e57a257f6",
"main.dart.js_37.part.js": "ad03e13a20beb5668de200352039a7c2",
"main.dart.js_90.part.js": "95473feb7695d4d820dfc774a240db60",
"main.dart.js_58.part.js": "eac06e5dae8c9d4e9764b0bae7712db7",
"main.dart.js_48.part.js": "e9e7f90d87767ddbf2ec20ea96b90d30",
"main.dart.js_31.part.js": "1f76d24b2eedaaa0fc06f5d130b56c15",
"main.dart.js_44.part.js": "84ff59614848fcd3be9edbfda84f5bf8",
"main.dart.js_86.part.js": "a858269d12758c174e395f2168e41b8d",
"main.dart.js_70.part.js": "c86699bf9985febc55b7d921a40fcb23",
"main.dart.js_24.part.js": "3f13cf0f0ce131c18f5f46464ddc942a",
"main.dart.js_98.part.js": "d12ab4baf5a6b5409bec00e35a8a0325",
"main.dart.js_26.part.js": "e46ce0814f13ab7580435a8503fd145e",
"main.dart.js_57.part.js": "84c8a9ddbf138ebedb034ca8ce6015da",
"main.dart.js_66.part.js": "410fdb9f9d2c6d80a94f0b764739d39a",
"main.dart.js_29.part.js": "88e285b7c3be6d11812934d095a25192",
"main.dart.js_33.part.js": "91767aa047914f5cb044012dff779f57",
"main.dart.js_38.part.js": "492f77deabc08a8e344f05b949d72826",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "238300cd64e1fcbe28cc084c3d871af5",
"main.dart.js_54.part.js": "23fe24d6e80dbd73eee671475f970f25",
"main.dart.js": "db4a90163430347370a63eae397b8bf3",
"main.dart.js_73.part.js": "eca2189347072b7cc8c75d8572aa765d",
"main.dart.js_25.part.js": "a48e636f53b7fdeaaa0efaa6a301dcaa",
"main.dart.js_78.part.js": "8db894706b64d0a1a6314b3ff8c3d2cd",
"main.dart.js_14.part.js": "9fc1b21989301986151c2e82e6a20980",
"main.dart.js_1.part.js": "a110cb6e9fe724c802e2e1267d95605b",
"main.dart.js_75.part.js": "8eb0c6eaa213ab1fd9b824d9986795cd",
"main.dart.js_9.part.js": "f3adbe8de687cd692aefbf6a0a10eef8",
"main.dart.js_19.part.js": "369c3c1c17e57d936ede9b8f19635f54",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "f7b9d62f7e372429fa9274082d90ccb9",
"main.dart.js_43.part.js": "aa13c4b309313ee64a278edd9163c7d9",
"version.json": "20ffc0dbef4f50ca5816bfaa39d13715",
"main.dart.js_42.part.js": "84d824508892c1ae4701d4a234535f17",
"main.dart.js_52.part.js": "7944499365feb3edae6ab1eec35af39d",
"main.dart.js_56.part.js": "8cc4769aa2a29ac61bcf2b52257bc693",
"main.dart.js_79.part.js": "bca685b0e7e5551e22422f2fdb76e480",
"main.dart.js_55.part.js": "4a9165177f9e86424f5a71de2ea179fa",
"main.dart.js_53.part.js": "6c62f047c6c766437e252b67a6120bc5",
"main.dart.js_72.part.js": "d00f7de4f228d97121e395f6d500dd5b",
"main.dart.js_89.part.js": "5852947ed894c59644c6b29bbaf020c5",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_91.part.js": "57ef12d0aaa5b6b22d4f27892c4cdd7e",
"main.dart.js_36.part.js": "69d3a6d6985d3ad888f1d3eee14d7736",
"main.dart.js_69.part.js": "9b1f431f7da163f11b8c8f11ec10cff1",
"main.dart.js_49.part.js": "42a3d55165216a8fe7f41f0e8785ee1d",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_15.part.js": "0fe0c7c2d46c367e6e38b75ac33e3e6e",
"main.dart.js_92.part.js": "38d833bb6184b92fa59a895edd3bf0f7",
"main.dart.js_8.part.js": "61e52d59ffaf4ed4728bc1a7a2f13a6b",
"main.dart.js_5.part.js": "8495425d49d9518b248d67e764d036eb",
"main.dart.js_16.part.js": "cb7f173ca7266bd959ddedb236b47c48",
"main.dart.js_64.part.js": "5b68865778a588e2fdc4ae75cd4ca1b9",
"main.dart.js_34.part.js": "6ce7b00f8b265ec2e1ad7ce4fb254431",
"main.dart.js_39.part.js": "b69f0329e576466fa5845bed66af770e",
"main.dart.js_13.part.js": "f607daa6162bcf5917bd72b646528720",
"main.dart.js_61.part.js": "7ff07c173a6941be4e2e6372861a2174",
"main.dart.js_71.part.js": "32487c905c26892ac8dec84d4cba28e8",
"main.dart.js_65.part.js": "52382bc1514e383469ce823de0a5aa0a",
"main.dart.js_76.part.js": "564ec104a10bf50b80fd19b5f425ed6e",
"main.dart.js_60.part.js": "0d238f78c36a55f1866650b857cf47b4",
"main.dart.js_7.part.js": "d3430e92fc77f9b1096d114e6db36603",
"main.dart.js_28.part.js": "7f0360aa43e6f5e344e24722c9aaa438",
"main.dart.js_41.part.js": "de1490c3a0ee6856920fab83ef05c0ad",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "fd4082173963fec73976c21509d157e0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"main.dart.js_97.part.js": "7d2154252648095236b1e0b7147dab77",
"main.dart.js_94.part.js": "6451028b37f27b9a7047318fc3712ce0",
"main.dart.js_10.part.js": "bc831a4990ffacd323af9b03635e1784",
"main.dart.js_77.part.js": "01c9a809d0b334e7fb1a2f0c4dd219ff",
"main.dart.js_95.part.js": "769fc64f1ed717ddaca569342192d1ef",
"main.dart.js_96.part.js": "40b1c4e1a71736e6bd3a2359cedb2161",
"main.dart.js_6.part.js": "66c249748b8494303fa076920ee8689e",
"main.dart.js_46.part.js": "979159f428214d81842541915e52a63a",
"main.dart.js_11.part.js": "9c2543747aab23e06daa46b347fbecb1",
"main.dart.js_88.part.js": "88315d9a4de0fcf57ff895f0629758ff",
"main.dart.js_93.part.js": "b160bdf16eeda78f5c970cefb471f7ee"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
