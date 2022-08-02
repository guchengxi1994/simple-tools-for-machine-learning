'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "2c34f2de58e5d59fb6ff4bd2af9f0a89",
"main.dart.js_40.part.js": "e545cc9c7931f848d8eada00bc46ccb0",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_4.part.js": "bc13b8ec196940a8d34e26aed33c0eb0",
"main.dart.js_27.part.js": "ad4785edaebf570a439f426ca6d597c0",
"main.dart.js_2.part.js": "dc737fac3c415ffeddac54ad2a9db84e",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "4809737aadc7ee8c4833f020a633bf23",
"main.dart.js_47.part.js": "f7d541b3af34615ef317ec769513bb03",
"main.dart.js_32.part.js": "c5583786925cbe38bd9511f4f97a0fec",
"main.dart.js_3.part.js": "c42d9436143389763d58ba57e7b6acff",
"main.dart.js_50.part.js": "e028aa1b29a2b9a7b6daf0576a2b0899",
"main.dart.js_37.part.js": "87a2fb24ed78ffb406a156b8d61fe7cd",
"main.dart.js_48.part.js": "43101b228c356a97c79852b3a1ebcaf4",
"main.dart.js_31.part.js": "0323d9717958eabd5f019f7c4665e202",
"main.dart.js_44.part.js": "d392162c7e7b0cc0f6dff6b3dec19d8c",
"main.dart.js_24.part.js": "ed3974486cf26b9352262fbd7f39894a",
"main.dart.js_23.part.js": "242770a4b9a587adff33b8f5bdbf6bdc",
"main.dart.js_26.part.js": "a6af02f576daded933af3858e821df63",
"main.dart.js_30.part.js": "d5327488756cbe452f05c3ac4460bade",
"main.dart.js_29.part.js": "47829ea2831831c526c7d4c1b6cc2a04",
"main.dart.js_33.part.js": "38e695d4e3d3eee36538c1fdacffb01d",
"main.dart.js_38.part.js": "e6ca600678c1ee1f9997b41615795013",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "3b8fb7da7fbed681234ba8557770c55b",
"main.dart.js_54.part.js": "a9e904bcfa9758ff62d640075173a089",
"main.dart.js": "8e94735aa651a5eb7e74dc52c2d967f6",
"main.dart.js_25.part.js": "50bb40abcba3ce373b02ce01c7166e3a",
"main.dart.js_14.part.js": "a9704f7235a26ddbd1b924c37255bf51",
"main.dart.js_1.part.js": "5c4eb56f231d352c6c00bd4ba5ab0bdb",
"main.dart.js_9.part.js": "20956f0aea8953acd52c3052b0def06b",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "6609044c9371f3a0a7ef188d35233d47",
"main.dart.js_43.part.js": "b81b2a92e9ad88bed1b38cdb94344b3b",
"version.json": "c95217510d649bd9a2ace15798231b58",
"main.dart.js_42.part.js": "2c54fe7dc466b7284b714dadaef61291",
"main.dart.js_52.part.js": "5113adde63c95c01d4a97cb31fa87e1b",
"main.dart.js_51.part.js": "c1cd15edd4a250f47d0139a695547873",
"main.dart.js_56.part.js": "70be076ba63ebb9db4e37e6d6753e692",
"main.dart.js_53.part.js": "edb01534953d3657cfd97a357407027a",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_49.part.js": "d1d745c4f796fbf459907e7a8594ee0c",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_8.part.js": "0eebd97d317764fb71d06cdfc4391854",
"main.dart.js_5.part.js": "dab046c0bed5175df48436b495071cd0",
"main.dart.js_20.part.js": "324d5553c1ed87f6949c3d4f6ed87eef",
"main.dart.js_17.part.js": "3044ded2c53067f762d8b32e0e518b5e",
"main.dart.js_34.part.js": "b99479babec40602ba226468efbe224d",
"main.dart.js_39.part.js": "1a49825e2402764379666a9fbc769455",
"main.dart.js_13.part.js": "949514e1d4eecb1a1f4dd87c418fd73f",
"main.dart.js_7.part.js": "255016f7d0805b991761e4b0cf11d850",
"main.dart.js_28.part.js": "84cddd043ec336024dcb8be0a37c97ad",
"main.dart.js_41.part.js": "34f3a812474cff59eac4fca3828edd74",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "dc7e2cf9cf0be12ae9f432dfbc0d4726",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"main.dart.js_10.part.js": "09455876fe453fbaa9bfb0fc8d9da24d",
"main.dart.js_18.part.js": "1e7627d2458812ed7c25716ca69876ee",
"main.dart.js_6.part.js": "522535cd805960440b523c4acbd806af",
"main.dart.js_46.part.js": "56b7afcdc858a95c7fd64fd98c1a076d",
"main.dart.js_11.part.js": "5df013b0a4e2484dc7e1b6577d475eea"
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
