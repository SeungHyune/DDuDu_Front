if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const c = e || ("document" in self ? document.currentScript.src : "") || location.href;
    if (s[c]) return;
    let t = {};
    const o = (e) => a(e, c),
      r = { module: { uri: c }, exports: t, require: o };
    s[c] = Promise.all(n.map((e) => r[e] || o(e))).then((e) => (i(...e), t));
  };
}
define(["./workbox-f1770938"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/KXqMZwzR8x6OqRjSRPcB1/_buildManifest.js",
          revision: "e0a21c7d7f93d89dce16df0231dc76f2",
        },
        {
          url: "/_next/static/KXqMZwzR8x6OqRjSRPcB1/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        { url: "/_next/static/chunks/125-811193430403b4a3.js", revision: "KXqMZwzR8x6OqRjSRPcB1" },
        { url: "/_next/static/chunks/441-006cd41f05c155cf.js", revision: "KXqMZwzR8x6OqRjSRPcB1" },
        { url: "/_next/static/chunks/462-25f47d0ee2dca5c1.js", revision: "KXqMZwzR8x6OqRjSRPcB1" },
        { url: "/_next/static/chunks/468-238525743b8f033f.js", revision: "KXqMZwzR8x6OqRjSRPcB1" },
        {
          url: "/_next/static/chunks/602dbae6-826994d3daf44230.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        { url: "/_next/static/chunks/68-f66173de15833f28.js", revision: "KXqMZwzR8x6OqRjSRPcB1" },
        { url: "/_next/static/chunks/73-6b37496018fcb9fb.js", revision: "KXqMZwzR8x6OqRjSRPcB1" },
        { url: "/_next/static/chunks/967-bce6a8a8f9afd099.js", revision: "KXqMZwzR8x6OqRjSRPcB1" },
        {
          url: "/_next/static/chunks/app/(route)/feed/page-884a6313783b5917.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/goal/editor/%5Bid%5D/repeat/page-436bcf3dbdb442bb.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/goal/editor/%5Bid%5D/repeats/page-7bf85a61de73259c.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/goal/editor/page-b082abea376c3413.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/goal/page-9a738db934715f64.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/home/page-8131419c42785760.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/layout-b67cadf4107d46fa.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/login/page-73344fa7e721cf36.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/notification/ddudu/page-5b8987b1b2665a34.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/notification/page-14510dfb64033754.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/notification/template/page-aefe939014270127.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/page-84741a8394b04e97.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/signup/page-58572bd77592f89a.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/statistics/goal/%5Bid%5D/page-dfcce188db939bba.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/statistics/page-9d63bc5d8800ccba.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/(route)/template/page-65297c4408537f64.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/app/_not-found-da3c976430a3aa40.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/fd9d1056-05e576d001e66686.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/framework-f66176bb897dc684.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        { url: "/_next/static/chunks/main-9440de0aacf6f80e.js", revision: "KXqMZwzR8x6OqRjSRPcB1" },
        {
          url: "/_next/static/chunks/main-app-7e190c018e0c035e.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/pages/_app-75f6107b0260711c.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-f07129c54bf4238c.js",
          revision: "KXqMZwzR8x6OqRjSRPcB1",
        },
        { url: "/_next/static/css/234ef1d516e3214d.css", revision: "234ef1d516e3214d" },
        { url: "/_next/static/css/86b79a340d720463.css", revision: "86b79a340d720463" },
        { url: "/_next/static/css/ee9f1d6e7fcb097c.css", revision: "ee9f1d6e7fcb097c" },
        {
          url: "/_next/static/media/0bb6dc123aa42fb6-s.p.woff2",
          revision: "d57ff6f22085316b0326e4396df975d3",
        },
        {
          url: "/_next/static/media/491c32c5f702201c-s.p.woff",
          revision: "17458b7840c51e9c8a8646c495049cbb",
        },
        {
          url: "/_next/static/media/53a38f85c52416f3-s.p.woff",
          revision: "f0124504b2ad9bae6e4d562cfffaa02b",
        },
        {
          url: "/_next/static/media/6543f81ed59b2e06-s.p.woff",
          revision: "7fdc09f6de82c11d66c573cfdfe794f6",
        },
        {
          url: "/_next/static/media/91d855b67a63e74f-s.p.woff2",
          revision: "de87dfe939de7a3a1f7564bdc95b9f9e",
        },
        {
          url: "/_next/static/media/ae11f023272d3641-s.p.woff2",
          revision: "6f876d098a687c3ac9c6871fe473b3f1",
        },
        {
          url: "/_next/static/media/bff605305ca72295-s.p.woff2",
          revision: "9d46d938dff0062eddc760e606b2a020",
        },
        {
          url: "/_next/static/media/c60b48a09f668ab3-s.p.woff",
          revision: "f4d5d7240069d0dd291579991883da22",
        },
        {
          url: "/_next/static/media/de5f35e2b8d4bc52-s.p.woff2",
          revision: "c9026604bd1a4fea44be2b5f71290b36",
        },
        {
          url: "/_next/static/media/fff9cde1a6ba42e6-s.p.woff",
          revision: "498c948874e4278ce199f05dd7b79b37",
        },
        {
          url: "/_next/static/media/userProfile.9ce6eb73.svg",
          revision: "b15211b77da96d7f394e89e0534a0f71",
        },
        { url: "/assets/userProfile.svg", revision: "b15211b77da96d7f394e89e0534a0f71" },
        {
          url: "/fonts/SpoqaHanSans/bold/SpoqaHanSansNeo-Bold.woff",
          revision: "498c948874e4278ce199f05dd7b79b37",
        },
        {
          url: "/fonts/SpoqaHanSans/bold/SpoqaHanSansNeo-Bold.woff2",
          revision: "d57ff6f22085316b0326e4396df975d3",
        },
        {
          url: "/fonts/SpoqaHanSans/medium/SpoqaHanSansNeo-Regular.woff",
          revision: "17458b7840c51e9c8a8646c495049cbb",
        },
        {
          url: "/fonts/SpoqaHanSans/medium/SpoqaHanSansNeo-Regular.woff2",
          revision: "6f876d098a687c3ac9c6871fe473b3f1",
        },
        {
          url: "/fonts/SpoqaHanSans/regular/SpoqaHanSansNeo-Light.woff",
          revision: "f0124504b2ad9bae6e4d562cfffaa02b",
        },
        {
          url: "/fonts/SpoqaHanSans/regular/SpoqaHanSansNeo-Light.woff2",
          revision: "de87dfe939de7a3a1f7564bdc95b9f9e",
        },
        {
          url: "/fonts/SpoqaHanSans/semiBold/SpoqaHanSansNeo-Medium.woff",
          revision: "f4d5d7240069d0dd291579991883da22",
        },
        {
          url: "/fonts/SpoqaHanSans/semiBold/SpoqaHanSansNeo-Medium.woff2",
          revision: "9d46d938dff0062eddc760e606b2a020",
        },
        {
          url: "/fonts/SpoqaHanSans/thin/SpoqaHanSansNeo-Thin.woff",
          revision: "7fdc09f6de82c11d66c573cfdfe794f6",
        },
        {
          url: "/fonts/SpoqaHanSans/thin/SpoqaHanSansNeo-Thin.woff2",
          revision: "c9026604bd1a4fea44be2b5f71290b36",
        },
        { url: "/icons/favicon.ico", revision: "a2663ba7cf954869690c6529eff6f5fb" },
        { url: "/icons/icon-192.png", revision: "80f4a716ba14fa9cc3842dbfa535eac1" },
        { url: "/icons/icon-384.png", revision: "ff161810ab2cb7577fab19414b456eee" },
        { url: "/icons/icon-512.png", revision: "7a00c5e559bbd245eb9b525e4b8c894f" },
        { url: "/manifest.json", revision: "b52c06bf954365d1ef1b1be40ee566a7" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, { status: 200, statusText: "OK", headers: e.headers })
                : e,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        a &&
        !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") && a && !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      "GET",
    );
});