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
"main.dart.js_4.part.js": "acf45b9f1704f3ecbcbc23f0b7d70f47",
"main.dart.js_27.part.js": "90afec3244f9878cd7a1c1fb89ccb621",
"main.dart.js_2.part.js": "6f90b1f9b3b9a82fe6184157919bc1b2",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "c1813cb69916746f427a79a6330a3c0e",
"main.dart.js_47.part.js": "b51e3c3f27469da102b575a92bb97392",
"main.dart.js_32.part.js": "5de849ad8815df16c1dd7df0f84e4b14",
"main.dart.js_59.part.js": "e9a38852a0c5329670a1fec55b62b512",
"main.dart.js_3.part.js": "5e14c7b89953465fb1f07ddc4bcfb281",
"main.dart.js_50.part.js": "d7a0321737784424dcf98c77a5cfa5a2",
"main.dart.js_37.part.js": "91141b2b39564dcf932f0b61b275fb61",
"main.dart.js_48.part.js": "8a394401328419a0575a100bf58026d6",
"main.dart.js_31.part.js": "e1c1ec4c8a88582708c15c332a9913c1",
"main.dart.js_44.part.js": "4e22e715a018ce447a5d0915d2f44f62",
"main.dart.js_21.part.js": "cee1f8789e9f7d837e407898cb4109af",
"main.dart.js_24.part.js": "33e6757510a2acfb6567f05c6ce59f6a",
"main.dart.js_23.part.js": "6a4a0cc4d19d2ea1420dfa45f536944e",
"main.dart.js_26.part.js": "62d9cc20796bf478b2206e1d9478047b",
"main.dart.js_30.part.js": "4693a1871e23980156730ffa4da6ac22",
"main.dart.js_29.part.js": "f7e07e128176a99474385590792e6063",
"main.dart.js_33.part.js": "42e144a2842b2d013ffe12d2e80760f3",
"main.dart.js_38.part.js": "0e613128d61a7d8ed84275453581e68f",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "9bf53e4b6a8e5598d7160b220368ba6a",
"main.dart.js_54.part.js": "62d78b8114d82d56cdf73db95ec12666",
"main.dart.js": "a247a5a43da96bee6c2752665d212b10",
"main.dart.js_25.part.js": "4d24c22e93c427858796c115aed88348",
"main.dart.js_14.part.js": "31be7474919603111ef65b8bdd454a19",
"main.dart.js_1.part.js": "3dcbed3c29caab8c6f329d1c0d72760d",
"main.dart.js_9.part.js": "c77c1df0e453719ec14f622639425b1f",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "e611312642f40627007dec2dfb661261",
"main.dart.js_43.part.js": "e766d316ceacba19755e46765c6b227e",
"version.json": "cc4ddb76b84b9f4ddb7eac92623698cc",
"main.dart.js_42.part.js": "658d7ed0d40c386cb3ee771d0e71969d",
"main.dart.js_52.part.js": "62038d81bb7b51c9a82ecabe14e04914",
"main.dart.js_51.part.js": "da8b4774fda297f31b0491d73cdad2dd",
"main.dart.js_56.part.js": "a0fb57c710119806dcbb37e08313d995",
"main.dart.js_55.part.js": "54057249066f48dffc061d69038297d1",
"main.dart.js_53.part.js": "4cc080dde77fe7ac645f9c0f392c2e9c",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_49.part.js": "4f6872518dddc2a377c220b844ccdca1",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_8.part.js": "1f8c5222468bad86b62a995d6cc797be",
"main.dart.js_5.part.js": "126fe35637d2a846568ec244726451c3",
"main.dart.js_17.part.js": "4f8c9025e4fd7cb53be2681ab089c3aa",
"main.dart.js_34.part.js": "370c333ce33e28fdb9e18514da43bf75",
"main.dart.js_39.part.js": "fdb615d4a2c4d3d94116fb5f8878a254",
"main.dart.js_13.part.js": "c94deeb364270059738573d389be5d1b",
"main.dart.js_61.part.js": "519f89c7c49c0bf270203a51b21e43df",
"main.dart.js_60.part.js": "87748cf8dfd479664f2a6176b93076cd",
"main.dart.js_7.part.js": "5340a1ddcf6205e65b8dc20e51786d31",
"main.dart.js_28.part.js": "0ba1e7f1633b7f2c38fca6fb939b9a1d",
"main.dart.js_41.part.js": "bfe2a619fbc873f4fbaf740e8f2be4c1",
"assets/FontManifest.json": "dcd1b95c38d8f536e9ac1d12e558299a",
"assets/NOTICES": "83b34bd3fe73a180b17a0164d597502c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/font/NotoSerifSC-Regular.otf": "9c722c930ebf1e61e92053719ddbab64",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "962a81b50635ed6986c7dcec88e091b9",
"main.dart.js_10.part.js": "c6b3bad1fa41bcb67d27d0aa4107e29c",
"main.dart.js_18.part.js": "9b824e3a250bb14f406b50b26b24cabe",
"main.dart.js_6.part.js": "69cec7c5d67c45815dd2fa8574c6a63f",
"main.dart.js_46.part.js": "67b99c2e75ba06ba09d5b202f84423b9",
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
