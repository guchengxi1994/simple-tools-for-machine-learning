'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "db3db3d831a0e966809c06936013628c",
"main.dart.js_40.part.js": "db24c1c21dfb63fd9ae35bb934258bae",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_67.part.js": "eddc90eaff1b61841ff623e2e76b13b1",
"main.dart.js_4.part.js": "17ef3ec35ed80ff57990c1c77afd157e",
"main.dart.js_74.part.js": "843ae5140713816b5a78446cdf7e0e20",
"main.dart.js_68.part.js": "8fa16124b667db096365b54f54bc089a",
"main.dart.js_27.part.js": "6a53e3c295e87020304e9c6baa7fb82b",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_47.part.js": "275ac9d179c9458e4c6a596faa6627db",
"main.dart.js_63.part.js": "4fb96dd2551b87eb41f6d1cc6809b8a8",
"main.dart.js_62.part.js": "8929116e68c1088b96129f5eb6badb3c",
"main.dart.js_32.part.js": "7cc889a285d6f0dd3d30fa7feed22a8a",
"main.dart.js_59.part.js": "fa870926f5a727953e6c656c8372be8c",
"main.dart.js_3.part.js": "7170703a68dcc1c7ba46b341442e5059",
"main.dart.js_50.part.js": "d27bf084271baeee162abcbd844c42c3",
"main.dart.js_37.part.js": "06da3b5bb5fadaeafd2a709df950da7f",
"main.dart.js_58.part.js": "007d1ed7e8ec770ecc3f1099a4e9c036",
"main.dart.js_48.part.js": "f3d534f1654cb3665edc662584457924",
"main.dart.js_31.part.js": "e30393f371938ededd4ac3ebc78da71a",
"main.dart.js_44.part.js": "bd0d3dca53f39a112d5d7ab45bf1caef",
"main.dart.js_24.part.js": "a3cb947b7de9c7847525e96764edde78",
"main.dart.js_23.part.js": "c3b1228da5e3e4e80552c495b02264ce",
"main.dart.js_26.part.js": "b3b652ec86554ab453d66ab3e03d4931",
"main.dart.js_57.part.js": "18378c6020f2358ee8217119742f00ad",
"main.dart.js_66.part.js": "a548124d3f9770a003855086bb612350",
"main.dart.js_30.part.js": "e2aaa317c855d38c77dac6fc977fb1f5",
"main.dart.js_29.part.js": "62852eb8a8b7781eabc8196d0185caf6",
"main.dart.js_33.part.js": "43b499513fd9a51002ae0f631422c1ac",
"main.dart.js_38.part.js": "fdd6092aabc9fcde49e3524f6fa7af71",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "c49547b843ef05a20751471e6dee95e8",
"main.dart.js_54.part.js": "476d2ed8bbf3a1638137eb2a9a6e3071",
"main.dart.js": "66641623eddf2816b5a76b1eb3b2243e",
"main.dart.js_73.part.js": "80f4469331757b3cdbf37debeab79374",
"main.dart.js_25.part.js": "8ccfa716fabcde5113588ad8c71858d4",
"main.dart.js_78.part.js": "1b232b5e7bf039192473f3fb1d2ca0b9",
"main.dart.js_14.part.js": "9a7aa3ffd42f1ea66e445c28f97ff89c",
"main.dart.js_1.part.js": "656d698acfa12c028be59a724e5baba9",
"main.dart.js_75.part.js": "f0a6134bacf15e1d8d4957df78a3345c",
"main.dart.js_9.part.js": "90a104960bc86c741f890a9d34f6453e",
"main.dart.js_19.part.js": "0b385a1b05f6781f8cc5bb5638702248",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "63ae424295d973c25226c720e47fb982",
"main.dart.js_43.part.js": "4ff72d5df5dc82b873076612d622bf2b",
"version.json": "debfa0d0e1106e25183b1c606ffc07fc",
"main.dart.js_52.part.js": "2ddf03e453da00c736f26fee47d86c03",
"main.dart.js_51.part.js": "8545fc4796b817d32f4c688565c8792f",
"main.dart.js_56.part.js": "04c124548f22c80b3f8cf0a2a57b4880",
"main.dart.js_79.part.js": "450adff6d87111b1b1f66dc768f66986",
"main.dart.js_55.part.js": "b840fdd0ff7aaf6f15aedacf3eede30e",
"main.dart.js_53.part.js": "a938e65305b6d3fc498b860988e012b5",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "e4adad9edac7cf46b8361472f8c9fa51",
"main.dart.js_49.part.js": "c00e9d51d55bedefcaf97b1e0df9efe7",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_15.part.js": "c6595c7076644cbfb2b603fc037bc05f",
"main.dart.js_8.part.js": "8c4779b2c2a43bdbedb6c43c1710b75a",
"main.dart.js_5.part.js": "2faf6eabbdaa63235a7a1f91e22ca415",
"main.dart.js_17.part.js": "97851edda61164527e4d2d06d6eb19c4",
"main.dart.js_64.part.js": "d8ca33056b2e66ba38cf1ff948d5a54a",
"main.dart.js_34.part.js": "77cdfff590bd7fc4b1927f9d1313bc70",
"main.dart.js_39.part.js": "9c5a7859dae49d1ade2a1d0c0e4235e0",
"main.dart.js_13.part.js": "ff0362e806c7282339ab745148dfb933",
"main.dart.js_61.part.js": "f39ca98ef2ffbdd8e3d39c24c5cea0b2",
"main.dart.js_65.part.js": "3251d6bdb9bb6b7158075b4b5eaf1b15",
"main.dart.js_76.part.js": "498a8959c25ae612a29992bfc081c8e5",
"main.dart.js_60.part.js": "78cdb03450dfb5ee4d50d87badbf1c16",
"main.dart.js_7.part.js": "59527ee6a0ddc6f133f80c3f1e652e22",
"main.dart.js_28.part.js": "f1825c3ad6633c4127a2687f837095a8",
"main.dart.js_41.part.js": "64be01ff8db62b843dab75b62a4ce0cd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "f45849adda16b7c9229f5a7d85d98dba",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"main.dart.js_10.part.js": "7ede73ee4b596749b3b04b5736879fd9",
"main.dart.js_77.part.js": "2d1f923682217d6a36a4939a94e94f87",
"main.dart.js_18.part.js": "7692a5e31a09cf41b91fec99749b18c3",
"main.dart.js_6.part.js": "2d5738d1866e0a03688087b70307ec48",
"main.dart.js_46.part.js": "7ccb25c2727c0b7bf04acc2ac3b35866",
"main.dart.js_11.part.js": "f47662d8b0ccf0b71a85ac19560a1c0f"
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
