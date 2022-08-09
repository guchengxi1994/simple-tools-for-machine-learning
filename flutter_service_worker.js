'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "e2dc31f21efe06c6c08f3811b2118588",
"main.dart.js_40.part.js": "8e72e66d54fc93505e349a03a3c36b55",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_67.part.js": "992608eacd1bde06df843236cbbb6a8c",
"main.dart.js_4.part.js": "05a4a3dd499f6a650c80d517e91a81dd",
"main.dart.js_74.part.js": "596858c8f60075272d44ba165ca1515e",
"main.dart.js_68.part.js": "a19ef2b61dea79dcc3681812361635b9",
"main.dart.js_27.part.js": "77a8686735c4672ea1be95e4497c8dc8",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_47.part.js": "37feb64f9386eafc5bd73d75b02cc249",
"main.dart.js_63.part.js": "88419a2e0fa09b2aa076599514523433",
"main.dart.js_62.part.js": "c3cb58b2183957a33bf6bd0f2b027b90",
"main.dart.js_32.part.js": "01932fe2a46d8b309317aae05bd35ac0",
"main.dart.js_59.part.js": "1defa73baef2392e3216469a0f0a5817",
"main.dart.js_3.part.js": "d5ba1080e4d6be7f57e14e5624ed938a",
"main.dart.js_50.part.js": "e786819f6a39741ef74517bfe954cb53",
"main.dart.js_37.part.js": "fb0cf0897b5b67a85a84b8281a6d075c",
"main.dart.js_58.part.js": "1e99fadcd7eb41d9928cd13f791a104e",
"main.dart.js_48.part.js": "50d9ce628e4b65910f533f15489f80c9",
"main.dart.js_31.part.js": "ab02cb93a6e3bf8e45f7ff08653786ec",
"main.dart.js_44.part.js": "7619c9cfd7b13b80f5af5988c30f1a41",
"main.dart.js_24.part.js": "d8619dba2826d4a31966c362aa0dce9d",
"main.dart.js_23.part.js": "0c9d5c389db24bb38ef70e3f9bd63d8c",
"main.dart.js_26.part.js": "04cd17f0947e8cd057d5c8915c2209fb",
"main.dart.js_57.part.js": "f31a34a94327e6ceb786076c04e4bb66",
"main.dart.js_66.part.js": "4269175a23d7b19c4a38b982c9a64b1a",
"main.dart.js_30.part.js": "e9222a1d55d0b6ceb39a872205f5b527",
"main.dart.js_29.part.js": "a17ac92d9841f63d33b604abfb79958c",
"main.dart.js_33.part.js": "1824200d229fedc7ff1aa4f3c2f28753",
"main.dart.js_38.part.js": "8f55c4dff591d77076aab2eba4ed5c40",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "9948bce80e3ee1f4de551f74efdab682",
"main.dart.js_54.part.js": "0945b46db4defcb7e14883b533acf02c",
"main.dart.js": "c7b3d26a104fc0e184fbd380e84dc4c2",
"main.dart.js_73.part.js": "2597ca7ae68b5490987eb6ccdbac1332",
"main.dart.js_25.part.js": "0d2e3db12092fcb5ae856d11ade65b98",
"main.dart.js_14.part.js": "82c56840a54ba153273aff7a2c9e1280",
"main.dart.js_1.part.js": "efd4f1893d6e4d4d122034ee315a4a16",
"main.dart.js_75.part.js": "46cf1410d84dacc9b8f0e285e3346c8f",
"main.dart.js_9.part.js": "a8cd5dc58d8e44d3580ad76c44e041a9",
"main.dart.js_19.part.js": "4bd1efa16350f52c0c54a4058684f6e6",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "4b9e69bfc1c803f7e11b45d76743210e",
"main.dart.js_43.part.js": "a2af8dd07fab1cc523cbefdd6674a68a",
"version.json": "debfa0d0e1106e25183b1c606ffc07fc",
"main.dart.js_52.part.js": "8e64fc23e3a0720f0952abd8c8a386e8",
"main.dart.js_51.part.js": "0bbfaef67bb6d70e8e9ddd8f7ea626f0",
"main.dart.js_56.part.js": "823e5d28f5e0a3231f8b7b80d6398f7d",
"main.dart.js_55.part.js": "8a6ebdf008a94956979304c47a08f0c7",
"main.dart.js_53.part.js": "a70415575d09624c719de25de8bda3d9",
"main.dart.js_72.part.js": "dee220c63c056d50608a4f5894432db1",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "951cd80cd33bb6817792f8cea5675b37",
"main.dart.js_49.part.js": "af062069a9ef88f7405db38f65e40024",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_15.part.js": "0eaa6b3c353380bc6f14e920ba6d30ce",
"main.dart.js_8.part.js": "3ec4a1edebeb2a059d612528a32cee48",
"main.dart.js_5.part.js": "7785c3800d190bff490c4060e3e71113",
"main.dart.js_17.part.js": "ca7d2024c4fca95c80afc11949d4065e",
"main.dart.js_64.part.js": "6786d6934a62562dfba10cf0dacbbc98",
"main.dart.js_34.part.js": "f91e2fc9a89d05363204b00b484c2774",
"main.dart.js_39.part.js": "598138f94dea3cf9d666e4cac5e42279",
"main.dart.js_13.part.js": "0ee90d5cb8b3abdec02173dba5c01b83",
"main.dart.js_61.part.js": "c79b0c75cedbdec61c8f769eec04d262",
"main.dart.js_65.part.js": "0aaf793ff5e4be489760aca7442b2485",
"main.dart.js_76.part.js": "8b3bdf9d9b4205a65d7fc55851bfda31",
"main.dart.js_60.part.js": "1ac1a783ddecf840952122840a7d176d",
"main.dart.js_7.part.js": "bf864649707cb463d7fca1d89334292a",
"main.dart.js_28.part.js": "a9afab12017542e5f78b1d61029abae6",
"main.dart.js_41.part.js": "c56d29a7d560cd692cc86d91fa8a37d3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "f45849adda16b7c9229f5a7d85d98dba",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"main.dart.js_10.part.js": "d19dea7fb5d2fb245c223d5ebac4e19b",
"main.dart.js_77.part.js": "4bdc41cd67eb5a7ec0a890ce06de963a",
"main.dart.js_18.part.js": "f8d59af8d78f2c60b6aae635d2dd226f",
"main.dart.js_6.part.js": "34ccab271dfed8dde5d5ee120ae3e1de",
"main.dart.js_46.part.js": "eab0fe2199ea079e3768278e6dc0309a",
"main.dart.js_11.part.js": "16d6dfb49e29704b6955d7e7e8de3637"
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
