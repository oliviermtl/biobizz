const timestamp = 1640071383181;
const build = [
  "/_app/start-fcde6c4e.js",
  "/_app/assets/start-d5b4de3e.css",
  "/_app/pages/__layout.svelte-3d4f1ccc.js",
  "/_app/assets/pages/__layout.svelte-37183ca8.css",
  "/_app/error.svelte-6c46f10b.js",
  "/_app/pages/index.svelte-cb135697.js",
  "/_app/assets/pages/index.svelte-17930c1d.css",
  "/_app/pages/settings.svelte-65d1f157.js",
  "/_app/pages/biobizz.svelte-b80abe65.js",
  "/_app/pages/sign-in.svelte-c6b04240.js",
  "/_app/assets/pages/sign-in.svelte-a56fdcbf.css",
  "/_app/pages/about.svelte-b4ff28b2.js",
  "/_app/assets/pages/about.svelte-bf4528fa.css",
  "/_app/pages/todos/index.svelte-39a59175.js",
  "/_app/assets/pages/todos/index.svelte-784042c1.css",
  "/_app/chunks/vendor-3f532c32.js",
  "/_app/assets/vendor-e29c58cb.css",
  "/_app/chunks/supabase-22964e5f.js",
  "/_app/chunks/store-62bf1f0b.js"
];
const files = [
  "/favicon.png",
  "/icons/icon.png",
  "/manifest.json",
  "/robots.txt",
  "/svelte-welcome.png",
  "/svelte-welcome.webp"
];
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
