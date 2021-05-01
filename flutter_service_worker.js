'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "519efde65b7e79723f3c9e3e5ec1aa00",
".git/config": "f147db22b8400ec82db14ce3ccd65f57",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5c9056bb221b230fcce5cd8617759f9d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "46183441d9ffa243b7229a4db282df9b",
".git/logs/refs/heads/master": "46183441d9ffa243b7229a4db282df9b",
".git/logs/refs/remotes/origin/master": "ceb7eff5470246ea30876d2ca33a4164",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/4878044ca8a04073b009197b82e08b71b37026": "55fc257f027d6d29daefc9fcd35ec828",
".git/objects/1d/bf5f096595318b74287555bed7ddd54f0bb9a7": "a955949a738efa601e67537d47b566b2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/d2e754c45a1625d44912cd5af1403326667dd1": "92dfd33ed9b78aa236984b6863f148c9",
".git/objects/23/f31e4aa2d4e7693d76b8e4b4eb41c36351b493": "53a770cb80e4b45a8fdce26619ea5546",
".git/objects/27/1fbbcd7b42e6be953afbd7db8b13e25a274f18": "71f6dc68aba6d5b26f2c41594287ce37",
".git/objects/2f/dffd74fc3a074f8b051e6afbd651ef976eb07d": "d8d605feecc95bc87abbd36a22e1e82a",
".git/objects/3c/377e484b179983f5e40e34915891b0d00ce7c2": "72d6322b30485bdb8887b499465609d4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/77ec1d70d6da00b644b44390e8c6ca5b3e51b2": "269589b9ea8fa961072258631d889629",
".git/objects/66/6d16fab57291675ebb24caafc6320ff71cea9d": "d084d47cb2d54567fe0becf78efb9688",
".git/objects/66/9fe0cd25202347287523fe10e73ac48fd29e60": "535915240fb6f04ccaa8d22abe0cd8f4",
".git/objects/67/39b9269121239e518dc71e5bcd04fa2a56fbb6": "87fcd124a4e8418d4c2e7353316fc8fd",
".git/objects/74/568e83d7707d670cc1b718a52162199ee46a47": "147b7b639b7a59190c1965b8ee02a95c",
".git/objects/76/e63f0f0ebcd87a10deb9ba4c70d67ad6df482e": "1e4e56b4e374ccae9e12ec730a4f03df",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/0454b0163f43dc53750c0f20fbd43d56a8cc4f": "3dd3ecebbe525bfc1b88c0fdd413b5b8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/1ade27d0df753e599144fb333b722d9011b595": "5210bd04db3e2b523ee1ccc71b840bfc",
".git/objects/93/c9b9e4b6637e9f9195eb5c5f848a00226075d6": "4af066d1b7e5fe762c1a6dd86bf86bfc",
".git/objects/9f/f63dfd41f63062d88b87db483b188159f67cc6": "f5ea9bfc56106d2ba35ef7a654c55ddc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/12c2878f439d20adf5ffb0da7e6b8eeb8ad77f": "5b81a9442eb37f14d81ebe33b9940cb8",
".git/objects/a6/37c30659661c1c8dfe5fc7bf0bd37e4ead1342": "f0bd1ad20e75ef83a4c38f6248482698",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/01fb60d6880bef028902d1ce93d6c0e5645641": "67d5b7b756d037b387ceca073c8c17e6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/514fa04bfd7810e843bc10bdc40a406ba62071": "86a655a0656d72d25fe1cdbf77d1afd3",
".git/objects/bc/fc7900880503e76e30c930524af7e05d67b378": "c13e93d49ebb021d8fe339b2996d6864",
".git/objects/cb/a8519c4e9a4e1cb3ff32364066c1a0e9f93e8a": "daf1f2e07a296e82d90ad4dc6d61ba1a",
".git/objects/d4/4658c2da897da58e7f43d333bcfa025332f8aa": "90f4606a9a65bfac5954c21fd6126625",
".git/objects/db/1d9fa5a3058ebd89d1c24295da1ddb5fe2014b": "9e9257d7c7b6fa1c5adb8468ce1c2c33",
".git/objects/df/f9d509e940e6e2c414a215b3deedff682bded9": "2be473df207d9c40d049da848015c1cc",
".git/objects/e5/538632fa226deadd5816da0cf5005364ae4866": "4f51262a80fbc0f479c1a2fc49495acf",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ec/89ccd0de0434218f00b6ef4776db4975cfb4e8": "851b316d1d9269b365649634bc09100c",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f9/b1c06cb73a3aad563ba60c79b05f06554cbbd9": "57a9d3a2ebf19e1639f07d4c24418620",
".git/objects/fa/4d4a0fd946c086b9dd460e8b1b0cb27d19d0c9": "f340d61840a0bb216ece4cf495eb4031",
".git/refs/heads/master": "b5db4b6c1c07ed901810d1f41db41775",
".git/refs/remotes/origin/master": "b5db4b6c1c07ed901810d1f41db41775",
"assets/AssetManifest.json": "fd02fe27f1c9b70952f64baacdc11798",
"assets/assets/images/bg.png": "e864db697af644144857548316e42001",
"assets/assets/images/logo.png": "1338a202051aaebee6f872551e0a3335",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "379124ba8a46fef67f4283e33aaa7ddd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "24dc9a45da090aca94fad1f6fd88ef03",
"/": "24dc9a45da090aca94fad1f6fd88ef03",
"main.dart.js": "e31723ccd253b6d95209842f358f8884",
"manifest.json": "8fb499f1084ad803a4e3f31e31fc94eb",
"version.json": "3daa223e44daa89a1858e16114a8f6d3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
