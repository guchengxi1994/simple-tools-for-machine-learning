'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "0a3a0737cdfca65ac12f663f329f0dd8",
"main.dart.js_40.part.js": "09f09136c12b3365e4a536bac9d2cb72",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_4.part.js": "dbd3bc2691025cafe10bb0d10dcc6fc1",
"main.dart.js_27.part.js": "0d7513491f6dbf9a9a3af94cafe96612",
"main.dart.js_2.part.js": "13e76e5ff0d25a1559e2633d0f2cabb1",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "5524674fd53fcd2d11202691dc8beaa5",
"main.dart.js_47.part.js": "b51e3c3f27469da102b575a92bb97392",
"main.dart.js_32.part.js": "8deb9dd459eb95b27c5a446a1fadfd0c",
"main.dart.js_59.part.js": "3a1affbde9032bc4ad4f2558015bed34",
"main.dart.js_3.part.js": "c6a321601f799eb57ddae56ee9a37f87",
"main.dart.js_50.part.js": "b1674456f8150b63199f0149acce73b5",
"main.dart.js_37.part.js": "733c25893661ea7cd8ad689da43c0194",
"main.dart.js_48.part.js": "7ab49f60a769c4a18919670c8799795e",
"main.dart.js_31.part.js": "06bdbf3e3025fe90334302168e87a89d",
"main.dart.js_44.part.js": "28fabd2aff6aa86e8645326ea8ee917a",
"main.dart.js_24.part.js": "6a4a0cc4d19d2ea1420dfa45f536944e",
"main.dart.js_23.part.js": "e29b477a2819dad15d7b6a3eac87d5d7",
"main.dart.js_26.part.js": "0062e640ff3beb80efa83cafccdd0fe6",
"main.dart.js_30.part.js": "4693a1871e23980156730ffa4da6ac22",
"main.dart.js_29.part.js": "2414bbe12c8cb679b92071743027f2d4",
"main.dart.js_33.part.js": "42e144a2842b2d013ffe12d2e80760f3",
"main.dart.js_38.part.js": "0e613128d61a7d8ed84275453581e68f",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "16129c8b98244dd9d3e0e83ec587e6dc",
"main.dart.js_54.part.js": "4c1c693768fe1788d4a233861cfec14f",
"main.dart.js": "84b717977934f85534a3a1e27291e4f5",
"main.dart.js_25.part.js": "6b50dfd5af65c1b3b52fa63be25858d8",
"main.dart.js_14.part.js": "db1ebc07584d5b1409ac3093fca0ca0c",
"main.dart.js_1.part.js": "dfbd6b3918c5b85acea5fb952185f4f7",
"main.dart.js_9.part.js": "c77c1df0e453719ec14f622639425b1f",
"main.dart.js_19.part.js": "072f10fe452e991f4bac8050122c692f",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "4d44f6e096ee9cbde91cc9c1b5421780",
"main.dart.js_43.part.js": "e766d316ceacba19755e46765c6b227e",
"version.json": "cc4ddb76b84b9f4ddb7eac92623698cc",
"main.dart.js_42.part.js": "658d7ed0d40c386cb3ee771d0e71969d",
"main.dart.js_52.part.js": "e90ef27e27cb987447050cc8316e727f",
"main.dart.js_51.part.js": "16a5b5529d75b83c7e8d2894973a79ec",
"main.dart.js_56.part.js": "98d30caae1f4ac0c501d1b9e24fe44f5",
"main.dart.js_55.part.js": "7fa6d1e40413606d0e779c0d6ad79c89",
"main.dart.js_53.part.js": "a6db0863ddb34e742d377ea225147fff",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_49.part.js": "4aaab5271512eea9bb92bb7f6c9e6d89",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_8.part.js": "4a9ae88c6eebc7bba3918bdbe45c92fc",
"main.dart.js_5.part.js": "32abf2cb917c0bf81e28ef8991e2d0a0",
"main.dart.js_17.part.js": "4f469859546023aaad187cb167f43468",
"main.dart.js_34.part.js": "e30cf673dc417b838872d20bd8e7ad61",
"main.dart.js_39.part.js": "200669d2fee50bf329a27e047ec67c7f",
"main.dart.js_13.part.js": "c94deeb364270059738573d389be5d1b",
"main.dart.js_61.part.js": "20e59efc4dc7b83a50bb02814f0f14be",
"main.dart.js_60.part.js": "2c3ab65bd9831e9b1f3f9d6a966c6cc6",
"main.dart.js_7.part.js": "394e5b56e8cef5023d5e2e8cb69a24e1",
"main.dart.js_28.part.js": "26f3fd912bd37887ede7256ff1094f67",
"main.dart.js_41.part.js": "d94ad43f4748889d650d673dc9b8d577",
"assets/FontManifest.json": "dcd1b95c38d8f536e9ac1d12e558299a",
"assets/NOTICES": "83b34bd3fe73a180b17a0164d597502c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/font/NotoSerifSC-Regular.otf": "9c722c930ebf1e61e92053719ddbab64",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "962a81b50635ed6986c7dcec88e091b9",
"main.dart.js_10.part.js": "c6b3bad1fa41bcb67d27d0aa4107e29c",
"main.dart.js_18.part.js": "5dd647ea27307892fc417bb074662de5",
"main.dart.js_6.part.js": "cfb4296baebdb99e29a429d29d973f85",
"main.dart.js_46.part.js": "602b16b24e8a3a5c97adeab6ce1ccf6d",
"main.dart.js_11.part.js": "e8f89c84e32f164c06e4264d63022ac0"
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
