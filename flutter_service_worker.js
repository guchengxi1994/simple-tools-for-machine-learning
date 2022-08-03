'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "43c3024ea9305f5947f3a766bf77e596",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_4.part.js": "3c676c4894f1338a3b532926de3526f5",
"main.dart.js_27.part.js": "723ce9598facf693c74975ae87226df9",
"main.dart.js_2.part.js": "98e7c374cf453a82c194a67482266de9",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "1101f6bdf61bdebc72dced95b507e6c7",
"main.dart.js_47.part.js": "ffd3df11b51e83bb55d8a054e42836c8",
"main.dart.js_63.part.js": "800ba956da57008a8dfd16a164ace7a4",
"main.dart.js_62.part.js": "2ddac1fa35693d5146739f9ec44360b3",
"main.dart.js_32.part.js": "0de1984ccaa109acd473aff139a97d27",
"main.dart.js_59.part.js": "3140c140989deb68a17c07f163238dea",
"main.dart.js_3.part.js": "72f9470b6bcd4e472e75129c2b985ddf",
"main.dart.js_50.part.js": "66a59ced45e95664ae43d68c4ea7d6ac",
"main.dart.js_37.part.js": "5450b8c3e28d47f23400cc63357645ab",
"main.dart.js_58.part.js": "ed43937cd31bb696bc33991260ca8738",
"main.dart.js_48.part.js": "5eb167f4a5fdd28c4b26648d15a20be0",
"main.dart.js_31.part.js": "8f50eb20d630e6d0a201311d50409907",
"main.dart.js_44.part.js": "b9447195e8b92c21c90519ee887a1554",
"main.dart.js_21.part.js": "5c1d5cba2373729b084bd3dd661aa0ce",
"main.dart.js_24.part.js": "2749f7d4e861d1ac28f3798adfaeb154",
"main.dart.js_23.part.js": "2b4447a151c7472ba4eff4ecdfee4480",
"main.dart.js_26.part.js": "18758bc6319903326145d4d8d8533b75",
"main.dart.js_57.part.js": "60835ea58eb0fbcdd8ea1335fa2b3609",
"main.dart.js_30.part.js": "bc2b63c2dbed45e9aeb06f5188248af1",
"main.dart.js_29.part.js": "da2d1477d39e0e4f8812c5333a9f94b9",
"main.dart.js_33.part.js": "256f64be4a36d8923b3b25f7a3a20f72",
"main.dart.js_38.part.js": "d86ed36b51d217d834d42d0144ea91e9",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "b6e8fd4b12d0ea74d103fa3c6922a697",
"main.dart.js_54.part.js": "97c7cdf68b6fe63c9f537122cb47bdca",
"main.dart.js": "f81502690ea72a3f86cadf2fd5543e64",
"main.dart.js_25.part.js": "5daae5d66bdb375b594eabf5b31e5113",
"main.dart.js_1.part.js": "8820cced7e4c7e4769d9437eb46890e1",
"main.dart.js_9.part.js": "db92da148c0e983d73ad97051d3e544c",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "450cb3680ced76fe568e90854d2139e7",
"main.dart.js_43.part.js": "c06df8f45173ed5e2fc2ab8c3bbd2394",
"version.json": "b5a45c579bfb7afe009738636fddae59",
"main.dart.js_42.part.js": "fe5d9d7edd455ba5f288ed493e98d9ec",
"main.dart.js_52.part.js": "989ceb1925d290a3456e0d2cd6ee986f",
"main.dart.js_51.part.js": "a92d12114c865de363dc8ce67536a3f3",
"main.dart.js_56.part.js": "3593bcefb3578958617f683074da46ff",
"main.dart.js_55.part.js": "eab708d4cde95e3015e07166683003c4",
"main.dart.js_53.part.js": "a85ecc22236c7e8e7e54c614fdd0cf29",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "7f4918e88709300a278c99d0b077d51f",
"main.dart.js_49.part.js": "d7f7e47bb653bd827126fd3f77fa95b3",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_8.part.js": "45bc49900596c3fae8c67056ccfd158b",
"main.dart.js_5.part.js": "a9aa90b217b2eba01608a6aab31035d5",
"main.dart.js_16.part.js": "37634eab95741db2ef9bd593e9ed8897",
"main.dart.js_64.part.js": "9bb4fda907c492fd08c72ff8accda0b6",
"main.dart.js_34.part.js": "0453dbdacdee50b357d97a13138edad8",
"main.dart.js_39.part.js": "555569c50e4046e0bf1d78f7ca27165d",
"main.dart.js_13.part.js": "912523e10bc42ae30cf7a1a49883978c",
"main.dart.js_7.part.js": "cf6b86929d8b08e83647c4a6df24d0f7",
"main.dart.js_28.part.js": "f9d79ee5ca82685192559a94a8f1a479",
"main.dart.js_41.part.js": "fea00ba87686da46ee1465f8d804f8d9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "0928d51fb44da52b991fbeb6b1755881",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"main.dart.js_10.part.js": "617296c279cc1e3346755fb681d0f223",
"main.dart.js_6.part.js": "765b6be7b954565896001e2548661f4a",
"main.dart.js_46.part.js": "ac9b7dd722c03506c4cc82b3dcaa4be4",
"main.dart.js_11.part.js": "de4fdd3e9f95ddf282291d8f7545295e"
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
