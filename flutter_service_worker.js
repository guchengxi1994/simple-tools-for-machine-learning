'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "34939a4f4bad41d83bdc9a5703cd024d",
"main.dart.js_87.part.js": "85d1b15584acb4ea25f96557fc9091ef",
"main.dart.js_40.part.js": "72629ffc15e0aa56da302bbe131dca02",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_67.part.js": "fa55c93d70be909e4e49a1695702551f",
"main.dart.js_4.part.js": "1be5d8096f167ea6280c06c0aeb6c59c",
"main.dart.js_74.part.js": "f3d39faf595c00f1a2fff7234fe7d672",
"main.dart.js_68.part.js": "818ce521126a587ca3f27f79506506c6",
"main.dart.js_27.part.js": "c898fa86d6a5a2ba458ce9a18ba244cc",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_47.part.js": "2685e615038c7a4e4a1b81e481f0427d",
"main.dart.js_63.part.js": "030f272da29703a2a7733b55e6b3e365",
"main.dart.js_62.part.js": "dd5071c7873f48ad3ca8a356037ac1aa",
"main.dart.js_32.part.js": "c0e4acadeca46cbcd938994dad3fb3cc",
"main.dart.js_59.part.js": "2c779f8958269e334c98618610ab9997",
"main.dart.js_85.part.js": "18dd98ea40d0e93dc8cca4eeb48ed27a",
"main.dart.js_84.part.js": "cb3f6718f147e37bb545bf142ef2005a",
"main.dart.js_3.part.js": "03f407e1acd79db61ee7e18b3dc61654",
"main.dart.js_50.part.js": "98903e57f805581c7b874f4b13925126",
"main.dart.js_37.part.js": "fb173525e469ec3e9290e8dc89a04666",
"main.dart.js_90.part.js": "db06d6b592c24596bf7bdaa3d0cc1081",
"main.dart.js_58.part.js": "ff5514757cbdbe47c985565670af0226",
"main.dart.js_48.part.js": "b6fbd4951d838541196997b1fb4043a4",
"main.dart.js_31.part.js": "51ff933b25077db569d0c5cb8af7da7e",
"main.dart.js_44.part.js": "ec61fa90fce15f1b781d8dec5e638b77",
"main.dart.js_86.part.js": "312bbae3a5bb860f942f05321fdaeb8b",
"main.dart.js_70.part.js": "ad73f2dccb852480e400208d37b60cb2",
"main.dart.js_24.part.js": "0cbd818e84e3232b765840202fa68065",
"main.dart.js_26.part.js": "373bab18c14088f533b6f1655e810ccc",
"main.dart.js_57.part.js": "46aae4255e959949cab1a13c359a64cc",
"main.dart.js_66.part.js": "e6f41b031910f4cdf97fbc61a774b50a",
"main.dart.js_29.part.js": "11b46f06daf35c55928e99b213e5bbe8",
"main.dart.js_33.part.js": "d81a42e5e7d74822f594d63797970f55",
"main.dart.js_38.part.js": "3487060e962cd1261e774b978b7baa81",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "6a5aef592e0a70d6b0143da10e29a70f",
"main.dart.js_54.part.js": "1942892c91c1dbb5650393a6c7d5f8b5",
"main.dart.js": "e073f3c88e577d3837dabc15ee01b37e",
"main.dart.js_73.part.js": "b5e570873cc53a890f9a5bcf9e17b3ca",
"main.dart.js_25.part.js": "b69372a1ec0e9f9a3b322033a9afea76",
"main.dart.js_78.part.js": "e45b522aca8f43d94aee51a4c31cd7af",
"main.dart.js_14.part.js": "e4480c89d384de6672219f99a5f4175b",
"main.dart.js_1.part.js": "b648ba23bcd6fcfc4c223e7402980cce",
"main.dart.js_75.part.js": "b2f959b734a981be692cbdf6263cab00",
"main.dart.js_9.part.js": "7af3c8d3e34a7c6bffaf9132c961089d",
"main.dart.js_19.part.js": "00c90bc330f2f10fa0070b91b94306e3",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "c35f3141ec7fc446ffcda2bc34622a0b",
"main.dart.js_43.part.js": "74a67f0ca907b222a56fceab90564570",
"version.json": "7d71abfeed91fc07462b789a0eadc5e8",
"main.dart.js_42.part.js": "deaa7c294ed0c297847905c3eff62949",
"main.dart.js_52.part.js": "ba5fe82fdc25189f59665faaebaaf372",
"main.dart.js_56.part.js": "13fef265973ed491ab352a2c3409a918",
"main.dart.js_79.part.js": "cd0a663f8fa27bde0014afd20b623900",
"main.dart.js_55.part.js": "29f17a0be9890c430d728a56d698a1ff",
"main.dart.js_53.part.js": "d8d1320b971649e33e24da06e5f53782",
"main.dart.js_72.part.js": "ecc9345847838d0e8a095050e1ad8c6a",
"main.dart.js_89.part.js": "3b41949491f43f0f8782110c5fdd7e50",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_91.part.js": "b798b01adf8188bfc796c644ef8e58e4",
"main.dart.js_36.part.js": "1bb05646b068e9a1d0d1f31a2364e0b7",
"main.dart.js_69.part.js": "e2f035d38a25fd1a2e1476336068e4f2",
"main.dart.js_49.part.js": "8524ba8c5879942d4c2577ccf3ff6891",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_15.part.js": "971c3b64200b1264966d4646cb6cb75d",
"main.dart.js_92.part.js": "bfea428c4f8197a4956f44b49e29320e",
"main.dart.js_8.part.js": "78bad07318083603487b2f1741b47da9",
"main.dart.js_5.part.js": "e0ff63b0009c15278c594169e9d8f64a",
"main.dart.js_16.part.js": "d06dd4ac6c59dca16aa2dd2df6a3d3fe",
"main.dart.js_64.part.js": "bd2774b3ba19393b4da054f1723e25e2",
"main.dart.js_34.part.js": "234af228e4ead64d38712019b14d09b5",
"main.dart.js_39.part.js": "35811fc19b12e258df6748b1f03e501b",
"main.dart.js_13.part.js": "5f2a3569d8f61a056c88b19ed20bbd36",
"main.dart.js_61.part.js": "1a80138d862157bc4bdc6477edd8c7f0",
"main.dart.js_71.part.js": "d2f08fcf3d2378508c1598d93125813c",
"main.dart.js_65.part.js": "a86fe07c970cfec1a626a8beb567e53e",
"main.dart.js_76.part.js": "2f9a9c94050ec3f7ce5b25849c44332f",
"main.dart.js_60.part.js": "e061832fc23fa4b7f702aeef9e3ae175",
"main.dart.js_7.part.js": "2885bfb4a023a525a849de8bad59f5c4",
"main.dart.js_28.part.js": "e3913b769bae3ce8b574a07ed860ed98",
"main.dart.js_41.part.js": "36fc98224a4f599a13451027226e2faf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "fd4082173963fec73976c21509d157e0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"main.dart.js_94.part.js": "953354338d32532b09d3e24914ed4712",
"main.dart.js_10.part.js": "ddb4598fa7cf020574178e28372b5b2e",
"main.dart.js_77.part.js": "26f53b818abd4a528d1875b91643084a",
"main.dart.js_95.part.js": "90a5daf238375eaa52df9bf58e9dd85b",
"main.dart.js_96.part.js": "1919efde4d5900719791641018f704f6",
"main.dart.js_6.part.js": "24d8c5a536269b0ec0cf67ade9ffda7a",
"main.dart.js_46.part.js": "c684cd1b4444002de6d663f698018b10",
"main.dart.js_11.part.js": "80c20d1ef699d3416774f6f1800de6e5",
"main.dart.js_88.part.js": "15376437e58d5a0c12566fd5d9438d4e",
"main.dart.js_93.part.js": "59d081812602513e6e6cd7583a557bff"
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
