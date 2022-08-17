'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"main.dart.js_36.part.js": "34a5f27291b53fc19116cef5e1c14996",
"main.dart.js_78.part.js": "07bb40faae99fc0a41763bc11ae47e2c",
"main.dart.js_53.part.js": "be5cbed3d6424c36849f21c70335ba2e",
"main.dart.js_59.part.js": "8674f339a5b12799b26daeedfe97f5be",
"main.dart.js_18.part.js": "b001dbf76a1e2a4015d402efd6641050",
"main.dart.js_16.part.js": "b02c1cc655b0b6c2fae228350576d2b4",
"main.dart.js_64.part.js": "2e00afdaf5216cb04e02344978991095",
"main.dart.js_65.part.js": "5b1a2b14bab5c0769116af1c5c4f2365",
"main.dart.js_80.part.js": "0b415845dec206cb2c9d90b32dd60540",
"main.dart.js_5.part.js": "1f5ec8e01f7a95cc13221f16f75c7cc2",
"main.dart.js_11.part.js": "6560279081d74828d2f5331ba2b7f14a",
"main.dart.js_105.part.js": "0525f9e11a49fac2cdf7c2f53247728f",
"main.dart.js_67.part.js": "648fa7949dd9a2fe3d1a6d2e1004209b",
"main.dart.js_74.part.js": "d7be95fc476620bfe5e7178d93433f29",
"main.dart.js": "15384f7361edf2e88795c63131bba881",
"main.dart.js_60.part.js": "a1b2d4691e66747942841b4e72fbcb59",
"main.dart.js_73.part.js": "937ae1c647eded40d0b182eaa74d683e",
"main.dart.js_31.part.js": "f55a46b71c54e0a7beb760aea69f58b9",
"main.dart.js_99.part.js": "ba1158c236589b2bdc87b2b69195fa7d",
"main.dart.js_46.part.js": "f9da21d97401582741f926af2849d0df",
"main.dart.js_4.part.js": "938464da79afe876352f57e5c5ac15de",
"assets/AssetManifest.json": "22aeb5576816ef556b7f7be9445cc005",
"assets/assets/icon/Check.png": "ac50dce90c3076dcbbf8567b1de6c036",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "fd4082173963fec73976c21509d157e0",
"main.dart.js_72.part.js": "3faecf338ca07386cfd9218e89d62520",
"main.dart.js_101.part.js": "432c1afadef53a7bdae09fc09644022f",
"main.dart.js_102.part.js": "8dda4dc74d1c4325b626d64b5efac37e",
"main.dart.js_75.part.js": "0dfe81f3c7d927d4ab68f2fc506a2285",
"main.dart.js_95.part.js": "0055b394f5089ede4da14f1f8fe01376",
"main.dart.js_93.part.js": "38287a3989134c07cc14d54520667bc9",
"main.dart.js_71.part.js": "3a95e000f9cbd957f6dc5a41614914af",
"main.dart.js_96.part.js": "552307dee42993ef38a42ded49e53d28",
"main.dart.js_28.part.js": "7ece653052886830645ccc8db2ba58d0",
"main.dart.js_98.part.js": "3f494cc872c1d384c74cea6f7c08af9d",
"main.dart.js_55.part.js": "1f58bce08a77ceb7657c0ee3d868b16c",
"main.dart.js_91.part.js": "5646388d8a0fb9c940f26487670f8da6",
"main.dart.js_42.part.js": "95ad3d0f4e16d49015b49df40ee86976",
"main.dart.js_12.part.js": "45f6fb59d15d985b87905acd954f0254",
"main.dart.js_1.part.js": "fa72d505dc9478ffffcfd7b58c8ce380",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_94.part.js": "9236edb6621fe08b303cfe6273aedf1a",
"main.dart.js_9.part.js": "8395c3dd60e68a030cc16a1197d40012",
"main.dart.js_68.part.js": "6bd94c1dccd81b6f8c397d51b120e068",
"main.dart.js_51.part.js": "ea781575e9e9c27629850743d88713f9",
"main.dart.js_17.part.js": "1627c603777e4ac8dd7a879c6235e5c3",
"main.dart.js_14.part.js": "c8900a2a024e9662cdd0b25dc93d0526",
"main.dart.js_30.part.js": "e7b6655cf75fc42f156e2c36227ad464",
"main.dart.js_44.part.js": "f6eecee83f62f7eef03721ee21870ebe",
"main.dart.js_29.part.js": "004f46b87d92008b5692a5b521b911f6",
"main.dart.js_49.part.js": "9ae5221a12242453296773e9cd0b3bbd",
"main.dart.js_43.part.js": "95fa955ca8cca5baf0247829de774ff2",
"main.dart.js_88.part.js": "41a4d38ae4f1c349836da2805d414f53",
"main.dart.js_57.part.js": "3aec16776ee9781f06221e87ffc584f0",
"main.dart.js_77.part.js": "436fdf2c189fcc47ba1b6a96e33a03f6",
"main.dart.js_7.part.js": "8ef7aa63c1260503c48cd397267e5d91",
"main.dart.js_63.part.js": "29f54109a5da2e08a70bce826942f5bb",
"main.dart.js_34.part.js": "5b7bf667b509daed49d4e89a84316f5e",
"main.dart.js_81.part.js": "7c70a434c5740128bd1763a687ae5ea5",
"index.html": "663190813b8882b28e311dcd1515f00b",
"/": "663190813b8882b28e311dcd1515f00b",
"main.dart.js_38.part.js": "d22138fdb06831e61f7cecbff9502463",
"main.dart.js_13.part.js": "2eaa9ed9e3454905e812eabf0fc61ac6",
"main.dart.js_79.part.js": "455799c6d5410232cd84ad4fe15820a3",
"main.dart.js_6.part.js": "706a41c06e023c483d3cdbb030e86cec",
"main.dart.js_45.part.js": "de822c4b66fd2bb633f1f9ede3acd132",
"main.dart.js_62.part.js": "4eaa6ec7873e91282749eb4f05e4119b",
"main.dart.js_90.part.js": "b2ed2253810d8f711e3bedf45f3c10c5",
"main.dart.js_69.part.js": "339e36f630a9d591408a9c314ab2b484",
"main.dart.js_40.part.js": "f9f9967ac47b30fd525271b1a368173b",
"main.dart.js_56.part.js": "958363f7c15525f4635bb63eb0cf3d3e",
"main.dart.js_8.part.js": "7b0ff9dbe7cbe1a9362d1bce0942159a",
"main.dart.js_35.part.js": "ab6f004aeb23e0712cde7700d5a4eca1",
"favicon.png": "4181eae128f3688142d8464d36afbde0",
"main.dart.js_10.part.js": "0de23883f8e7530aa0791a0789e2aaae",
"main.dart.js_48.part.js": "7e10cc4697aabb551628cf999d3a9ebf",
"main.dart.js_54.part.js": "cd23360fb57448d1801f3d423bb22329",
"main.dart.js_32.part.js": "90c8d8961e86ae11be9532c0838d6e1f",
"main.dart.js_47.part.js": "801a17ba69120a182a2c5e0609f308d3",
"main.dart.js_76.part.js": "c07aafabdb53a0ede070e08d68f62e5f",
"main.dart.js_26.part.js": "f09745ce7d46e6b47298b9e7f369c7a9",
"version.json": "fa4a1c76d94eab891de37aa415745342",
"main.dart.js_15.part.js": "4c1806094cdd3775622a40485b0bf03d",
"main.dart.js_3.part.js": "ea23e9af3828a838766c6f9cbedc3fa6",
"main.dart.js_58.part.js": "75c412c0083d150996e563c1289aedb7",
"main.dart.js_97.part.js": "d0839021e47af1091e735dc5624aa124",
"main.dart.js_50.part.js": "ded3e465ee4d4cbf03eb2042be658464",
"main.dart.js_37.part.js": "a4504b98ec8645700555431896e39628",
"main.dart.js_70.part.js": "c0a6d734a205f28db1a9c2575477e000",
"main.dart.js_104.part.js": "64df01c89d908ef3e4257d892923b976",
"main.dart.js_100.part.js": "59c1f4f8326d694469a6adc0d18f6a3f",
"manifest.json": "00b727979ef78715cbd3e77133767af6",
"main.dart.js_61.part.js": "262d0a958b3beb6b9f7178e03f284c38",
"icons/Icon-192.png": "578bb3db79aabd64228d4c4fc02f0995",
"icons/Icon-512.png": "06d32d3fb1cc50fe7e17a961700ad3e5",
"main.dart.js_39.part.js": "00381c6952e43f0706d90a86f854df63",
"main.dart.js_89.part.js": "961d46958d580901e826882615b8f482",
"main.dart.js_27.part.js": "928368d4f5fb0b2da4c0c2b7b92c5b94",
"main.dart.js_41.part.js": "a0748c3fb68a109d89b48555855ada1f",
"main.dart.js_21.part.js": "0b7686e7202846da1402cf6000af47b7",
"main.dart.js_66.part.js": "c0802907e4935890dd6bc441ec1cf8a6"
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
