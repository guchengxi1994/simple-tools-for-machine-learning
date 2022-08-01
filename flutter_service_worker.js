'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "f272853721e51f8a35d6278071184256",
"main.dart.js_40.part.js": "2f75dff39871aa2ebdbbaf3108ce2f73",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_4.part.js": "abe3bdfce55415a76dc9468078707c02",
"main.dart.js_27.part.js": "4d07df6a928452827c904d985530d52a",
"main.dart.js_2.part.js": "574a700cf3f94f05066bce57a07e4a86",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "f2d3671afa5736e1ffce3da0a7beac52",
"main.dart.js_32.part.js": "a6d96fd475aa6caafc40e9689b5087b6",
"main.dart.js_3.part.js": "f1dcd30001ce020d63e95be7b669295f",
"main.dart.js_37.part.js": "54b1880d33ac3ff7f019b519680169db",
"main.dart.js_31.part.js": "9959055f47081f3e80edb01c9783f988",
"main.dart.js_21.part.js": "d0373fd9399669b98f01b4525949c389",
"main.dart.js_24.part.js": "6d006043736f18523c29e023e139710e",
"main.dart.js_23.part.js": "6570d5aa975c84f8a41ceb5b3da39acd",
"main.dart.js_26.part.js": "c5306cadab1e9a2bc41b7815679a4348",
"main.dart.js_30.part.js": "df3662984951a900d228cee0929dfc9a",
"main.dart.js_29.part.js": "a87abfbe87f0929cc0db7a479460cb78",
"main.dart.js_33.part.js": "24ff4f96f0dfc6f12ef4b0ab5c5ae7b9",
"main.dart.js_38.part.js": "eee7cffccf0fcf74f313c18e769324cc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "4c2f273a5aa757279da83ceaa927bfd6",
"main.dart.js": "872289db0b75d7dea7b1ae49c2d873ca",
"main.dart.js_25.part.js": "ec949532404497230350a0f3545184bd",
"main.dart.js_14.part.js": "173ffaa0a4baeba0ddd5811f39a89afc",
"main.dart.js_1.part.js": "e63314a8e35d69734df27ac52f9cc24c",
"main.dart.js_9.part.js": "5ed7abe4d00df5d751d570ac5482761c",
"main.dart.js_19.part.js": "113a9810f7258da873fb6b47d8a42f0b",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"version.json": "a045ff7d48b2345cffd555408e1cc4c6",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "3dedb8a38565388fbeaad282c4d5a580",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_8.part.js": "225b1ca0c22263c39c224ae07124643b",
"main.dart.js_5.part.js": "10df111d03e9a53857c4c5cd8a409d89",
"main.dart.js_16.part.js": "b3fe159418935bc08b05974af8fd0732",
"main.dart.js_17.part.js": "230376c9f9d78a3b026265b0917028d2",
"main.dart.js_34.part.js": "01123178cd151dace71c9f1424ca1044",
"main.dart.js_39.part.js": "96145b8c9db17ef5818bac62ee83099b",
"main.dart.js_13.part.js": "8d0d6ee24fa710f22fb639b28eeda9f2",
"main.dart.js_7.part.js": "3c62a2046715a6601f8b545b3997f6e8",
"main.dart.js_41.part.js": "f32ed06448aa112bf3705808db62d6d1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "62353bd8c67bef2a709cf1308ce464ec",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"main.dart.js_10.part.js": "3a7eea02e565e543346e0dbb1a0f2019",
"main.dart.js_18.part.js": "656d0706548ecc5a60bf6ff79b9bfa7a",
"main.dart.js_6.part.js": "8a45e65467db79d4179c9297b5ec42e8",
"main.dart.js_11.part.js": "538d2b2a0d44b446968478d12fe39a5b"
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
