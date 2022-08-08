'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "e9cc043cd6a1722df989c549639ffd15",
"main.dart.js_40.part.js": "ac86f4aaf98c134e4f151f5412305c71",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_67.part.js": "b587ea99e01aa2e89311ba312436ad48",
"main.dart.js_4.part.js": "ee487c6c51892497a3d0d4f112a69fcd",
"main.dart.js_74.part.js": "f25ffaa16f63c9c9f2248efc984e69d7",
"main.dart.js_68.part.js": "fafd86f198def5fa1d3fe37a03a9ee54",
"main.dart.js_27.part.js": "d214f91adac94947dc1907e5785c8125",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_47.part.js": "9d953b887cead061c0230778003a50a2",
"main.dart.js_63.part.js": "00d166bd02cdf06f6c494d0db5874ab1",
"main.dart.js_62.part.js": "e8e9b066537c34aa3cfedec381c43c6f",
"main.dart.js_32.part.js": "7e8595db54a050b72487bd24ea69362b",
"main.dart.js_59.part.js": "d406e483fdc84ae4fddffacc6aec9d1f",
"main.dart.js_3.part.js": "e74b3938920f074d5f47656110ad74ab",
"main.dart.js_50.part.js": "72e69d8245d896f2a28ad99129222d1f",
"main.dart.js_37.part.js": "17f3c02e0bff76e1e20f24bd34c459ad",
"main.dart.js_58.part.js": "cac8f5169f5f012f4ea8daa293ff9340",
"main.dart.js_48.part.js": "9b110672733d9bad02e74ce830ed7b83",
"main.dart.js_31.part.js": "ef6ed973d09f28f8a9188720b4085b90",
"main.dart.js_44.part.js": "50cd25854aa7be7ae69b7b3aa5efc376",
"main.dart.js_24.part.js": "6a0633d5a3d6435931ba89361f859333",
"main.dart.js_23.part.js": "c349ca92843973dbe34333631cd88cec",
"main.dart.js_26.part.js": "1a2b05985981924ef362e596374be0d0",
"main.dart.js_57.part.js": "6a368f85d7f1f96316f3b01b232f1357",
"main.dart.js_66.part.js": "9158acfc943b696e323ec72c82fad845",
"main.dart.js_30.part.js": "5451c0d60c7eac010f67b0ab821cfcd7",
"main.dart.js_29.part.js": "f4b4c87856bc186bd2e5f1e83ef092aa",
"main.dart.js_33.part.js": "db19f57a415277360f1cc32e0f8d1825",
"main.dart.js_38.part.js": "e3c92eabc50af50f71a602fb1e4780ab",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "b51616c10f4731ebf5dbd4e3bc57a746",
"main.dart.js_54.part.js": "e51b69ebda12607730a0ce840bc4af2e",
"main.dart.js": "a87cfa9dde010e0e1fe49eaf2ad1d1af",
"main.dart.js_73.part.js": "7cf89398cccea116e401dffa21ac6ee7",
"main.dart.js_25.part.js": "ed8666b53aaf4386e0562ee2c3cf5722",
"main.dart.js_78.part.js": "c621c09cbbdd66c7d227b28409113be5",
"main.dart.js_14.part.js": "14ba9fe2eb0f430f3f38feb71f3213dc",
"main.dart.js_1.part.js": "c3f538af66eeb43456cd2f4ef6221ead",
"main.dart.js_75.part.js": "7239439e87f6168519b8a753141622df",
"main.dart.js_9.part.js": "b5ae0e36c0953dfdde01d5d3fdf7ff6a",
"main.dart.js_19.part.js": "446447047cef69037978fa8b2b3a41e8",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "bf087b2efd73b29482f9314c1d53c568",
"version.json": "6e4c1ed085ea41c2d585785026e43444",
"main.dart.js_42.part.js": "50eedbfba38b0af6cf586bf5abe22fe3",
"main.dart.js_52.part.js": "e0a6068de097d767805ae0687b3e8dbe",
"main.dart.js_51.part.js": "521d0f7c9d5779c1dff262e560d9af62",
"main.dart.js_56.part.js": "af5dcba03dbf510c9ea39fbe40122e78",
"main.dart.js_55.part.js": "cd63ebe39b10e2582694f7e52c917c7d",
"main.dart.js_53.part.js": "5eecb9f296e76a0e2d9302cd11a27754",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "862bff5928e0c89e3214ee7be61c4ea2",
"main.dart.js_69.part.js": "67431e1a6d0bc9bbe3a70e9c3d7c8205",
"main.dart.js_49.part.js": "78157f2573d4bc8a7f830fc3d4c40a54",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_15.part.js": "49bf293d0286290b7d97e580987a222e",
"main.dart.js_8.part.js": "00af860e8b1c5c05c48017763c890988",
"main.dart.js_5.part.js": "44627a4e0bda9f13872ef87ef7a22ca9",
"main.dart.js_17.part.js": "652abe6edc25d90c07d931170c9c560a",
"main.dart.js_64.part.js": "3a3e8f0b4d30c95ad35c60cc39b63d6f",
"main.dart.js_34.part.js": "1e7d253952cc890a85ffdb71f347e913",
"main.dart.js_39.part.js": "f8650347a3752ee00cc28e480cca36c8",
"main.dart.js_13.part.js": "3b19e14c19bdd8967d15593e21106c63",
"main.dart.js_61.part.js": "74a30612fcb5df8709f00d43d58c1f70",
"main.dart.js_65.part.js": "7c51dd62c23d6c3b2933bd649ce0bcba",
"main.dart.js_76.part.js": "88f1ac5d448a18c14274755e8dfe7b51",
"main.dart.js_60.part.js": "2547cdf8b32f0d029eed9347bb130a40",
"main.dart.js_7.part.js": "93fcc481d0e7098c2e9d199b64a07abd",
"main.dart.js_28.part.js": "9af6e7246ba15184e709dfa0ea46df56",
"main.dart.js_41.part.js": "32476a1d5aa75f5533d13677050484f8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "f45849adda16b7c9229f5a7d85d98dba",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"main.dart.js_10.part.js": "69c88ca66b6e92ca3604542370bfaab8",
"main.dart.js_77.part.js": "deff88cb07b988d1c86398c9e3332714",
"main.dart.js_18.part.js": "928a5d02c5faf73f9f5022871bde81fe",
"main.dart.js_6.part.js": "e99a352469421478b8cfa3d9d8412430",
"main.dart.js_46.part.js": "cf71fa3beb6db693f0d35cc0fdc8471b",
"main.dart.js_11.part.js": "0378ec4bf995d2e50ce6157bf451c143"
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
