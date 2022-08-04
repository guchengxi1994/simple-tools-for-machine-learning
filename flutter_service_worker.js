'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "1e5e290abaede7848c03f9f6d4f15a9c",
"main.dart.js_40.part.js": "3b17691336bc8d0bbf3c52119368d6fd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_67.part.js": "e8419c13a82ce4739e453f28b22565be",
"main.dart.js_4.part.js": "c43a1d44c60e55c91ee14a4a2de8325a",
"main.dart.js_68.part.js": "99d23d919c8db711b6b12f8a28f507e5",
"main.dart.js_27.part.js": "0f624a45b760b3bf0b35a868b3df0f1e",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "1c9a8a7d6414b9681773ba02b9eaf492",
"main.dart.js_47.part.js": "aa0413899d7251965b11f5658ebee960",
"main.dart.js_63.part.js": "44653a91805272815427e42292ffe06a",
"main.dart.js_62.part.js": "1850ac534f1d8fae0fa5cc177fd6f008",
"main.dart.js_32.part.js": "c725250cd1295509142104534c3e0515",
"main.dart.js_59.part.js": "d8e698cbb0ecf8fad8d334b4e2343689",
"main.dart.js_3.part.js": "653b8812899a2e29973f3d4a21cd4982",
"main.dart.js_50.part.js": "5a8d5326d19b4a91ff50bd11da94639d",
"main.dart.js_37.part.js": "4f4539c5ecdf8bf415dfd85d32652ec3",
"main.dart.js_58.part.js": "bfd29e221ba643c0cd6be43928266021",
"main.dart.js_48.part.js": "fd17ed1334ff2ecaa19570c150433c9a",
"main.dart.js_31.part.js": "8543272cdf76ddac242ced8422260000",
"main.dart.js_44.part.js": "1c3319ef9349252427e73c5060ec4bc1",
"main.dart.js_70.part.js": "c85cdc9c4b3933a230980b621d282ee6",
"main.dart.js_24.part.js": "041c24bec1ab1425da2c0445571c1e70",
"main.dart.js_23.part.js": "b7e127d94cb154e7c362e783f75027ee",
"main.dart.js_26.part.js": "75439d15f1befdc538e6293e57498c4c",
"main.dart.js_57.part.js": "95a22cff9a1801c6f65e49ef8ecc410b",
"main.dart.js_30.part.js": "615808c20baead5efe9656a0c5f08e88",
"main.dart.js_29.part.js": "a3e0ef38029fc221113c7a4e0e3ca5e7",
"main.dart.js_33.part.js": "2b0b52afc19a1501aa651f58ac088a29",
"main.dart.js_38.part.js": "14acb841270ca6b02f36576e0a103a85",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "c483859f136b19d17dba9352560aeea2",
"main.dart.js_54.part.js": "641a616268ff81c0f5b891fe16e31c14",
"main.dart.js": "f97053d7a67facee5ecc1d752ee5563e",
"main.dart.js_25.part.js": "03a58191c60f412eb0e35524083ed7cd",
"main.dart.js_14.part.js": "58c0b27c44519043db4c5a62d014e2ac",
"main.dart.js_1.part.js": "d7bd38f37ce1e0907fed576b413914f2",
"main.dart.js_9.part.js": "80a91f5478c1a40af3dd99d2bb4c91ad",
"main.dart.js_19.part.js": "d0f84ee61dec306641a143771b8577bb",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "4852a33e8cc8c025709a0321f3394c7d",
"main.dart.js_43.part.js": "db2e307e2b0d27a0b718fb2913f55a94",
"version.json": "63d7441a81fa9cd28444c2593b802ca3",
"main.dart.js_42.part.js": "a1533553371044c524958597b759a103",
"main.dart.js_52.part.js": "03135d5d48b8daf4453044078ce3df88",
"main.dart.js_51.part.js": "bc9aba202b5706a825af0bc9bb5dc13e",
"main.dart.js_56.part.js": "e805b9815e9f3ce4a20c4fa5b90bdeb9",
"main.dart.js_55.part.js": "6ca1f8feaeac3027ee3dd6a84c90e02b",
"main.dart.js_53.part.js": "4d639859e679d75f9a1fab78e0f6d49e",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "5818f370e8ff0408b757175945334c01",
"main.dart.js_69.part.js": "19fe8050b5843715a2e0526a17762c44",
"main.dart.js_49.part.js": "d7af7cd56e74e76bdf718438e32090ae",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_15.part.js": "67835098bdf2b2cebb6564de53d60f8d",
"main.dart.js_8.part.js": "3a6390cf1b40ce2a4491b3247c8b8584",
"main.dart.js_5.part.js": "9358362becc0e9c77fd70cec5c7d16c6",
"main.dart.js_64.part.js": "859aec2c9b982f6f1957513782642abc",
"main.dart.js_34.part.js": "47c508d18931ff45f7b8f154d698b61e",
"main.dart.js_13.part.js": "e782ce5401b2f8eee70e739185cb9fe4",
"main.dart.js_61.part.js": "342cf4705223ff762600ad3c70c19378",
"main.dart.js_71.part.js": "92716b5ad808a915d87648db553d5d14",
"main.dart.js_60.part.js": "eed6f22bba30b3978c102c419246dbb9",
"main.dart.js_7.part.js": "0accdab373487ff6b4612afd18df0ff6",
"main.dart.js_28.part.js": "72dbca6767c547980d0d0f932f28813c",
"main.dart.js_41.part.js": "8322488b322f23e6b6df8eeb71466298",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "70ec429e9f4fa9924ed940a7ba104e6e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"main.dart.js_10.part.js": "231057b8a9f4640334d69173cf766a97",
"main.dart.js_18.part.js": "18e384997bd7af91d6e807fb113a2e18",
"main.dart.js_6.part.js": "952ae1c120a1931f994c3779435942bc",
"main.dart.js_46.part.js": "e73cf83b108a21faf5597d50e660e44e",
"main.dart.js_11.part.js": "a54250f12652159c62ca8d7e30fb79b8"
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
