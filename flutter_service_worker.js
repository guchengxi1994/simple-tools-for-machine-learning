'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_4.part.js": "044d5484fec3ef16aa03ebaf0bb4bd74",
"main.dart.js_27.part.js": "f9c8b7e7dc916d66697c74bcd65b0574",
"main.dart.js_2.part.js": "a278c60d1f9bff2be92ce3575e4b7b20",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "e5b8fbafb31efcbe71a08186fe2377d3",
"main.dart.js_32.part.js": "e50317425949a1008082b1b39cce2a56",
"main.dart.js_3.part.js": "25d76c558ce3712474f25a1e19350934",
"main.dart.js_31.part.js": "15e4af8797f4eba9b4f9b2b4394d7c0e",
"main.dart.js_21.part.js": "1ad0ba82ecd1ba84ca0520ca1f85e79f",
"main.dart.js_23.part.js": "f1eae7b8357f24fd81d2c87fd47fb553",
"main.dart.js_26.part.js": "3cd97e55fcbd16c9ee646052c1efadc6",
"main.dart.js_30.part.js": "0557df5dc14174a0c777aea324955be7",
"main.dart.js_29.part.js": "faa184087b81422e6a878e10776dc321",
"main.dart.js_33.part.js": "9c067722c1251c57cbce0826076176a1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "8f71373d745e5dfa8a28121483afca66",
"main.dart.js_25.part.js": "2bcc1d0b1c8012ecc58b653b98c1ca81",
"main.dart.js_14.part.js": "e8e36daff28fb996eece564ecf167568",
"main.dart.js_1.part.js": "7913afbb875ea78f61eacb160cee4f23",
"main.dart.js_9.part.js": "4223be79162a60869b04929a87e53f93",
"main.dart.js_19.part.js": "580a650f1d3a43875dae41adc662fb23",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"version.json": "04ba636931507f01f712c3850c716eb7",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_8.part.js": "696f58bd87e991e59d4de85ca6fb2c8b",
"main.dart.js_5.part.js": "873f3b43c4a950141c55ebe87e55c85e",
"main.dart.js_16.part.js": "7ada724dd176a9f7077aae709ec01c59",
"main.dart.js_20.part.js": "a678a2828abf24e9f2be8cf2459b5d1f",
"main.dart.js_17.part.js": "c634f8b40665aed6d267c9e3f4ef36a1",
"main.dart.js_13.part.js": "29b9977f60ebfde4ff4a17ee6c80183d",
"main.dart.js_7.part.js": "100883375c907e83e4e7afba5a58bbb9",
"main.dart.js_28.part.js": "7fdbf86e866c7f1b8acb0b15342bbafd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "14a747a9b9bc700c9ef39c8ee550f5f0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"main.dart.js_10.part.js": "0a792f1661e6cb8bc68077aeb13df4d5",
"main.dart.js_18.part.js": "142e0198e3e7221f57ded26ce9e93f0d",
"main.dart.js_6.part.js": "3a673d8fc4024571fac4c8cde781d6ac",
"main.dart.js_11.part.js": "766a53ebbbcd6948cbb21ecca318cc6a"
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
