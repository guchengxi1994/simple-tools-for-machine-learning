'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "d5ee37c7862a2f84cdb33a70169cb2c1",
"main.dart.js_87.part.js": "7ed500dd163722ccc193e2f1dff36dd1",
"main.dart.js_40.part.js": "377647e6159d3e71822213b3051973d4",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_67.part.js": "1a6587418c8422271edb47b031ea5b5e",
"main.dart.js_4.part.js": "34a937df5a615db22cfcb5a2da8a69ac",
"main.dart.js_74.part.js": "ed61b0d1f0c0219aeec7229079d332c2",
"main.dart.js_68.part.js": "8495aa8c6d47270482367b2b840faebb",
"main.dart.js_27.part.js": "478129fb120fd1c49686c75e76e611d8",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_63.part.js": "f339b45394d43cec7547461538bd4514",
"main.dart.js_62.part.js": "02253c3a0976c5e0552cdc0408000f6f",
"main.dart.js_32.part.js": "953e8e1b7720c87132664c4b61e54495",
"main.dart.js_59.part.js": "3adf79c16517ede3f6f4ff5c84efe58e",
"main.dart.js_85.part.js": "949dd6d9bbc3cdd98fc688620acd70c2",
"main.dart.js_82.part.js": "567cb7cb6ea5b710f24b306ac4bb7d81",
"main.dart.js_84.part.js": "73ed839b7ff12bcb40bfd51f19a5bad4",
"main.dart.js_3.part.js": "a75ca9a238de711cc270ce3d7c33f499",
"main.dart.js_50.part.js": "b23f6da5082ee68137c51fcdee12d3ef",
"main.dart.js_37.part.js": "5f0de3ce292857ff777b95afa9482a2e",
"main.dart.js_58.part.js": "ebcef1a4d723402adabfd38984508054",
"main.dart.js_48.part.js": "c97461dc7a2140707eff783abc49a907",
"main.dart.js_31.part.js": "eeab51e9eb3dd3fd7cd60261c2f5b2bb",
"main.dart.js_44.part.js": "1cee1c7734ce28cd024ac6b16a6b70fc",
"main.dart.js_86.part.js": "4411ccd068559319cda08b35ee60e0d3",
"main.dart.js_70.part.js": "b38bec139e255daa30ddcff5b24e5737",
"main.dart.js_24.part.js": "6160842e69219b859b3224f31d841dd9",
"main.dart.js_23.part.js": "d06462d6b5e4043bf278893f5ef542b3",
"main.dart.js_26.part.js": "b4d707a50654b6aa70f30c78b1123889",
"main.dart.js_57.part.js": "f0f2f64e7b6efce369f227457cc8cd47",
"main.dart.js_66.part.js": "cd58225169c7aac7f30d73c272b8f789",
"main.dart.js_30.part.js": "524a052133efd3d994974b2b069708d8",
"main.dart.js_29.part.js": "a5f9b140d2006d8f2c5196c84518ca17",
"main.dart.js_33.part.js": "8b3f49231ce3f189d193b8895c572171",
"main.dart.js_38.part.js": "f1129977acff8dd85cad34df6dadd9d3",
"main.dart.js_81.part.js": "73d284f431c719d1fe844a64250b1444",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "9cb31404e279acf91a7e40386f92149e",
"main.dart.js_54.part.js": "3f9f349c363265fbba6507480b4f877b",
"main.dart.js": "a147eb12b562b512f599eafc4f44c9dd",
"main.dart.js_73.part.js": "eeefee1c60394c0f8f4516b851f2a21f",
"main.dart.js_25.part.js": "6bdc0a2c6163a15a95cc9b0df01e1f75",
"main.dart.js_14.part.js": "6dd4e88bae03fac397d334d9fcb26bf7",
"main.dart.js_1.part.js": "d56968d3f4d48887110b7a7c182dec5f",
"main.dart.js_75.part.js": "3ee9f25f6469f6cf54d37bb20786a939",
"main.dart.js_9.part.js": "4d89aa160384c10dd9e42e88aab145dc",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "eec20e18d2e30550b8a0389692b37d0c",
"main.dart.js_43.part.js": "b4b876c837c28345e538da55e2d168e1",
"version.json": "7d71abfeed91fc07462b789a0eadc5e8",
"main.dart.js_42.part.js": "9efe748e1443de32b8bd1e9f149cb558",
"main.dart.js_52.part.js": "fde7c347b7aff1370479a2b24a9e4dac",
"main.dart.js_51.part.js": "e08a7b7c47ee82081baa99fcee2804cf",
"main.dart.js_56.part.js": "72841fbd32f0af58e886d817d709eb90",
"main.dart.js_55.part.js": "6fbd6f56e621a3cdef5a35ae14c408f3",
"main.dart.js_53.part.js": "138ad2687a213323a4ff26423b887d71",
"main.dart.js_72.part.js": "a2fa084511350d51f9834fdebb49769c",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "e8287c1426a1a53ec32310fd690a5181",
"main.dart.js_69.part.js": "25030ee5a1ed7005770a8921ff8b59e4",
"main.dart.js_49.part.js": "ef24759152450a1ddc5ad76a0b951348",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_15.part.js": "66583dec51f3daf113374eb3b6b8fce2",
"main.dart.js_8.part.js": "3d9148bce563da51e642abfa0f7032aa",
"main.dart.js_5.part.js": "e312034f88f7497aeecb7fadac3b6310",
"main.dart.js_64.part.js": "9a62d46f9adb530ad25e61bfe8608c87",
"main.dart.js_34.part.js": "3ee4b496587f96de42d69041b60fa873",
"main.dart.js_39.part.js": "7ec1a584f0ee2766a07fee6e2b280fee",
"main.dart.js_13.part.js": "f944079ced3f69780393843e212195db",
"main.dart.js_61.part.js": "b96433cdb2cde650d1eab67d063aa181",
"main.dart.js_71.part.js": "af54b0863c3e5c6a15e78641ccc5f064",
"main.dart.js_65.part.js": "2f14d6d77121c1d5a831456fa0e8de5b",
"main.dart.js_60.part.js": "4775634f07efe4d7a245405c67068857",
"main.dart.js_7.part.js": "765dd75db0a3788979da821b0c84d0e8",
"main.dart.js_41.part.js": "234a6683b965eb4307a0fe71d668c703",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "f45849adda16b7c9229f5a7d85d98dba",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"main.dart.js_10.part.js": "674693285faa623f4dc6737015a12da5",
"main.dart.js_83.part.js": "014eaf16cf81fa40a22ba22d3a90a5e3",
"main.dart.js_18.part.js": "74dd87f617408ddc998c15d3daf8b4c6",
"main.dart.js_6.part.js": "ca6b91d93bf52d3eee48a17f0f4ec19f",
"main.dart.js_46.part.js": "877a79b6746f19a9a2914b51ed66f52a",
"main.dart.js_11.part.js": "bca35729e8e1eb43896943813e285bc1",
"main.dart.js_88.part.js": "c246b2143bbad4e32b7e3a78441f16e9",
"main.dart.js_80.part.js": "f01c0d1d5846eaf47d3efe2fa6f58cc8"
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
