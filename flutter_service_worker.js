'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "34939a4f4bad41d83bdc9a5703cd024d",
"main.dart.js_87.part.js": "85d1b15584acb4ea25f96557fc9091ef",
"main.dart.js_40.part.js": "72629ffc15e0aa56da302bbe131dca02",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_67.part.js": "794c712c8d4918b2bd14d73008885fd7",
"main.dart.js_4.part.js": "0e354ffad86f8e69ea89af1af8d41b37",
"main.dart.js_74.part.js": "f3d39faf595c00f1a2fff7234fe7d672",
"main.dart.js_68.part.js": "3fd558f7b6db83174a6edc2e78f06395",
"main.dart.js_27.part.js": "734217d47202e01ef0d087b38f0e2ee7",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_47.part.js": "3573d139fb3f4927cb0c22be4fba0bfa",
"main.dart.js_63.part.js": "7d9fd91c3ebede619bb5ed9358de696a",
"main.dart.js_62.part.js": "ec809241edc7d378f218010dbbc83a66",
"main.dart.js_32.part.js": "909af1ac9c8471af94f798cde59a00e4",
"main.dart.js_59.part.js": "2c779f8958269e334c98618610ab9997",
"main.dart.js_85.part.js": "b41afd21e4901ec9a8895d0948abd884",
"main.dart.js_84.part.js": "5b17a9d24b438bc79b64efd0a08a8d8e",
"main.dart.js_3.part.js": "38d2249aec411e7688f4eacbcc228d98",
"main.dart.js_50.part.js": "51caaf5a221775482a92c9bba1288e87",
"main.dart.js_37.part.js": "fb173525e469ec3e9290e8dc89a04666",
"main.dart.js_90.part.js": "db06d6b592c24596bf7bdaa3d0cc1081",
"main.dart.js_58.part.js": "ff5514757cbdbe47c985565670af0226",
"main.dart.js_48.part.js": "b6fbd4951d838541196997b1fb4043a4",
"main.dart.js_31.part.js": "169531a6ce7f1f0c244ec811fe2c7bea",
"main.dart.js_44.part.js": "e907c80953cc2b43e7ef8cfa4307d463",
"main.dart.js_86.part.js": "0305815ce230ee3c21659645e7f99e60",
"main.dart.js_70.part.js": "0755d634849667b907fbed473a830fdd",
"main.dart.js_24.part.js": "5ab22b22300a2265c6d449ef237c4dc4",
"main.dart.js_26.part.js": "d6e83d5868119788208b891099eeceb6",
"main.dart.js_57.part.js": "46aae4255e959949cab1a13c359a64cc",
"main.dart.js_66.part.js": "4bb9e1bff6ef3457d5c5ee0d9b1f1af6",
"main.dart.js_29.part.js": "e776766ad05b163fb4dd7f3fd3509c7e",
"main.dart.js_33.part.js": "1ccfdea6b3f27d434e83ad1658c9a69f",
"main.dart.js_38.part.js": "a1d51dbb383327bec81b2c42383fb220",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "6a5aef592e0a70d6b0143da10e29a70f",
"main.dart.js_54.part.js": "264f071f65c05ae08bb066ce95a28496",
"main.dart.js": "4698887d757117a527db2ae56ff3fccd",
"main.dart.js_73.part.js": "b5e570873cc53a890f9a5bcf9e17b3ca",
"main.dart.js_25.part.js": "8dac6a40cea44a5af5c54a1abc014631",
"main.dart.js_78.part.js": "5c26f0176fd11a510cef03280ce12713",
"main.dart.js_14.part.js": "e4480c89d384de6672219f99a5f4175b",
"main.dart.js_1.part.js": "271cc222de4974026420ec4bbf15d629",
"main.dart.js_75.part.js": "2713e2d667678771d5d6be1a72486c85",
"main.dart.js_9.part.js": "883fbd0b390d8f8ab59a88a963a1854a",
"main.dart.js_19.part.js": "310a000adec5c3f1f9ba9c4230f1af7a",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "c35f3141ec7fc446ffcda2bc34622a0b",
"main.dart.js_43.part.js": "74a67f0ca907b222a56fceab90564570",
"version.json": "7d71abfeed91fc07462b789a0eadc5e8",
"main.dart.js_42.part.js": "74a5dd10092fe802616e157cbf81743d",
"main.dart.js_52.part.js": "a508ed0c351cb659030207356ab5b127",
"main.dart.js_56.part.js": "a9ff327743384170adcf37688ae2fb1e",
"main.dart.js_79.part.js": "cd0a663f8fa27bde0014afd20b623900",
"main.dart.js_55.part.js": "497707c1fabdf58f766a6f640ffcfb5f",
"main.dart.js_53.part.js": "d8d1320b971649e33e24da06e5f53782",
"main.dart.js_72.part.js": "61467ab8fb8ec518372c20d5b9a44b5c",
"main.dart.js_89.part.js": "8d845fd99195c2c1016b0f8edfd9cb8e",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_91.part.js": "1ab1ed45e8f05dc1f4ed285ce316aee5",
"main.dart.js_36.part.js": "1bb05646b068e9a1d0d1f31a2364e0b7",
"main.dart.js_69.part.js": "9097b0bcf6ac29f8160a2673a88ae75a",
"main.dart.js_49.part.js": "bce3f029235e9e83c948858ab02e3749",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_15.part.js": "7e1bc095c62de251c76d253912b7e612",
"main.dart.js_92.part.js": "bfea428c4f8197a4956f44b49e29320e",
"main.dart.js_8.part.js": "68971cbc30b701b11085b13dc54b782a",
"main.dart.js_5.part.js": "63e4880491e085fad715529a7d9ed3af",
"main.dart.js_16.part.js": "e13167038887f5084e2cd9bd7371fc0a",
"main.dart.js_64.part.js": "bd2774b3ba19393b4da054f1723e25e2",
"main.dart.js_34.part.js": "234af228e4ead64d38712019b14d09b5",
"main.dart.js_39.part.js": "35811fc19b12e258df6748b1f03e501b",
"main.dart.js_13.part.js": "5f2a3569d8f61a056c88b19ed20bbd36",
"main.dart.js_61.part.js": "f297cfd6febae29a487b9de8b7bef246",
"main.dart.js_71.part.js": "019b8421cf365597ce87c85d1fc70a52",
"main.dart.js_65.part.js": "0419990b0376c55df7a2e0cb21f8c4de",
"main.dart.js_76.part.js": "2f9a9c94050ec3f7ce5b25849c44332f",
"main.dart.js_60.part.js": "e66044b29aad1514d24eb61895b2cf65",
"main.dart.js_7.part.js": "b8e5dcfcadbe494b5ac94ad8b6b9e89b",
"main.dart.js_28.part.js": "89a4fe9af6b6aa2813cfc86ad9311a2c",
"main.dart.js_41.part.js": "36fc98224a4f599a13451027226e2faf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "fd4082173963fec73976c21509d157e0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"main.dart.js_94.part.js": "4493dabc2b3720391de104c97c1a617d",
"main.dart.js_10.part.js": "3f9a9ace4cf38a984e146802a460557d",
"main.dart.js_77.part.js": "01700eda44374a076502274a3fae9373",
"main.dart.js_95.part.js": "91726ce4ae52b1df2b8258854c57b6fb",
"main.dart.js_96.part.js": "43d9b27ee33120f2aeba5113a38e968d",
"main.dart.js_6.part.js": "b79f050f1c20aacb32c34fcb999e9879",
"main.dart.js_46.part.js": "c684cd1b4444002de6d663f698018b10",
"main.dart.js_11.part.js": "80c20d1ef699d3416774f6f1800de6e5",
"main.dart.js_88.part.js": "15376437e58d5a0c12566fd5d9438d4e",
"main.dart.js_93.part.js": "dffdde6fff8ceed2b6432485cc0693e3"
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
