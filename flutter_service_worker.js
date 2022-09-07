'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_36.part.js": "0708b426763e581609cc19d046e5851b",
"main.dart.js_78.part.js": "07bb40faae99fc0a41763bc11ae47e2c",
"main.dart.js_53.part.js": "077d893409b30169e66b2908550b68e1",
"main.dart.js_59.part.js": "8674f339a5b12799b26daeedfe97f5be",
"main.dart.js_18.part.js": "57602bfc7949e8744c56698fa62a827a",
"main.dart.js_16.part.js": "e18a7c2352db14351ae61a85b17ec111",
"main.dart.js_64.part.js": "5e094098ed605b37ccef9f8f72cc868d",
"main.dart.js_65.part.js": "5b1a2b14bab5c0769116af1c5c4f2365",
"main.dart.js_80.part.js": "f7be48d155fd2742dc7dea70fb9f7f90",
"main.dart.js_5.part.js": "5c5e85610b2e3271d417f4798b274b8c",
"main.dart.js_11.part.js": "6560279081d74828d2f5331ba2b7f14a",
"main.dart.js_105.part.js": "1ddf2dd92802a9cd44eec0e61712e5a6",
"main.dart.js_67.part.js": "be1da77df8b8dab73b831e2c02477b6c",
"main.dart.js_74.part.js": "248bea8011aad225b8b0655821713298",
"main.dart.js": "df53dfb2671aa3ce4ce1f1d94b8fefe5",
"main.dart.js_60.part.js": "a1b2d4691e66747942841b4e72fbcb59",
"main.dart.js_73.part.js": "82efa0d46d80a65c3ff5c6be825866c9",
"main.dart.js_31.part.js": "c83273d5969e4fd8ed888773ea6b0e75",
"main.dart.js_99.part.js": "fccbdee5a9c580e3b80073edaa290d02",
"main.dart.js_46.part.js": "fe776fe5b4389440609b02bf36d982d7",
"main.dart.js_4.part.js": "05c211ecdcd9d1fdeb2ad6be4f9c8564",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "948b50b570eaba529613f9d80cdab640",
"main.dart.js_72.part.js": "5c70ea1e929c3e6bfba3588396cef1df",
"main.dart.js_101.part.js": "8e1491e05aa220b0bc68971d138b57cc",
"main.dart.js_102.part.js": "ad7f2439050eb02ad43c39e14284239f",
"main.dart.js_75.part.js": "0dfe81f3c7d927d4ab68f2fc506a2285",
"main.dart.js_95.part.js": "0055b394f5089ede4da14f1f8fe01376",
"main.dart.js_93.part.js": "4b551f96d3b97cec937806cb8de49f87",
"main.dart.js_71.part.js": "3a95e000f9cbd957f6dc5a41614914af",
"main.dart.js_96.part.js": "747c731e027b83d57b798470cc5444ad",
"main.dart.js_28.part.js": "b8479a5306803af39ed5a5e7d7a18e82",
"main.dart.js_98.part.js": "3f494cc872c1d384c74cea6f7c08af9d",
"main.dart.js_55.part.js": "9efc8f4aadf19f64b796e3e2f91fd051",
"main.dart.js_91.part.js": "8a72f0a1f47bc5e4ee98ff3582e934dc",
"main.dart.js_42.part.js": "f461bf3a584f57ccbf458a07618cf23c",
"main.dart.js_12.part.js": "45f6fb59d15d985b87905acd954f0254",
"main.dart.js_1.part.js": "0ef826b6d3c9595dd81d591ddf41451f",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_94.part.js": "962ddccb98d69918d2345d8d417f8168",
"main.dart.js_9.part.js": "d7ac1ebf607bd504f2dbf9324c6587c2",
"main.dart.js_68.part.js": "e01c24aa941c178aaa04cbe57be25c74",
"main.dart.js_51.part.js": "fac89df97c8a6f3ae56770e37e55cfa5",
"main.dart.js_17.part.js": "6106ec99d35a0579c527ab710cc3d19b",
"main.dart.js_14.part.js": "c8900a2a024e9662cdd0b25dc93d0526",
"main.dart.js_30.part.js": "3d3f1ea2e9f939c85b13c4a7b62ba93c",
"main.dart.js_44.part.js": "ef504aecda5db6d952288ea47897b608",
"main.dart.js_29.part.js": "abf0c6aed734015d4739b3008bba9426",
"main.dart.js_49.part.js": "8e50481b2a325320adb02d2635eb6d5e",
"main.dart.js_43.part.js": "82043d611e0dc15dfbfd31f6ee60a35e",
"main.dart.js_88.part.js": "3d6e73cff0845292d2fd15b6bdee381e",
"main.dart.js_57.part.js": "4f7053e4f2008b7e1c07bfec8e013e4c",
"main.dart.js_77.part.js": "0809e2dbfa19681d412b593a144757f7",
"main.dart.js_7.part.js": "a0832bf938c2a0704bbc9e32337b68c9",
"main.dart.js_63.part.js": "20dc92ea4869ec88db336047037a1118",
"main.dart.js_34.part.js": "ec1fc08b398bb1ad293486257a1e8470",
"main.dart.js_81.part.js": "7c70a434c5740128bd1763a687ae5ea5",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_38.part.js": "34ba3a2217aba6f75b5b7b441179ee49",
"main.dart.js_13.part.js": "2eaa9ed9e3454905e812eabf0fc61ac6",
"main.dart.js_79.part.js": "bae7c421cc7535465d16b7475eb0bdd3",
"main.dart.js_6.part.js": "e9a467813f4d6c8c4a54d747d72628e6",
"main.dart.js_45.part.js": "de822c4b66fd2bb633f1f9ede3acd132",
"main.dart.js_62.part.js": "a40c80cffc82c9b14318bea42330dc9a",
"main.dart.js_90.part.js": "59837bdad7e5d1c9110b49a98b7611c8",
"main.dart.js_69.part.js": "47f4976e30358a86ccd61bf59c165bef",
"main.dart.js_40.part.js": "0be27e7c1b86152b4b470b18f9409cdf",
"main.dart.js_56.part.js": "5e37b035154bff0832ba598d30825c38",
"main.dart.js_8.part.js": "6413b00ae143daf99567377ef83994de",
"main.dart.js_35.part.js": "bee9682f96c140a094dddbab057056cf",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_10.part.js": "01c64f769ed213b31a65813ac538e101",
"main.dart.js_48.part.js": "5b346d05369a10f852a0170eee12e833",
"main.dart.js_54.part.js": "e20909f6b7f08a8b0c520064e4970bfe",
"main.dart.js_32.part.js": "951df3c09fa8f10c5d978c7289feea0e",
"main.dart.js_47.part.js": "17274ff691868e546abd34bfecc581ab",
"main.dart.js_76.part.js": "c07aafabdb53a0ede070e08d68f62e5f",
"main.dart.js_26.part.js": "d61d9b9a99fec3502d7855b4ec6147a0",
"version.json": "fa4a1c76d94eab891de37aa415745342",
"main.dart.js_15.part.js": "3c2e702e0af802e9a631eca566d88bf6",
"main.dart.js_3.part.js": "ae927047c9f21387af7dcecbe379a785",
"main.dart.js_58.part.js": "75c412c0083d150996e563c1289aedb7",
"main.dart.js_97.part.js": "e946001ee4ebb11edc44332d077ec368",
"main.dart.js_50.part.js": "e93ad8f842511986dcf4f6b04f319da7",
"main.dart.js_37.part.js": "a4504b98ec8645700555431896e39628",
"main.dart.js_70.part.js": "611c0692dedd1f3b85e5605fcd27c0f2",
"main.dart.js_104.part.js": "3bf7718f122464b5a20a7b3dbd3d25e9",
"main.dart.js_100.part.js": "52871f154bc7a040cb5c6cbd41c299a1",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_61.part.js": "0d8fd6c603fb83b8841debcb7952bddf",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"main.dart.js_39.part.js": "00381c6952e43f0706d90a86f854df63",
"main.dart.js_89.part.js": "c9aa9a898873f3279b1e19e80c9230ba",
"main.dart.js_27.part.js": "6ed2689a06d8fc5a4e431593c66377ef",
"main.dart.js_41.part.js": "25eb54e6d3cbcfe2a00c538fa70b7bb7",
"main.dart.js_21.part.js": "1b1ea31ac9c9371641cc876018ff5580",
"main.dart.js_66.part.js": "30e29dcff027153c3fe415be7a07d78c"
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
