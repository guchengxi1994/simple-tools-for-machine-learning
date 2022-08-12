'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "4a25cf18d48e4637fc5c920a11296e87",
"main.dart.js_87.part.js": "c38ebb563d73a88cd72246c113e7f3fe",
"main.dart.js_40.part.js": "9929267f09a4ed719967144ca25e9fa3",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_67.part.js": "681644aa918ea7c40fd70dd3064651c0",
"main.dart.js_4.part.js": "deb358499f4d6a29b892731859e435d4",
"main.dart.js_74.part.js": "01db3e3134136e29aee7eb462e347386",
"main.dart.js_68.part.js": "e02c074bc19613aed15977c29ef717ae",
"main.dart.js_27.part.js": "4cb985cf8fa9cff9fb12045f09998b72",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_47.part.js": "8c17c1ba5d317f3bb78e7a423f3c5ab5",
"main.dart.js_63.part.js": "38aa0aed823e0e9980748f1bb2890af5",
"main.dart.js_62.part.js": "f0fbb5a710ccdc48b842d1613d6fac31",
"main.dart.js_32.part.js": "f70aed36fe26d26c87b30a231faf9cba",
"main.dart.js_59.part.js": "539d038c42fa933d331cbd60f3ffed8a",
"main.dart.js_85.part.js": "5efb5aa4e39c1df2370b9ae3415fbc94",
"main.dart.js_3.part.js": "90af0924e4f259ade4b2fbd4ae73b2b7",
"main.dart.js_50.part.js": "77ee88e133621b681c38f7637c0009de",
"main.dart.js_37.part.js": "7aff5cb1a2335b8bca85bc49cdab331b",
"main.dart.js_90.part.js": "e3a7f5346473534eb922505461ff34e9",
"main.dart.js_58.part.js": "815dd7f8757443afc0e25723190fb606",
"main.dart.js_48.part.js": "af103bc1eae6b0071744fbfb1e00fa88",
"main.dart.js_31.part.js": "ce10152a8460e39a0bae6dd2bb0a02ae",
"main.dart.js_44.part.js": "0c39e215b0f66f93324ffd58cd39b980",
"main.dart.js_86.part.js": "8bbdc246ff01f55b3fd2055650486ef0",
"main.dart.js_70.part.js": "5f2ac5f4a9fafd37614d026de594eba4",
"main.dart.js_24.part.js": "9be1ecadba206b4abdd8902a6650ed3a",
"main.dart.js_98.part.js": "fc4c98ba1164cf889eed500b4bbfc864",
"main.dart.js_26.part.js": "3c013d9ed9961bc24d9e3af96f1f8096",
"main.dart.js_57.part.js": "f1272a15fbd4880fac6ae6edf72d6cdb",
"main.dart.js_66.part.js": "26f64f721a5989beae5d2886afc8c88e",
"main.dart.js_29.part.js": "7184f336f71f7a4e4eb6cc0393fd0984",
"main.dart.js_33.part.js": "0b9dd0470e8078266955ca8e45051134",
"main.dart.js_38.part.js": "9a324ceb3207fcb846fd203a602779dc",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "738f9a891f9708470e84f18791587a45",
"main.dart.js_54.part.js": "f99e4e14e03ec3b7afc6e7c8e289f57d",
"main.dart.js": "d2365c0fc51589dab26d19ff6772fadd",
"main.dart.js_73.part.js": "527a74ae78c4a85f5b4d4b77fba71870",
"main.dart.js_25.part.js": "ae65b9913d04d041298f69b405d83c93",
"main.dart.js_78.part.js": "31c5d2fc9f2008f1aec39eb480a6d961",
"main.dart.js_14.part.js": "9ad4f3ee6cf4e3abf1883bce5cdc5a2d",
"main.dart.js_1.part.js": "d654af414c8ef8b79f9e9a5678e6f62f",
"main.dart.js_75.part.js": "d040155c7ceedd0a22fc298fb46b7903",
"main.dart.js_9.part.js": "91bc8c09c83f4dd881f9c486a06aadef",
"main.dart.js_19.part.js": "82aa97fb45e801395a1428e70a54de08",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "6981699a693358ca89b22cf1a354bfd8",
"main.dart.js_43.part.js": "d6e129777006d160299c9c5882140219",
"version.json": "fa4a1c76d94eab891de37aa415745342",
"main.dart.js_42.part.js": "505449b02dcbc71926ba42d59d0b5b68",
"main.dart.js_52.part.js": "43472b7f3f73c46d9e392756dd947361",
"main.dart.js_56.part.js": "49fe225fc303782f592bea64b6c7f87d",
"main.dart.js_79.part.js": "bca685b0e7e5551e22422f2fdb76e480",
"main.dart.js_55.part.js": "e2cc5ab7318e3f6470a13d41945f6d1c",
"main.dart.js_53.part.js": "c245952c1a46ee69cf6400340e660d5d",
"main.dart.js_72.part.js": "721723d86e090b73eeb4d0b4f1ae9149",
"main.dart.js_89.part.js": "7d0c76ec5de163b5f6d176f77cdcfba6",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_91.part.js": "61480d2e0d5379c59a5cfc9b6dd3f485",
"main.dart.js_36.part.js": "69d3a6d6985d3ad888f1d3eee14d7736",
"main.dart.js_69.part.js": "82d14fe15b943eab320965d198bd1188",
"main.dart.js_49.part.js": "724964b2aa80232e815156b3807f7ce6",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_15.part.js": "e5dc75bcdf2a7706816f47f588150c72",
"main.dart.js_92.part.js": "cf3a3f2652fe01994a8b51bd6e211d48",
"main.dart.js_8.part.js": "a912c9e4a4f92072740c7c8dc8c4162f",
"main.dart.js_5.part.js": "055a3a9dc0fbb12fa8626c30dcff8181",
"main.dart.js_16.part.js": "c80ca4d35add03e7cf7fc4294b780ba8",
"main.dart.js_64.part.js": "af16fd57d1ae735bca0900e3da2bcbbc",
"main.dart.js_34.part.js": "090d17563e5a5fe6c0b92fa3269b2e6a",
"main.dart.js_39.part.js": "5239fce6ec5eecaf3ed8a50f32db2f29",
"main.dart.js_13.part.js": "f607daa6162bcf5917bd72b646528720",
"main.dart.js_61.part.js": "1e46cc0948941a510c42347252001cee",
"main.dart.js_71.part.js": "6df0eedb4cd04fafa9e3bffbb7fcba8d",
"main.dart.js_65.part.js": "5ea462cdffe70bd6c107048adcfe41ba",
"main.dart.js_76.part.js": "bcb4e9d2fe266016a77fda6cc310a0d7",
"main.dart.js_60.part.js": "feb96633c010eeb9db7c833024d48f02",
"main.dart.js_7.part.js": "0012bc0a9613a0940893bc707d366fac",
"main.dart.js_28.part.js": "90aa1c005275881204efde004eb8577c",
"main.dart.js_41.part.js": "d1a3293c73ece3d1dd9cbe6ba2493dd9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "fd4082173963fec73976c21509d157e0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"main.dart.js_97.part.js": "500b394996b133d84df72c863fdf4724",
"main.dart.js_94.part.js": "bc471308bbcc82a1f64bc990164a6e9e",
"main.dart.js_10.part.js": "fe0f977a9256b63b5a87d70d5d29b56a",
"main.dart.js_77.part.js": "6f7043a62f30562add9ad8429db073fd",
"main.dart.js_95.part.js": "969d2004025b0040492c3d0202739614",
"main.dart.js_96.part.js": "d37532fdd4d98b751e5828e7f52e3365",
"main.dart.js_6.part.js": "834575684cf4c1e129ff7aa1a213987f",
"main.dart.js_46.part.js": "8ca1374bf1a6c1f254e8e58b2f4c2be6",
"main.dart.js_11.part.js": "ba93f1267d60551d86c3529e4b927ec7",
"main.dart.js_88.part.js": "f69d82d24cceb97ba82b1602c3e32444",
"main.dart.js_93.part.js": "460b034414f8594bd6b2db73fd5edc1d"
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
