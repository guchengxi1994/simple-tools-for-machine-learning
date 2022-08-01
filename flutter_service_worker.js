'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "cc03884c19a52417dae5c8ac443e135b",
"main.dart.js_40.part.js": "db5dd3007561af11eebb6db74647baec",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_4.part.js": "95285859983d0fb915a98f5143109c0c",
"main.dart.js_27.part.js": "16dbcf44b7957f50281237ec22921f31",
"main.dart.js_2.part.js": "a933ea718e588f65b4e49751975b7706",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "577bb1d83618a4911629abbf930eba24",
"main.dart.js_32.part.js": "c1dc93d75cddb03d5e6dfd05588eb969",
"main.dart.js_3.part.js": "88aeb79d3eef609b8590160ea13213e3",
"main.dart.js_37.part.js": "0e7aa915538d93ab28d32db5f11a5729",
"main.dart.js_31.part.js": "d0e682b358f40b66f67f235f6ac4edb0",
"main.dart.js_21.part.js": "49359efbcaad03b27340aea80d7b55f9",
"main.dart.js_24.part.js": "4f75fcff1252fa23a048149501aa40c3",
"main.dart.js_23.part.js": "6069d9525bbe3fb8b15c494fc33ba65c",
"main.dart.js_26.part.js": "a8ef068ab3a825d79c6f2d5317ed3aaa",
"main.dart.js_30.part.js": "2d6fa86cfc939852c9c64b883f82e021",
"main.dart.js_29.part.js": "a86605952a38968f0917915e6f13e653",
"main.dart.js_33.part.js": "a0c2d49a20c18f1b3b9148c220cc9e07",
"main.dart.js_38.part.js": "1855b08f5a0fb690974c1e3e155acb30",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_35.part.js": "6cc73f890732399269151e1d661ff8fa",
"main.dart.js": "6159a14251c1ef1e37995b1b41d79082",
"main.dart.js_25.part.js": "103ffccd38911e74fa1613b37a471bc1",
"main.dart.js_14.part.js": "628993cd08fd6bbc7125618bf4903399",
"main.dart.js_1.part.js": "c66975086814fafd864166380f12bb25",
"main.dart.js_9.part.js": "1fb2c4bb445178ff41d0cdfda09155e2",
"main.dart.js_19.part.js": "be6b9672da39fab9fd1a691b3da7aec2",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"version.json": "fa70d0ba0632358eba53c20b2c041936",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "a2f977f92b166e9151fd4f339a226576",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js_8.part.js": "7e430bcffdb30ef4d7702a7507a794a3",
"main.dart.js_5.part.js": "47c3d6678f6131b427120d3e29864daa",
"main.dart.js_16.part.js": "e0307ae3226697dcca9956c7cf7695e5",
"main.dart.js_17.part.js": "c5d2ca6511c4f4d63c441a35cbf5b539",
"main.dart.js_34.part.js": "e12cc68fba345949988e85174bf801f0",
"main.dart.js_39.part.js": "60a519d5aa6ed4a8e9191faa7fa029a2",
"main.dart.js_13.part.js": "bd2c21d4ea16bc997dd5e0798ff455de",
"main.dart.js_7.part.js": "de4eef13a0233b5e79c571ffd104f3ef",
"main.dart.js_41.part.js": "823bbe2c4419951c534f90b560c830f5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "3f480d4b50e3b6ca102f3c9a3b8dd8fc",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"main.dart.js_10.part.js": "2ce897219dcfaada92ffaccb4fecc985",
"main.dart.js_18.part.js": "f0081f6605a1621aacda008498a28aad",
"main.dart.js_6.part.js": "9a094e5a982561e5db6698a03ad6f706",
"main.dart.js_11.part.js": "aac2be06e7433ea2c311e336f770ecd0"
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
