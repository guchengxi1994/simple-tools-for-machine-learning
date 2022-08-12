'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "16fae5f56cde78af271b104b77abc93f",
"main.dart.js_87.part.js": "7b2051d289b45b5d455dd037d394c825",
"main.dart.js_40.part.js": "187881325bc13d33e539c84796fa5cae",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_67.part.js": "82248cd4c2ddd6281a1f1c3973714e57",
"main.dart.js_4.part.js": "20f792f6502bd87a04b769b79dec62fe",
"main.dart.js_74.part.js": "425b3b8531ac31eaecdc5f3afc9183b0",
"main.dart.js_68.part.js": "4716f35e83afa3376e1fd617eda7cc87",
"main.dart.js_27.part.js": "f32e3e9650000e707483506a1c9931eb",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_47.part.js": "197aaa643d5932aab74e291662a8d592",
"main.dart.js_63.part.js": "52f045f5aab5449b6db267fac3c7d031",
"main.dart.js_62.part.js": "29368d829a12cfec6197195ede7a5cea",
"main.dart.js_32.part.js": "fb8db284631f1618815d86f1ca627e14",
"main.dart.js_59.part.js": "661e83025d432013796fc9c019fd3b5c",
"main.dart.js_85.part.js": "67f1b36c82fdb7ef92b8ad9dc691d29c",
"main.dart.js_84.part.js": "9947e47bce0636212eecf08380152784",
"main.dart.js_3.part.js": "097bab84036a279b50a5cdf62c576f75",
"main.dart.js_50.part.js": "e2852be767478cb6aeaf3a45a100477e",
"main.dart.js_37.part.js": "21dcc82b800c845373126a7e37349de6",
"main.dart.js_90.part.js": "ea0c42b88b23981093b0385a5d11626e",
"main.dart.js_58.part.js": "b0bf55385975fe5976a0b73926ac416c",
"main.dart.js_48.part.js": "5bbba71cf0815f1b15c1b4dce3881a87",
"main.dart.js_31.part.js": "4ca41d90be195ce741e75064969f8740",
"main.dart.js_44.part.js": "61bf494318b4a840caeaae325dc8d5dc",
"main.dart.js_86.part.js": "9f0bee3e9833c1908f1a6e71e45b7793",
"main.dart.js_70.part.js": "7fa35e51724706ac3a08d1007e538a44",
"main.dart.js_24.part.js": "de6df71d0f21e7e43df4e9b0b33383cc",
"main.dart.js_26.part.js": "416e51f68dbcc7adcece3386ad43680f",
"main.dart.js_57.part.js": "cbac764153ab315ef9ae574ac56244c7",
"main.dart.js_66.part.js": "31bf6878aabf7e3ee7ad6296040f1787",
"main.dart.js_29.part.js": "93d1267307738676f648eaad2ae4b115",
"main.dart.js_33.part.js": "fcf8b59ec38b8f71b3c8deabc9b986a4",
"main.dart.js_38.part.js": "b5119239d63c36baea7f7b3407a22abe",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "a6151e02478f0f50de4aa77d6c3ff54f",
"main.dart.js_54.part.js": "1aef909d133ae6f9bad637d57d2d3cb3",
"main.dart.js": "c7e1c11de1d3ff9d1eaf72c83494e3f5",
"main.dart.js_73.part.js": "226d49feaf66012d5cd6189fa4430906",
"main.dart.js_25.part.js": "3cb03a630f80a6358533ada98d5a70bf",
"main.dart.js_78.part.js": "386d3ba22aa5888b40561177af7a83dd",
"main.dart.js_14.part.js": "98adf26e2c81429feb5bea0d13f8e8c8",
"main.dart.js_1.part.js": "9f8b66cff8d33cc5fd9751b217ef466c",
"main.dart.js_75.part.js": "7dd36cc90bcbdf7d4c63b594fea62537",
"main.dart.js_9.part.js": "4ae92f169bf7ee0c5c553188b5dda892",
"main.dart.js_19.part.js": "0f728ebb29634e1d887e4b9a33a9716c",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "7a743fc161cd77cb5138d2571f785cac",
"main.dart.js_43.part.js": "70f686483b5faf0bf9d724a5828ae52a",
"version.json": "a4400d08d3423c2ccba07b8d3f71677d",
"main.dart.js_42.part.js": "9e0597cc5e45d5145a0907d53cfafea7",
"main.dart.js_52.part.js": "55dd6b14524a9d62877a7ec18efc83c3",
"main.dart.js_56.part.js": "f67397b1ac532d46a34df73bdcc81864",
"main.dart.js_79.part.js": "8024a1692f63e772311c37fd932ad077",
"main.dart.js_55.part.js": "b07e0660e0e79d52cb979bb57d8bedd2",
"main.dart.js_53.part.js": "58f782d7b6bf76e7df15587e2ecfded5",
"main.dart.js_72.part.js": "f9568e73e190ba458552327af38057cb",
"main.dart.js_89.part.js": "6d60f1dcba7e7b21333995aebea17a34",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_91.part.js": "96842b77ac8c6cbaf4f4649fed7f85f6",
"main.dart.js_36.part.js": "a6c734eb18375d86261f92bab472a25e",
"main.dart.js_69.part.js": "1b51f299512e37a77f21fad1e9c989cb",
"main.dart.js_49.part.js": "514c9f9bffa1ae557fb40ff769076b5a",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_15.part.js": "ff6a3516b556676d9d9cc21d98b1a4d3",
"main.dart.js_92.part.js": "3a45d03860e7dd352f6fd71a6f6a9df3",
"main.dart.js_8.part.js": "79fa32c0f32d60c6b6ecb29cb9521d88",
"main.dart.js_5.part.js": "d009403ea30673aa8e903e115a7bfb83",
"main.dart.js_16.part.js": "7db65333fe23f4828f6d8653a531b1f3",
"main.dart.js_64.part.js": "49bfa38200d314fb3210f30466573272",
"main.dart.js_34.part.js": "c4befa5a6a6c1498507fff9a6c23c022",
"main.dart.js_39.part.js": "60155c829791db228002bc19671afcca",
"main.dart.js_13.part.js": "bf02fa6c2e383c4f464e79dd446078be",
"main.dart.js_61.part.js": "6708e1412ebc1ea296abe57217a45149",
"main.dart.js_71.part.js": "62017bc5946187322d2bf47d7b38a452",
"main.dart.js_65.part.js": "996a7741988254ac2585687932154d80",
"main.dart.js_76.part.js": "8dfda3e80dd3f97e88cc16ffb109db19",
"main.dart.js_60.part.js": "ab80ed533b08fe728199540b05d623df",
"main.dart.js_7.part.js": "49063bf82ea212758d603fa56b8b38a8",
"main.dart.js_28.part.js": "481cc8f27cfa369e3907e7591b775e11",
"main.dart.js_41.part.js": "6092af35e8ebc3bfb91b755b79cc3984",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "fd4082173963fec73976c21509d157e0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"main.dart.js_94.part.js": "287283069197045981fdadbcbe6a7769",
"main.dart.js_10.part.js": "825e0e63127c9e2a3c9dcb9118c0441e",
"main.dart.js_77.part.js": "2ee63dce94e52bc688c4dedf9f22e8a1",
"main.dart.js_95.part.js": "325f1b8776044a2d774f21de4f7a1eb5",
"main.dart.js_96.part.js": "636ddadc369e01d265630de32262e573",
"main.dart.js_6.part.js": "272ba14f8310feb39922adb6a2c15b8d",
"main.dart.js_46.part.js": "c262adcc855ccd30ce14c52f624b2412",
"main.dart.js_11.part.js": "0c9b9fbaafe5a59ab8e3a09d45c27109",
"main.dart.js_88.part.js": "f2a85b17c9fa96dd4754c3713d9bc2fa",
"main.dart.js_93.part.js": "27bc187c20d8bca6064e760dce9e4a48"
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
