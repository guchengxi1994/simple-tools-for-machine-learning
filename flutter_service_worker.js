'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_31.part.js": "affb594c9508f7e943990c44c37a8e22",
"main.dart.js_4.part.js": "c3feb97f7deae27fa50b39e2732515a7",
"main.dart.js_80.part.js": "e0da0039bafc901f5e5eec6406b6b078",
"main.dart.js_89.part.js": "d53833cfb057ffc2c05ca787bb7b3918",
"main.dart.js_91.part.js": "5646388d8a0fb9c940f26487670f8da6",
"main.dart.js_88.part.js": "13b266af585d78b4af86cfc1dca97b41",
"main.dart.js_41.part.js": "c2474e3243a1fb2ddad925f236836446",
"main.dart.js_100.part.js": "840df5415db65bd703869ea8bcf6a0c9",
"main.dart.js_70.part.js": "91602bf2d5a7894263a6d94b80b9bf0f",
"main.dart.js_50.part.js": "3de94e9392767442124bdcf627b1d372",
"main.dart.js_1.part.js": "64290a28a97838e16b1a0363977bcce1",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_93.part.js": "38287a3989134c07cc14d54520667bc9",
"main.dart.js": "473a0ad1dc971feb9a330bf0c25d1946",
"main.dart.js_102.part.js": "68666f91a89646b54ff8c5b7060c2e19",
"main.dart.js_98.part.js": "3f494cc872c1d384c74cea6f7c08af9d",
"main.dart.js_97.part.js": "0be0652cd7933f359fc41873ad98d471",
"main.dart.js_59.part.js": "8674f339a5b12799b26daeedfe97f5be",
"main.dart.js_73.part.js": "7ade6967f1daeae38600133e66646dc9",
"main.dart.js_46.part.js": "9a65b874b93cc2e569742c1b723c00b2",
"main.dart.js_81.part.js": "7c70a434c5740128bd1763a687ae5ea5",
"main.dart.js_6.part.js": "57918fbae279928d9b4016e1fb32715c",
"main.dart.js_15.part.js": "0265da5e28f4ca4db32e1b79217c3b50",
"main.dart.js_94.part.js": "67ebb61660c1ed37d93fbdcd585fca2c",
"main.dart.js_5.part.js": "cce577aaac8b6ff09b0f8b00cb5bb0e0",
"main.dart.js_74.part.js": "7d411a282260d0515aa6bb80a392f0f9",
"main.dart.js_3.part.js": "a9966d7b1f7eb85c0c9e5f867575dfca",
"main.dart.js_17.part.js": "a976b8d120acbeb49d67e180746ae70f",
"main.dart.js_61.part.js": "8384e8f553e7ffeac246072674304df1",
"main.dart.js_11.part.js": "6560279081d74828d2f5331ba2b7f14a",
"main.dart.js_35.part.js": "d0dc559b208c868e793e6eb6137dbe95",
"main.dart.js_47.part.js": "801a17ba69120a182a2c5e0609f308d3",
"main.dart.js_65.part.js": "5b1a2b14bab5c0769116af1c5c4f2365",
"main.dart.js_44.part.js": "f6eecee83f62f7eef03721ee21870ebe",
"main.dart.js_48.part.js": "6d0fdf5fed633c17d69c92700b52ca8f",
"main.dart.js_58.part.js": "75c412c0083d150996e563c1289aedb7",
"main.dart.js_49.part.js": "9ae5221a12242453296773e9cd0b3bbd",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_38.part.js": "d22138fdb06831e61f7cecbff9502463",
"main.dart.js_8.part.js": "f57a31f10a888ddeb865c53057c7205a",
"main.dart.js_51.part.js": "28dde24b6f46f8ee9c34881e07f39298",
"main.dart.js_96.part.js": "060f843f761a062af6ee77e4f311adc2",
"main.dart.js_62.part.js": "0e0124a86dfe71596277980676c4fa99",
"main.dart.js_63.part.js": "63ae39417d54da693234a8691a30fec2",
"main.dart.js_60.part.js": "a1b2d4691e66747942841b4e72fbcb59",
"main.dart.js_13.part.js": "2eaa9ed9e3454905e812eabf0fc61ac6",
"main.dart.js_79.part.js": "ffcc54594ad859ec9ff93c0113f23999",
"main.dart.js_39.part.js": "00381c6952e43f0706d90a86f854df63",
"main.dart.js_68.part.js": "8aa17bc30e67005bf589cf31a5e447e0",
"main.dart.js_36.part.js": "b687cb97aed7520af18ec0dfec4fd415",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_18.part.js": "56aa2b3f62f5897229f26192992115ee",
"main.dart.js_30.part.js": "dee65ed4c8082b2ed62a6142daf4b069",
"main.dart.js_21.part.js": "8ba87d312fc57fae492becf55bfdc52b",
"main.dart.js_64.part.js": "f9dbf231cc8522c042f0981f99d2e451",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_29.part.js": "b4aa073f0f918d8bc2d977effcd00559",
"main.dart.js_90.part.js": "6bf86c9a7851b9c88ba4372eb3fe4449",
"main.dart.js_12.part.js": "45f6fb59d15d985b87905acd954f0254",
"main.dart.js_16.part.js": "dcd27928e2b033d93d425beac06e46a0",
"main.dart.js_53.part.js": "dac7f412fca9370e1f1ad71f2e8a7677",
"main.dart.js_76.part.js": "c07aafabdb53a0ede070e08d68f62e5f",
"main.dart.js_32.part.js": "46ea012fc80c0a4aaedaa01d7ee5823f",
"main.dart.js_10.part.js": "6969ef856d8db05fc1e62041e28be023",
"main.dart.js_7.part.js": "02125e1a0c6af05ef8b3e3e6a712ffe9",
"main.dart.js_9.part.js": "f669249e72d5aa50a3b2a27bf4d41b7c",
"main.dart.js_34.part.js": "0edb76a49e1516846b91580f7c3b64dd",
"main.dart.js_27.part.js": "d17804e75514104922fec79624af0e3a",
"main.dart.js_67.part.js": "d1184d1369fb3285283efac697d28912",
"main.dart.js_72.part.js": "5ebace7bc98587c495e79047e9863244",
"main.dart.js_78.part.js": "07bb40faae99fc0a41763bc11ae47e2c",
"main.dart.js_71.part.js": "3a95e000f9cbd957f6dc5a41614914af",
"main.dart.js_26.part.js": "19f807a799aab98d47d137591b6fbe57",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"main.dart.js_77.part.js": "969611416d6eb589f48d544fa83e5746",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "66389e97a3931a80bc5b0747e226a1c1",
"main.dart.js_99.part.js": "a5c101b9c3bc3e9a02a9d12a5440d4a9",
"main.dart.js_57.part.js": "5454fb3ba2117b396e4f52e274bab72e",
"main.dart.js_14.part.js": "c8900a2a024e9662cdd0b25dc93d0526",
"version.json": "fa4a1c76d94eab891de37aa415745342",
"main.dart.js_55.part.js": "5c29d8e20fb40cef2cfdbccba73187a3",
"main.dart.js_45.part.js": "de822c4b66fd2bb633f1f9ede3acd132",
"main.dart.js_56.part.js": "02aa9b825b263599e015ab8680a2d96b",
"main.dart.js_69.part.js": "3076c2c79a19ced3fbdd2f6912906dc6",
"main.dart.js_43.part.js": "95fa955ca8cca5baf0247829de774ff2",
"main.dart.js_105.part.js": "38c16ae768bce843fe4e64384e25f568",
"main.dart.js_42.part.js": "4576ab8d5c1766008cdcde7d7fed5ade",
"main.dart.js_95.part.js": "0055b394f5089ede4da14f1f8fe01376",
"main.dart.js_75.part.js": "0dfe81f3c7d927d4ab68f2fc506a2285",
"main.dart.js_54.part.js": "cd23360fb57448d1801f3d423bb22329",
"main.dart.js_101.part.js": "c3ec4202213c2375819484c8ffc0e9c6",
"main.dart.js_104.part.js": "5fe96c1dd34298ab3d0720d799e577c4",
"main.dart.js_28.part.js": "33873c63d4938e3fd77838a5f62693db",
"main.dart.js_37.part.js": "a4504b98ec8645700555431896e39628",
"main.dart.js_66.part.js": "3bad3a103b124526c2d703620decf62c",
"main.dart.js_40.part.js": "f9f9967ac47b30fd525271b1a368173b",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995"
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
