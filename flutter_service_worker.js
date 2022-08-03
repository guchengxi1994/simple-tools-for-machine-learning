'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "0a3a0737cdfca65ac12f663f329f0dd8",
"main.dart.js_40.part.js": "00220f482b80bc9c47266fb2d54e4545",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_4.part.js": "3d26a00d94f17e2523fe6241056223a8",
"main.dart.js_27.part.js": "bce94fbdf9112bc62ab5522713759b78",
"main.dart.js_2.part.js": "ce04751aa5c6e7b987fb533b01c21f99",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "022b8b38c21dc3ad99cfd4904dafce5a",
"main.dart.js_47.part.js": "32cebcfb89f556802167ed4f50fdd4a1",
"main.dart.js_32.part.js": "a4ae9ca6b0515afbe93e7cd7cb122eac",
"main.dart.js_59.part.js": "463ef5ea42105a252504570f93e6fb48",
"main.dart.js_3.part.js": "9cbf405231ac315240890774adac3cc4",
"main.dart.js_50.part.js": "18051761490960eaa3158acc1aa15e69",
"main.dart.js_37.part.js": "96c9934a0db67986e7f1a5dde2dea687",
"main.dart.js_48.part.js": "7ab49f60a769c4a18919670c8799795e",
"main.dart.js_31.part.js": "f41bc5c50c07b6fc040958e56ab3103d",
"main.dart.js_44.part.js": "1a7dd3c7494c2cff7754aa838381c591",
"main.dart.js_24.part.js": "4bb36e00f0d32ff2dc4afe9c2be37178",
"main.dart.js_23.part.js": "52a6cfdd7f66c6608fc940ff704378aa",
"main.dart.js_26.part.js": "02049b8e90d0957ec446ff7a29f1bc13",
"main.dart.js_30.part.js": "940e9833a84cfde4e94263cdc854279e",
"main.dart.js_29.part.js": "443767b3496a888946a2f28021e6bda6",
"main.dart.js_33.part.js": "5e2528b9a9eb3f84f5c155a6e9c31135",
"main.dart.js_38.part.js": "0e613128d61a7d8ed84275453581e68f",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "7c1db35244db1bfd53e4e2cdd943fd12",
"main.dart.js_54.part.js": "ecf755a27730af3f47989f77fcf7a431",
"main.dart.js": "38a7d7497ec570bf1cd38ccf277449fd",
"main.dart.js_25.part.js": "3f619e26614d548b4ab3cc69a704d65f",
"main.dart.js_14.part.js": "86bb9bb59c441b0f9a5e86efa9ae4b87",
"main.dart.js_1.part.js": "4be2d0918113df478520376cfb24119f",
"main.dart.js_9.part.js": "c77c1df0e453719ec14f622639425b1f",
"main.dart.js_19.part.js": "f9f74a807499abb4070e3ad3eaeb8598",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "df5954192ced954f34b2edcbbd2110d1",
"main.dart.js_43.part.js": "e766d316ceacba19755e46765c6b227e",
"version.json": "cc4ddb76b84b9f4ddb7eac92623698cc",
"main.dart.js_42.part.js": "658d7ed0d40c386cb3ee771d0e71969d",
"main.dart.js_52.part.js": "1ed8d0eb591f570eed5c5210e2e7cd2e",
"main.dart.js_51.part.js": "578445a188c10e772b4e9ad60481e250",
"main.dart.js_56.part.js": "b536c5c4ee3a4946e70a6c069a50a320",
"main.dart.js_55.part.js": "a78c0a68a387af461cee2a4d2a4044a4",
"main.dart.js_53.part.js": "c0861028ace9f913da83bc4ac140446f",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_49.part.js": "212253058a19be5006020fd3720880a2",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_8.part.js": "5abd1f2b008b3c4d4b646f38a6691a1d",
"main.dart.js_5.part.js": "6cf624e5e91d4bc131ec75a6301f0f88",
"main.dart.js_17.part.js": "3d1ce9c6904db22687792251a586abe6",
"main.dart.js_34.part.js": "5fd698e12ab02efe065c686e9ddde3cd",
"main.dart.js_39.part.js": "7e062b6dd2177e4a95d85ffa127304cd",
"main.dart.js_13.part.js": "c94deeb364270059738573d389be5d1b",
"main.dart.js_61.part.js": "e388d3ed062857a6e9af67a678ff0546",
"main.dart.js_60.part.js": "4e940042a48f50b2b8246451e2a4394f",
"main.dart.js_7.part.js": "98c17b36283b4ba8c18b565e33164938",
"main.dart.js_28.part.js": "4ff6791375cf3d023c4f231c2bacd5fa",
"main.dart.js_41.part.js": "2019010a99b12b000468444963641f0c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "83b34bd3fe73a180b17a0164d597502c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"main.dart.js_10.part.js": "c6b3bad1fa41bcb67d27d0aa4107e29c",
"main.dart.js_18.part.js": "877f0184aa58c155a56c08334ec1ca64",
"main.dart.js_6.part.js": "710cf6a4124c6063166ed3d26f262ed0",
"main.dart.js_46.part.js": "d1f4501e82f83bc7e17f78fc9ea5b294",
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
