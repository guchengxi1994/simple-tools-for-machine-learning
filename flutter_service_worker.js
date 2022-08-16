'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "4a25cf18d48e4637fc5c920a11296e87",
"main.dart.js_87.part.js": "c178278a2e588489e200f6fac95249e7",
"main.dart.js_40.part.js": "3ceebaea45e218dd35b8e2e701b5b86c",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_67.part.js": "c611bc9eb9f2dfc7d202a183b2088119",
"main.dart.js_4.part.js": "b5256dc2058a090c049366bd1ed19a90",
"main.dart.js_74.part.js": "01db3e3134136e29aee7eb462e347386",
"main.dart.js_68.part.js": "742e58e7c1ef162175bd7be294ef197a",
"main.dart.js_27.part.js": "e446d6e7e2a5f0b3f69a9b4b4161146c",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_47.part.js": "dedd3af048028a0538c3906a6f1f94f6",
"main.dart.js_63.part.js": "fe8b6a94c6291539be30514755cae5d6",
"main.dart.js_62.part.js": "0f46808b62c56a0f7bdaf3dd4abb9022",
"main.dart.js_59.part.js": "539d038c42fa933d331cbd60f3ffed8a",
"main.dart.js_85.part.js": "0cf09f1d4722b200cbe7303196fe98cd",
"main.dart.js_3.part.js": "11adef0f4e1b0b3e89f684295774f9aa",
"main.dart.js_50.part.js": "e0a1387ff70310ce70370b44374500d9",
"main.dart.js_37.part.js": "738f9a891f9708470e84f18791587a45",
"main.dart.js_90.part.js": "3ccb9f827f23366d38ed97d9df494837",
"main.dart.js_58.part.js": "35e0a1d0d82d240580070459443300e8",
"main.dart.js_48.part.js": "af103bc1eae6b0071744fbfb1e00fa88",
"main.dart.js_31.part.js": "eab21efffa6d6d6490f6afa50a88ceb9",
"main.dart.js_44.part.js": "d6e129777006d160299c9c5882140219",
"main.dart.js_86.part.js": "c1000396a40c8e3e45e6b3b344b23886",
"main.dart.js_21.part.js": "0965482af3546fa48d4c4edf5871540b",
"main.dart.js_70.part.js": "faf60a682c5a1bbe5328312a5b99cd87",
"main.dart.js_98.part.js": "1e2f4a0dfee78e1aa12bb5e013bc25af",
"main.dart.js_26.part.js": "9134ee479f6d3c835a0d8e1bd8da5573",
"main.dart.js_57.part.js": "f1272a15fbd4880fac6ae6edf72d6cdb",
"main.dart.js_66.part.js": "0dcb983df502523794eff315d04f48ff",
"main.dart.js_30.part.js": "d47457f93f1c2725e5fbef8184086b01",
"main.dart.js_29.part.js": "1da251ba36826ddcf645b6bdc18eb914",
"main.dart.js_33.part.js": "e560b6974ede3a926e3797592c8c7497",
"main.dart.js_38.part.js": "dfd6ce7a93268a73ee3951d372a71e89",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "3b547fb2eabb2fa4f110abed1512ccac",
"main.dart.js_54.part.js": "e2652207151168cda58c1202b2c5d5a7",
"main.dart.js": "4a021418ce4821f329ead16ee376bdff",
"main.dart.js_73.part.js": "527a74ae78c4a85f5b4d4b77fba71870",
"main.dart.js_78.part.js": "b8220bdfcf7651bfbd374049b0a17ba9",
"main.dart.js_14.part.js": "9ad4f3ee6cf4e3abf1883bce5cdc5a2d",
"main.dart.js_1.part.js": "3c517b8fcbad460c432c98684089246a",
"main.dart.js_75.part.js": "93d560427e776d103258f57b9485bf87",
"main.dart.js_9.part.js": "e5a6e95d15bbe32e1eb2a1c5b3a25b41",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "14b78e445d5f9d501c46350c28fdddeb",
"main.dart.js_43.part.js": "de1490c3a0ee6856920fab83ef05c0ad",
"version.json": "fa4a1c76d94eab891de37aa415745342",
"main.dart.js_42.part.js": "9929267f09a4ed719967144ca25e9fa3",
"main.dart.js_52.part.js": "828687b2f413dee33de3177234ea6cb2",
"main.dart.js_56.part.js": "9392e696b7f3d47d04840a38e12a5237",
"main.dart.js_79.part.js": "bca685b0e7e5551e22422f2fdb76e480",
"main.dart.js_55.part.js": "70843a75a38a5288c42d6e4e0c9a8c1b",
"main.dart.js_53.part.js": "c245952c1a46ee69cf6400340e660d5d",
"main.dart.js_72.part.js": "f9c4e9c2b0685f16b89497f4344a7239",
"main.dart.js_89.part.js": "7d0c76ec5de163b5f6d176f77cdcfba6",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_91.part.js": "f73b3b56d299c895deabcde6486164d6",
"main.dart.js_36.part.js": "090d17563e5a5fe6c0b92fa3269b2e6a",
"main.dart.js_69.part.js": "0fbb5c785d42ca63c633d2c4a7e82ab4",
"main.dart.js_49.part.js": "ebc510dc15a9bbab0248a91c48c01998",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_15.part.js": "31907bffec78f8b80c2ce8ca97992b77",
"main.dart.js_92.part.js": "8956fefd7e43ed19d22a89f22a12e238",
"main.dart.js_8.part.js": "9f11685b06f475c534f14b7e588814a6",
"main.dart.js_5.part.js": "9e52fd2e050c95e5a0516198b233bc76",
"main.dart.js_16.part.js": "220ff5a7558d19bb6d3299d733f114ba",
"main.dart.js_17.part.js": "b01632ee67ba4bef2fb46598f16a1eeb",
"main.dart.js_64.part.js": "af16fd57d1ae735bca0900e3da2bcbbc",
"main.dart.js_34.part.js": "d9fe6f73342af2511c6fa5da6daf01e5",
"main.dart.js_39.part.js": "7aff5cb1a2335b8bca85bc49cdab331b",
"main.dart.js_13.part.js": "4fae0e697777081701b9b2aee9c62f8b",
"main.dart.js_61.part.js": "2436b6df935c1546ef69e47b6e7ce3d9",
"main.dart.js_71.part.js": "ffa4048d0f8c56222731d0be5bce08d2",
"main.dart.js_65.part.js": "d3633d66a3dd50a8c3eba35a4be1060a",
"main.dart.js_76.part.js": "74a831fb1188a86a105cdbaaf8ab3cf7",
"main.dart.js_60.part.js": "49aa27ac133b8b5def79286533bd3408",
"main.dart.js_7.part.js": "1f8f4565ef7293c8b111da38e6cc0638",
"main.dart.js_28.part.js": "7334eee6a9326ebaf9fc92396337ff62",
"main.dart.js_41.part.js": "5329c3e4a0c723e8179a4044044b0020",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "fd4082173963fec73976c21509d157e0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"main.dart.js_97.part.js": "42c80329c44aed4c95f2d5934a2cee96",
"main.dart.js_94.part.js": "3c32e92878b3b1ad2b83b13e5000ceb9",
"main.dart.js_10.part.js": "bb4550ca72bc80069faf7e7cda9d2ce6",
"main.dart.js_77.part.js": "66fbe27fd5d1863d2e9ee3f2ca91be9c",
"main.dart.js_95.part.js": "27422765805c12084605d3c2af80e170",
"main.dart.js_96.part.js": "417a64fc852ee999b1bd50c3fa3ded43",
"main.dart.js_18.part.js": "07cdbf2251d078ad8e9cfb68f33607ce",
"main.dart.js_6.part.js": "a94078c9880eafb193e0ddf6a74df990",
"main.dart.js_46.part.js": "6981699a693358ca89b22cf1a354bfd8",
"main.dart.js_11.part.js": "ba93f1267d60551d86c3529e4b927ec7",
"main.dart.js_88.part.js": "f69d82d24cceb97ba82b1602c3e32444",
"main.dart.js_93.part.js": "1711c421126afcade6afb1cd51f6392d"
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
