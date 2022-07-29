'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "9e79cfa31ecf9f4d5e8950fb893648bb",
"main.dart.js_40.part.js": "471624cea6ce26f48fcfccb76b0318c3",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_4.part.js": "2393b8691d26ec7bfc0ba2aff873fb14",
"main.dart.js_27.part.js": "732d468baab1666ee3a55e9b9dd59fd5",
"main.dart.js_2.part.js": "82e8ca09cdd122fbacfd0aae463e8027",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "52055ba36bb13889fca2a4d6e11537ec",
"main.dart.js_32.part.js": "f0ab9e7a01410c84360e00b5f14d6c4a",
"main.dart.js_3.part.js": "49843a6dbb41ad9611c728837c9f8242",
"main.dart.js_37.part.js": "ed9063cadc6712c1a19aa0c9808e086e",
"main.dart.js_31.part.js": "c625e48ac8c6088d2889301973084326",
"main.dart.js_21.part.js": "a4c8fd659311ea6e7045ad0d12b95888",
"main.dart.js_24.part.js": "5321b7c87c3c85cfab3509fd7fae7b03",
"main.dart.js_23.part.js": "1f1bfeef8eaa208546e058657342ce12",
"main.dart.js_26.part.js": "37bbc5fdc75c124ab279af2affbc48df",
"main.dart.js_30.part.js": "8e025178f2e7476fce24005ab1c2cb40",
"main.dart.js_29.part.js": "ef8a65a5dc0349bd5277066154fe1a39",
"main.dart.js_33.part.js": "1007263c7093f9036044c5610c5ed9e9",
"main.dart.js_38.part.js": "5938445d2b22b384601c6a20619168d7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "c92796cb0b3e7958205fc4c197a23ed9",
"main.dart.js": "eed59431ba8a7ab4d23fc8af169b65a8",
"main.dart.js_25.part.js": "110e0f32eb15eb43364d0b8cc5f01461",
"main.dart.js_14.part.js": "95a2b4d9e0e9f81723344fcef5a0ae24",
"main.dart.js_1.part.js": "b4f9f1ddcc6e6b292fa368fcaaf9cae3",
"main.dart.js_9.part.js": "c51bcb486132131a324e36d866f445b5",
"main.dart.js_19.part.js": "3e6534777b19160fd765e23670c6de3f",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"version.json": "fa7fc47783e056fdd0323c26cf0f4b97",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "3a58fb25e5b5d5b65ccd71339b7edc99",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_8.part.js": "5d9640307d271da86dbcbe858b9e039c",
"main.dart.js_5.part.js": "4603e6452d6fbafa936925693fa9b1ff",
"main.dart.js_16.part.js": "b7cc09bbf322cba4851204134ab98dc8",
"main.dart.js_17.part.js": "c89f9cc17a5d20830fe0e74b986d3034",
"main.dart.js_34.part.js": "0a1d6ae4242729568d339a7a70803f16",
"main.dart.js_39.part.js": "796db3afd2ed8b3f732699ac4c1ba352",
"main.dart.js_13.part.js": "af483f6c93e18080841fdc236fd2de5c",
"main.dart.js_7.part.js": "d66927b38e26b07d191950ac3cf080f9",
"main.dart.js_41.part.js": "f97f7d960210f80690272d28c870a90d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "62353bd8c67bef2a709cf1308ce464ec",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"main.dart.js_10.part.js": "fc369ae6fd5f702e2cc371501cbd7a7b",
"main.dart.js_18.part.js": "108b9739c1ef8e9aa21af9c8dfd12b98",
"main.dart.js_6.part.js": "fd7047b2d84a320891002df30107af9f",
"main.dart.js_11.part.js": "50d24edce85a96377f2aeaffb1a5ee05"
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
