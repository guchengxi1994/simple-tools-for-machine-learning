'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_12.part.js": "e782ce5401b2f8eee70e739185cb9fe4",
"main.dart.js_40.part.js": "8322488b322f23e6b6df8eeb71466298",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_67.part.js": "80bc252600b968948e620ac1dea294c8",
"main.dart.js_4.part.js": "015c731c323f72cb5b8d3c8cbe12fcca",
"main.dart.js_68.part.js": "1afb43dce3930229c4b9056a0fd8b10d",
"main.dart.js_27.part.js": "0f624a45b760b3bf0b35a868b3df0f1e",
"main.dart.js_2.part.js": "56bfe2ce4aae0752e747ce8431a8b6e7",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_22.part.js": "f259dfb1d29ab56f989f31d18706663d",
"main.dart.js_47.part.js": "c28dceea6d9e913509975108ccdc0673",
"main.dart.js_63.part.js": "df4da8df692d4c5f22014a1521651259",
"main.dart.js_62.part.js": "44653a91805272815427e42292ffe06a",
"main.dart.js_32.part.js": "2b0b52afc19a1501aa651f58ac088a29",
"main.dart.js_59.part.js": "25f816052e5798c10a1d687486d20f4b",
"main.dart.js_3.part.js": "91d46b99afd15a8bd328bdbea12c7228",
"main.dart.js_50.part.js": "2f2be80ea9f7ded66c13915c43f7f40b",
"main.dart.js_37.part.js": "14acb841270ca6b02f36576e0a103a85",
"main.dart.js_58.part.js": "40c5cf57370876a5130c30f5ad4691fe",
"main.dart.js_48.part.js": "dd7a2d1a2f32c12896a4e97d94786dea",
"main.dart.js_31.part.js": "08dffead2dfe3350f32da628ebf947b2",
"main.dart.js_44.part.js": "4852a33e8cc8c025709a0321f3394c7d",
"main.dart.js_70.part.js": "657dd58860949f9c23449b741788a4c7",
"main.dart.js_24.part.js": "a3dcba4c662e491c9844f9fe45646ddc",
"main.dart.js_23.part.js": "02f2e806adb601a7918bf6110246e59a",
"main.dart.js_26.part.js": "a360b15d9e7e0e1471dce20f30bb1975",
"main.dart.js_57.part.js": "39c40d3ad4cdb31201ec26faea976a4b",
"main.dart.js_66.part.js": "e8419c13a82ce4739e453f28b22565be",
"main.dart.js_30.part.js": "cab5fed941b05fc3cba2b12986763e84",
"main.dart.js_29.part.js": "615808c20baead5efe9656a0c5f08e88",
"main.dart.js_33.part.js": "9c5a6733f5808b0578646732461a1b09",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_35.part.js": "5818f370e8ff0408b757175945334c01",
"main.dart.js_54.part.js": "844165fdd7b89bbf0149739bf38e30b3",
"main.dart.js": "e2588853beb85b404a6daee57c7d2fbe",
"main.dart.js_25.part.js": "4bfe83beef7c98debfd3314bfd104936",
"main.dart.js_14.part.js": "aad4fc7c1a2d8f61a7fa469158fab4d8",
"main.dart.js_1.part.js": "5b41f0727aff25d89d33acc3477f2c80",
"main.dart.js_9.part.js": "7c6039247c812617c84302dc43a3aa8d",
"main.dart.js_19.part.js": "400031af8219ec128c9e496327bed686",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_45.part.js": "e73cf83b108a21faf5597d50e660e44e",
"main.dart.js_43.part.js": "93151f5b7f4eb8495def0d8c4da64e5e",
"version.json": "63d7441a81fa9cd28444c2593b802ca3",
"main.dart.js_42.part.js": "e83ffb49f36ae7c42d3b1a6477052fee",
"main.dart.js_52.part.js": "691b83349d77bd10cc9249d1f9ec4d2c",
"main.dart.js_51.part.js": "03135d5d48b8daf4453044078ce3df88",
"main.dart.js_56.part.js": "73df23823546e3176d1cb60210b943cf",
"main.dart.js_55.part.js": "f46be116ffde08697a7fde596dd1fccc",
"main.dart.js_53.part.js": "a2d45c56be2d9a7295cbc8be0bf80e4b",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_36.part.js": "c4e472afbacc74340947e1280697d029",
"main.dart.js_69.part.js": "10c72f86eb9471a3f11987ac3ab253f5",
"main.dart.js_49.part.js": "246f05da7e8f1795416b4582a0cc34f4",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"main.dart.js_8.part.js": "f48b4ccb27fab8c60a0b3f933b64c8cc",
"main.dart.js_5.part.js": "c643c9a19838ce88497f83665967eec5",
"main.dart.js_17.part.js": "1c48df150659748ca9e3af1922030b01",
"main.dart.js_34.part.js": "c483859f136b19d17dba9352560aeea2",
"main.dart.js_39.part.js": "58add16ca4dccab8aa99375cd97c07fd",
"main.dart.js_13.part.js": "2bf026495325d85c47daf7a80b9f8ead",
"main.dart.js_61.part.js": "82717bbce6f2df32f9aff5258b9c156c",
"main.dart.js_60.part.js": "342cf4705223ff762600ad3c70c19378",
"main.dart.js_7.part.js": "d1301001ed66c1043e0899781a7eae21",
"main.dart.js_28.part.js": "fb08343a79c363f98ba60feddf1c41ae",
"main.dart.js_41.part.js": "9e8a03f5585a983d346bd441d112dd02",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "6ae32ef904d119cfd3af9da62d9de2a4",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/AssetManifest.json": "364a5963ce3a4eb43ad353623158a909",
"main.dart.js_10.part.js": "a54250f12652159c62ca8d7e30fb79b8",
"main.dart.js_18.part.js": "179d49cfa41b48e4d36472971dca2af8",
"main.dart.js_6.part.js": "2860558ee0116c5f0f2f466c603166d3",
"main.dart.js_46.part.js": "aa0413899d7251965b11f5658ebee960",
"main.dart.js_11.part.js": "1e5e290abaede7848c03f9f6d4f15a9c"
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
