'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "53fccf3904f0274440e64603756ec83f",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_4.part.js": "42bdb2a05648ed9b853247bd012902e1",
"main.dart.js_68.part.js": "178610ae2906e9ba6f40cb3e6f4322e1",
"main.dart.js_27.part.js": "b2c1759e2a92e17164c40def890e15be",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "1d49cfe2803483f0ff42e219bff6086a",
"main.dart.js_47.part.js": "45c578d4ebbcfdbf63fb2ba557d85d0d",
"main.dart.js_63.part.js": "8661ce678f6f0f672b246af9ac4b255c",
"main.dart.js_62.part.js": "0709854ecd268680835aab115ca35cc9",
"main.dart.js_32.part.js": "7ab9557d98580a9ed8efaf2067c7a7fb",
"main.dart.js_59.part.js": "3825556158a96016fac99dbc6129bb38",
"main.dart.js_3.part.js": "8b292e8537675ed95903b05672cebf1d",
"main.dart.js_50.part.js": "6f4573c38df71ed60bbbfdcc6dd183e6",
"main.dart.js_37.part.js": "58a8a6b829f49cda488dfb54f5502041",
"main.dart.js_58.part.js": "59f436ac18d30d7697496a6501da926c",
"main.dart.js_48.part.js": "1b19792302237fbc7e8a2c243086bb94",
"main.dart.js_31.part.js": "8009cc594f726cbf013606113db6efd4",
"main.dart.js_44.part.js": "561b310a544e2593fa895110fa823928",
"main.dart.js_70.part.js": "4a96af795c6ca67791259bc362e07900",
"main.dart.js_24.part.js": "1cd1d3d43b478a3a0e1c9fb80635614d",
"main.dart.js_23.part.js": "58d6b5553b8f856981ee5b0456548b87",
"main.dart.js_26.part.js": "7d90eecb617d60b61a65057270c6c09b",
"main.dart.js_57.part.js": "d904a03abed9002e756fdef4e001f608",
"main.dart.js_30.part.js": "658f2b6f1fb685164fe7c65d36521c1f",
"main.dart.js_29.part.js": "0cc139035fb871a7589af8cc09cbb59a",
"main.dart.js_33.part.js": "5272883996478b63399e0e4bc034c3be",
"main.dart.js_38.part.js": "65b7794bedcc1d32f36ec06b05434727",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "4b4acd802b450c085b53cb7d829cdc0f",
"main.dart.js_54.part.js": "815b4a0bb65f35334a67ce6700d3f037",
"main.dart.js": "f4372bc6a587fc19f8d71dc1a3e3c006",
"main.dart.js_25.part.js": "eb7d6952623a40ad2da1496627adaca4",
"main.dart.js_14.part.js": "f28e768e01dea823dfb5ad6aacc98460",
"main.dart.js_1.part.js": "a6625630619a2ceeb5c2cebf99b520f5",
"main.dart.js_9.part.js": "7d8208bda13bb4dea8b21915659f2af6",
"main.dart.js_19.part.js": "5090f83a1df0826c1f2639613b367943",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "40594bd07ab3f17a540a000952635480",
"main.dart.js_43.part.js": "6fd4884e5d0bb633dc88029275e0e967",
"version.json": "c3b970cb4bd184a30ddbabb656a22e8e",
"main.dart.js_42.part.js": "70eae585b26445c074b15ec9f22a0fa4",
"main.dart.js_52.part.js": "475f5337e1167220187b10f8a109db15",
"main.dart.js_51.part.js": "80bba06e6e641763d4f7fa71dfdfb2fa",
"main.dart.js_56.part.js": "b5639ca1fde9954c422a8e9b2bad8c45",
"main.dart.js_55.part.js": "d316f0a64430b5f48a7ca486ccfaf7ac",
"main.dart.js_53.part.js": "b18427a094fbaddfb72509a232382f89",
"main.dart.js_72.part.js": "d2c01436b2c1ea558e11f849462f536d",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "2c77aedee8090c9d08d15176540a292e",
"main.dart.js_69.part.js": "aac709e8782be326d6c28b73c6867a77",
"main.dart.js_49.part.js": "c6bba139f12e68022e927aa4b09e7ee1",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_15.part.js": "4831c69d3e197c9ba847248aabbe4bef",
"main.dart.js_8.part.js": "593106a244a3d1870ee74f3f2a3e5a4d",
"main.dart.js_5.part.js": "ddb22833ec3125dffcbf2ef40b0fa066",
"main.dart.js_64.part.js": "2f0175589d0eb36d9a142bf32abdaf93",
"main.dart.js_34.part.js": "1d9317ed34ee5b056fb4b3be2da7f21f",
"main.dart.js_39.part.js": "4f4a53fb170cc0bcf604a9cc5522abf2",
"main.dart.js_13.part.js": "30b02de42709db28b1b4f8e2c74839a9",
"main.dart.js_61.part.js": "f3853624a99b3c08d9f3d2209110fc5a",
"main.dart.js_71.part.js": "c32f11b9e55cfe66d0523a421fd88b93",
"main.dart.js_65.part.js": "f2a37854bdf17c8a0a85d6ad93560cef",
"main.dart.js_60.part.js": "b4931477335237ceb6af1a72285e80ac",
"main.dart.js_7.part.js": "f76c0b3561f421d706ee1d9fd4065f11",
"main.dart.js_28.part.js": "c3c389b6e1394ccaaac3e4d9be73117d",
"main.dart.js_41.part.js": "80a6414c76a749140a1625c4d5829df8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "f45849adda16b7c9229f5a7d85d98dba",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"main.dart.js_10.part.js": "25b20764a3629a49937c4b9cf6c41695",
"main.dart.js_18.part.js": "22f2fdb4943ee83d691156dca302caaa",
"main.dart.js_6.part.js": "ceb6e9eb44946a5d7add983a49558731",
"main.dart.js_46.part.js": "010b888aace188f39ef43ea9f2018617",
"main.dart.js_11.part.js": "7ea637872f3421ce868beae61101f800"
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
