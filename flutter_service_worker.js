'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "3e6ff3b96ab7be0efdc8b1e97a8836c9",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_4.part.js": "10182ee2e49e830891832353c973a306",
"main.dart.js_27.part.js": "e3043b6fc9c59b086ac28768987363ba",
"main.dart.js_2.part.js": "c793bc76ea51705dd23f5ab3f16486f3",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "7747e82f371be5004e6778c4baddc108",
"main.dart.js_32.part.js": "7928e21a332b4140efc8497142353662",
"main.dart.js_3.part.js": "7a494d67e4bb68c6c2facd4f67e6f963",
"main.dart.js_37.part.js": "bee53be1f746860d62db1214bf70a5f1",
"main.dart.js_31.part.js": "cbc2806bfcd5c307c2463a88c30e9819",
"main.dart.js_24.part.js": "974c3552ba6462c2b6b8971ddcdd36d5",
"main.dart.js_23.part.js": "bb1700782d20b495275016203c96adf7",
"main.dart.js_26.part.js": "d124a98fc58280ef1d5c49a4355a13db",
"main.dart.js_30.part.js": "95d8101b2369f4da530e4c55fbdcbfc9",
"main.dart.js_33.part.js": "ef9db270fa1532293b930f32e370ed50",
"main.dart.js_38.part.js": "c7085b3b6ba71406e827b52cce644d13",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "063b22575f597d1bac732d5577a07db4",
"main.dart.js": "76db117634ce77cf4aa9db22c248f512",
"main.dart.js_25.part.js": "b954a5a05e0a5ca193c40188b156e185",
"main.dart.js_14.part.js": "00f123bfc976c23fab921663d2b8d865",
"main.dart.js_1.part.js": "55100beb3c5ea5276b1e585c56227d17",
"main.dart.js_9.part.js": "2fe2ee5a5967d2debff92daa9e5775cb",
"main.dart.js_19.part.js": "44c274e0c9ef25943c0195865a549f60",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"version.json": "9165cc7c9e43faefff5049a314fe398e",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "ba8ba688747a3ded9adf29206b4583c0",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_15.part.js": "5b61ebd31d8c50904698734d944ec9ee",
"main.dart.js_8.part.js": "fa7e9f28e431ced49ee7f0e1b0e16c29",
"main.dart.js_5.part.js": "97ef9114e8bb3b3d1854e20f09d11cd6",
"main.dart.js_20.part.js": "38b9bbe0ecf9acbea3c4ab364bba9a1c",
"main.dart.js_17.part.js": "5d904badd9f441ae87bfe0e757d021a3",
"main.dart.js_34.part.js": "e6da70a0b0bbf8e4d41614d4cf7a3acf",
"main.dart.js_13.part.js": "3e49872a59312c09105ded0088f61a54",
"main.dart.js_7.part.js": "1f675ff88e9f508de63c6eddedfcd0bf",
"main.dart.js_28.part.js": "61a297c1bdc99d971b4ac960dc6e5f9d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "62353bd8c67bef2a709cf1308ce464ec",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"main.dart.js_10.part.js": "09e4a21ba5c4d2226c2159f2bcc80aa5",
"main.dart.js_18.part.js": "c78449b6229b2cdb5288fd4e1b3aada6",
"main.dart.js_6.part.js": "07ea3263c78adf435f92b048244e6dbc",
"main.dart.js_11.part.js": "de09c719c5ab1308551a7042fc1a0d18"
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
