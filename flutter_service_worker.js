'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "36c5ccfda1041e0a91e32c901e41ee54",
"main.dart.js_87.part.js": "470a0ba08ab7ed6d67caba731b1b2266",
"main.dart.js_40.part.js": "1b04e873478281bb57e9f32249c1159b",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_67.part.js": "7640fc3b0d075964e508cbd8d7ca3a63",
"main.dart.js_4.part.js": "a9fb85ae6bde682b74c6a5ab696861f4",
"main.dart.js_74.part.js": "3f664349c2c47d2e011768966734b0c7",
"main.dart.js_68.part.js": "747a4d71ee77263106d1876a9cc5d996",
"main.dart.js_27.part.js": "55580ab0b41866a7b09b047470fc6d44",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_47.part.js": "7b967e204c5dd4312dc4ecd7f796f60d",
"main.dart.js_63.part.js": "707a224506137909466cff312f501382",
"main.dart.js_62.part.js": "c4bcdcf99f15a476c98327d3a14a124a",
"main.dart.js_32.part.js": "8c5cab4094d392fca7b36700b1c91ef7",
"main.dart.js_59.part.js": "8d734e13881057600760a2fa727bb80a",
"main.dart.js_104.part.js": "c8ac9d8219ea7cf4fcfad67ece607e74",
"main.dart.js_3.part.js": "4f9f9d821924b165a74bd073531339b2",
"main.dart.js_50.part.js": "3055ce39a66a59535238d35fa5082265",
"main.dart.js_37.part.js": "5683172f82c0f36b1ca8bc4857f49fc5",
"main.dart.js_90.part.js": "432756e821a267d5c7035754ce6df244",
"main.dart.js_58.part.js": "3eb80afa48f052aa71a12c5e12e49235",
"main.dart.js_48.part.js": "6d8d6020b08647d159c74f5df5c52f0f",
"main.dart.js_31.part.js": "31e8455a42eaf36e9cbe92915a07e332",
"main.dart.js_44.part.js": "564e1042b70fa890e400775012426706",
"main.dart.js_21.part.js": "df35700d1ab8268b1ca803f60401d521",
"main.dart.js_70.part.js": "35725ecbc12bd9dcf85f7e3da605f2a3",
"main.dart.js_98.part.js": "c03caa403d0b94f3b8bbc77044810b69",
"main.dart.js_99.part.js": "548be17fa12d417db24b0fe9f5f47175",
"main.dart.js_26.part.js": "adb94d41f57367709e90aa31a96d71fd",
"main.dart.js_101.part.js": "5fc72f7b150def990077e0e203788cbb",
"main.dart.js_57.part.js": "d33de636afc7d4f1edb6aa172b84b075",
"main.dart.js_66.part.js": "ed7e205d614bdfe5bedb0427416d4341",
"main.dart.js_30.part.js": "29d9096654d738759efe4f333f8b8571",
"main.dart.js_29.part.js": "dce8b1f6176f20c0da3a298eb338ae14",
"main.dart.js_38.part.js": "4735a052ceea2be2efdf7af227d3bd31",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "bc0b159c24617e920eeef98ef478a28a",
"main.dart.js_54.part.js": "ca0332a2e69744d710efe9549ac357b2",
"main.dart.js": "643b24a8ec38338d01edaf1e885c3c48",
"main.dart.js_73.part.js": "55f1b2dfb80f02156fcbafa4906c0c41",
"main.dart.js_78.part.js": "7e80ca633edce7f9faa5388b1a810f85",
"main.dart.js_14.part.js": "870ea1365037c72ac3ece583bc05f6bb",
"main.dart.js_1.part.js": "b0bbdff34bc6e1b5571550c8af0bd00a",
"main.dart.js_75.part.js": "44ea5ac5085eca868c6be6acc73a2da9",
"main.dart.js_9.part.js": "aa472d5fbb19efa5a5e72bf676824c76",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "bef2f4ead3d89261dacbf8d4b778c7bf",
"main.dart.js_43.part.js": "2680e1961a33deba6f7b0b48eaaf8fcb",
"version.json": "fa4a1c76d94eab891de37aa415745342",
"main.dart.js_42.part.js": "2442391214a1aed735ee19db4926cca2",
"main.dart.js_51.part.js": "de1fef550cf60d5fdd6b9193d8a2f799",
"main.dart.js_56.part.js": "0631ac0be816fdde6bfc573c38c8ce2f",
"main.dart.js_79.part.js": "e1386ea9ba7bd52903493a959c876f02",
"main.dart.js_55.part.js": "a9935ef65d621c7796546ba943f4c3f4",
"main.dart.js_53.part.js": "3707a7c68de49d78e2156b22fb5d5e6a",
"main.dart.js_72.part.js": "3e7d591b58fdd9167960910dc22b9f50",
"main.dart.js_89.part.js": "0263ceb84b91eb1fab87a99c812cde13",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "c33e57675ac178ceafe56973ae18065d",
"main.dart.js_69.part.js": "0a3144289e251d5705a786671f9f64af",
"main.dart.js_103.part.js": "73f0754302bccd57ca4be29472be6f29",
"main.dart.js_49.part.js": "d9490426e7ea9bb764c5299bab0236c0",
"main.dart.js_100.part.js": "d2549b2e00be8966171050010b7bcd91",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_15.part.js": "e7f8bf3ebdb7925227646bf1c06bd5aa",
"main.dart.js_92.part.js": "ce9f278f3c7fd55fd7633ffa6d659d24",
"main.dart.js_8.part.js": "08c50d2dfa8e473c18aeedb57627d6b9",
"main.dart.js_5.part.js": "b1f1b683e526a265c7eaea5cd22b3852",
"main.dart.js_16.part.js": "3f0d235bc0a6a7e6381df80cff329037",
"main.dart.js_17.part.js": "56a7fb12ab6f73968f6d0cde7aec515c",
"main.dart.js_64.part.js": "e092981670464624e724af124743b0b9",
"main.dart.js_34.part.js": "d5b98b5b485a6a527aad08e1591a1526",
"main.dart.js_39.part.js": "cf23ebfff1018ababbc3652de2f7b00f",
"main.dart.js_13.part.js": "6d86110465e402daecd130f9b9632a9f",
"main.dart.js_61.part.js": "1525af342723e470eaabc109c87075f6",
"main.dart.js_71.part.js": "57d5d8bfdec4a4e695c4cbc4d8854eec",
"main.dart.js_65.part.js": "a5fdfd64b7ce85f191b69d49ffd7ad85",
"main.dart.js_76.part.js": "91c0ba6cc4faf68d90d48c53c6c69ab7",
"main.dart.js_60.part.js": "2af5c74a71caf2f3dc7180e4bbdffb9c",
"main.dart.js_7.part.js": "aae54058bd8cf7c6b9174acf9afdb495",
"main.dart.js_28.part.js": "f6f7b61d730488ade052a4e95eab3a39",
"main.dart.js_41.part.js": "e2e99a437cb52903cd1f111313df6d87",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "fd4082173963fec73976c21509d157e0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"main.dart.js_97.part.js": "23851b977f6703d799db82384fec80f2",
"main.dart.js_94.part.js": "f2dd946045f1e816152ea14e1dd48ea7",
"main.dart.js_10.part.js": "d02ce3b20766f14a6544eb70e0e4eb92",
"main.dart.js_77.part.js": "76c82b0d4143cd1712908678b39ca480",
"main.dart.js_95.part.js": "05a7037a4b19c3f310d1f8fbc4c52e19",
"main.dart.js_96.part.js": "5efa076355691719f4f38d8999d2275b",
"main.dart.js_18.part.js": "1103a8d26a7c9f0d11209d9a8b97680a",
"main.dart.js_6.part.js": "d1b6d1b530dd527805a8a665931e3cc0",
"main.dart.js_46.part.js": "5e46c7e04582952cfd56c310a83d988c",
"main.dart.js_11.part.js": "ba33eb7e9b5286e012280b6f89702be4",
"main.dart.js_88.part.js": "ef4ac2e5d9eddff92ebe1193e1af2f9c",
"main.dart.js_80.part.js": "f2b95fc3d57b8ea0c1aa30ba485a5edf",
"main.dart.js_93.part.js": "ecda080f2d3b35926ad61cb47a6c4976"
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
