'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "ab2398dc71076f3d29d4fab987e3bae4",
"main.dart.js_40.part.js": "c245da7890d24c053cb9771e2a31655d",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_4.part.js": "b4d522b945e9cff3d2e3da5ade280227",
"main.dart.js_27.part.js": "4a5f86fc6cc6419f7663b60fe2b55fad",
"main.dart.js_2.part.js": "1f18a4e43135fac51d2b0345708e2340",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "d316ab41bdc45bdc0490d1c4b6aa6c95",
"main.dart.js_32.part.js": "e3bdd86584acf90ed6f4de569ed6ea45",
"main.dart.js_3.part.js": "d4dc15cdf7e00077765ae7590abeba40",
"main.dart.js_37.part.js": "a6b75ce6ae6a19aac70fa78fef8a3687",
"main.dart.js_31.part.js": "d59308abe17bca1f28b11bc3c4b8cbd5",
"main.dart.js_21.part.js": "59f607b02c7e7404caa9e539db5b591a",
"main.dart.js_24.part.js": "5d0aa3879f11eeb45357522a379c176b",
"main.dart.js_23.part.js": "9c6a1a896cc974465f3aa5db65ccd3cf",
"main.dart.js_26.part.js": "0e3b6e1a3313c9c562eefdd376a82bc5",
"main.dart.js_30.part.js": "56898dd3f69387a0653bfd0b9df37762",
"main.dart.js_29.part.js": "20a575a8e44bd74e370c62de3a5ec418",
"main.dart.js_33.part.js": "a0c2d49a20c18f1b3b9148c220cc9e07",
"main.dart.js_38.part.js": "043665fa1e1e7526a216c47607fd84c0",
"favicon.png": "a097788d8600f7e7498cbd0148e031e4",
"main.dart.js_35.part.js": "c42a4c28b87de4bff0677a65699dc668",
"main.dart.js": "26add99fca3ee00d50d7fe9e5d37ad05",
"main.dart.js_25.part.js": "82743eea529be984edff7fda762880d0",
"main.dart.js_14.part.js": "e6452eb6ce6832d5ecbf91c400de0578",
"main.dart.js_1.part.js": "f1f0a8436244178d014811683a0ad704",
"main.dart.js_9.part.js": "cc269611b8615dbf76a2dd189a275951",
"main.dart.js_19.part.js": "127bd89841b4f0d7f8614dcb461eca65",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"version.json": "0848d0121bf40f72912d77be6fce0ee8",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "2214a87fb1bd67c8509d764c99bf6b6a",
"icons/Icon-512.png": "d14cb45119eb7ed8fd70f527215c4184",
"icons/Icon-192.png": "ec5e643a1470ac86a93256fd91c2dd8b",
"main.dart.js_8.part.js": "014354eb2a1427a712dfe6ea253d636b",
"main.dart.js_5.part.js": "ba86480c6eb2411659dd2f58acb5af42",
"main.dart.js_16.part.js": "eb9c630ff7b2c0c06f3f0301e33d2f93",
"main.dart.js_17.part.js": "54b80be2219bfb4e3e8944e6616b82a2",
"main.dart.js_34.part.js": "e1a82615e59ad650dbb4afa53e45a8e0",
"main.dart.js_39.part.js": "1017ad8131f8adcddafa835f69b3531d",
"main.dart.js_13.part.js": "9fc9e7e3ae6e005ae0ccd41250ff4458",
"main.dart.js_7.part.js": "61b2ac34f78eecf6c56d01420581d3a7",
"main.dart.js_41.part.js": "8ca047770db3d61f0b04c79cc7cdce6a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "63d5d61703817854a5ec55a29bd0989a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"main.dart.js_10.part.js": "d7db08e0485da919b8c060dfd891a389",
"main.dart.js_18.part.js": "de3e0b3583165111d000bcc1d0ee89b2",
"main.dart.js_6.part.js": "aef0cc08e501669679edb2166899320a",
"main.dart.js_11.part.js": "7646344085000ed3b65a4f3c6eb825a2"
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
