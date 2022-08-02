'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "ab2398dc71076f3d29d4fab987e3bae4",
"main.dart.js_40.part.js": "fb102fc7556803b2854c43b871254d35",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_4.part.js": "e75e428dc5a17c49268a072216ed9a9e",
"main.dart.js_27.part.js": "005d211759bfa33af957ffa7717310ce",
"main.dart.js_2.part.js": "08598053d1f55456b97e7bc641d42fec",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "b95ebedd9a3b0073ddea1a3b3bf2b52f",
"main.dart.js_32.part.js": "b198493525f28cea8bbc01303cfba8dc",
"main.dart.js_3.part.js": "d4dc15cdf7e00077765ae7590abeba40",
"main.dart.js_37.part.js": "a6b75ce6ae6a19aac70fa78fef8a3687",
"main.dart.js_31.part.js": "e4784443a68c0cfb1e51cfbe15f21c13",
"main.dart.js_21.part.js": "a5ec879c20409c82ea78e8ea4cd7802f",
"main.dart.js_24.part.js": "a91a6d33421fce02cdd35b86a6c03765",
"main.dart.js_23.part.js": "cec00d7839d8dda3e6a03e1520f24fc5",
"main.dart.js_26.part.js": "0e3b6e1a3313c9c562eefdd376a82bc5",
"main.dart.js_30.part.js": "28f63457e909fd3a6e51ec19b382fad2",
"main.dart.js_29.part.js": "628d99a0000e9b797157baa941169345",
"main.dart.js_33.part.js": "a0c2d49a20c18f1b3b9148c220cc9e07",
"main.dart.js_38.part.js": "a5678fb51b3f1be921226e5cca42458b",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "739d048823ba5d88f232b190d47209a4",
"main.dart.js": "d6ec71e0f8ff5d54df075f1b6dd7c901",
"main.dart.js_25.part.js": "82743eea529be984edff7fda762880d0",
"main.dart.js_14.part.js": "0678305efc2896d7e47e83260e3a4fac",
"main.dart.js_1.part.js": "ef6186194a7076bd1cae2fdb8f80963c",
"main.dart.js_9.part.js": "cc269611b8615dbf76a2dd189a275951",
"main.dart.js_19.part.js": "7f11031ecc77ffb24acd715adab6a2e9",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"version.json": "c95217510d649bd9a2ace15798231b58",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "780f8eb258fa6626f4f3309c18a6da80",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_8.part.js": "ac9b4e51960fae3255628da9f9d39c44",
"main.dart.js_5.part.js": "d092a3addbe3a4b408fa048a95db02dc",
"main.dart.js_16.part.js": "e99435ce1db3a200866425a578a1c729",
"main.dart.js_17.part.js": "2cd76a9b3be7549bd9f123f1d72d2582",
"main.dart.js_34.part.js": "292a637dc496c0995124616c063b5b88",
"main.dart.js_39.part.js": "7ac6dfaf1baf0d4733ed9b16c8e48566",
"main.dart.js_13.part.js": "9fc9e7e3ae6e005ae0ccd41250ff4458",
"main.dart.js_7.part.js": "7174c6deaf4b0d1c34035cf7546cbb95",
"main.dart.js_41.part.js": "a4e88d260e47d756e994ca1888a4bc43",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "63d5d61703817854a5ec55a29bd0989a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"main.dart.js_10.part.js": "d7db08e0485da919b8c060dfd891a389",
"main.dart.js_18.part.js": "95279a3df9f7916b1beb159785f7fad2",
"main.dart.js_6.part.js": "6534dd0da4d239f875197eb753f0a166",
"main.dart.js_11.part.js": "4993fcd6c2e03a5d34c5a78c4a882093"
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
