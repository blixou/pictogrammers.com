if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const t=e=>i(e,r),n={module:{uri:r},exports:d,require:t};s[r]=Promise.all(a.map((e=>n[e]||t(e)))).then((e=>(c(...e),d)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/183-ee2bc3b19466b861.js",revision:"ee2bc3b19466b861"},{url:"/_next/static/chunks/29-8888409a2ed4a0b4.js",revision:"8888409a2ed4a0b4"},{url:"/_next/static/chunks/819-80529455e10fa8ed.js",revision:"80529455e10fa8ed"},{url:"/_next/static/chunks/b2e984c5-94375106214218c6.js",revision:"94375106214218c6"},{url:"/_next/static/chunks/framework-15da35c207aaa727.js",revision:"15da35c207aaa727"},{url:"/_next/static/chunks/main-a1b9f18ab39572b1.js",revision:"a1b9f18ab39572b1"},{url:"/_next/static/chunks/pages/404-e88b5cbac016287f.js",revision:"e88b5cbac016287f"},{url:"/_next/static/chunks/pages/_app-1259e84d9de7b146.js",revision:"1259e84d9de7b146"},{url:"/_next/static/chunks/pages/_error-409f831d3504c8f5.js",revision:"409f831d3504c8f5"},{url:"/_next/static/chunks/pages/brand-guidelines-50a9eab58315a7bd.js",revision:"50a9eab58315a7bd"},{url:"/_next/static/chunks/pages/docs-416110eec99a0949.js",revision:"416110eec99a0949"},{url:"/_next/static/chunks/pages/docs/%5B...slug%5D-926d4007420bccfb.js",revision:"926d4007420bccfb"},{url:"/_next/static/chunks/pages/icons-a5ad21abb34a703c.js",revision:"a5ad21abb34a703c"},{url:"/_next/static/chunks/pages/icons/%5B...slug%5D-36170b9d199ef35b.js",revision:"36170b9d199ef35b"},{url:"/_next/static/chunks/pages/index-4e6d9859c19dbd06.js",revision:"4e6d9859c19dbd06"},{url:"/_next/static/chunks/pages/tools-79311852d51c881d.js",revision:"79311852d51c881d"},{url:"/_next/static/chunks/pages/tools/github-0c4a852bedcfdf42.js",revision:"0c4a852bedcfdf42"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-36d12a75f0098f30.js",revision:"36d12a75f0098f30"},{url:"/_next/static/css/5ce8fdd15d428de6.css",revision:"5ce8fdd15d428de6"},{url:"/_next/static/css/6290c08f91a9a8a4.css",revision:"6290c08f91a9a8a4"},{url:"/_next/static/css/a1e53a38787ba41b.css",revision:"a1e53a38787ba41b"},{url:"/_next/static/css/c8ee22db0dabac0b.css",revision:"c8ee22db0dabac0b"},{url:"/_next/static/css/d4f78de2d478a368.css",revision:"d4f78de2d478a368"},{url:"/_next/static/css/e09bee3a3688d056.css",revision:"e09bee3a3688d056"},{url:"/_next/static/css/ef46db3751d8e999.css",revision:"ef46db3751d8e999"},{url:"/_next/static/media/0c54b536be3573bc.p.woff2",revision:"b3dd0ecff8ab6f6cc0b2c0352f43c31d"},{url:"/_next/static/media/22dc0d36f9151abe.woff2",revision:"ab6cadb11cd92214999bc7452fed0680"},{url:"/_next/static/media/5350ce5a38a62899.woff2",revision:"c604e596ada2f6ea4803ce1936833d7d"},{url:"/_next/static/media/79bb4274a30c2fae.woff2",revision:"02c1bf6f2db0e2979feb25cbd577f0a4"},{url:"/_next/static/media/bb6f828efde6bd9b.woff2",revision:"fd16eb6e7012c76135bfea902a17b524"},{url:"/_next/static/media/faba9353d9be7b82.woff2",revision:"6ff50fee4c9ae5d33b3f514321e7f53f"},{url:"/_next/static/media/hero-grid.4e73e267.svg",revision:"4e73e267"},{url:"/_next/static/media/white-wave.e4fcef2b.svg",revision:"e4fcef2b"},{url:"/_next/static/oEsN98Y-xpNkdcQqEWSuP/_buildManifest.js",revision:"3007ce842c9c2e49a726b687d882b753"},{url:"/_next/static/oEsN98Y-xpNkdcQqEWSuP/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/apple-touch-icon.png",revision:"c336b70e2993418e911c012d6eb26f2d"},{url:"/assets/docs/grid-96-account.svg",revision:"93dea474609c8f32eb647554a121d47f"},{url:"/assets/docs/grid-96-alert.svg",revision:"98dedcba066b4ac5c40812ab94bcc88c"},{url:"/assets/docs/grid-96-arrow-right-bottom-right.svg",revision:"f046c54f86fc61e638bcadbdcdfbded7"},{url:"/assets/docs/grid-96-bold.svg",revision:"887d854649820c11b2bcd9f465dcda74"},{url:"/assets/docs/grid-96-box.svg",revision:"8f1845d59f00cafaddc96c0d1a2b653b"},{url:"/assets/docs/grid-96-cancel.svg",revision:"549f955522994fa8999ee4f8a90bb82e"},{url:"/assets/docs/grid-96-check.svg",revision:"0ed01099b299ff15e9b25f3ec8b96c9f"},{url:"/assets/docs/grid-96-circle.svg",revision:"009f90769d47b7b6e3cc9b5cf186a77c"},{url:"/assets/docs/grid-96-clock.svg",revision:"d029e373ee5a9766bb44766abbadd96a"},{url:"/assets/docs/grid-96-cog.svg",revision:"b194cc37a6d16136614c2cdac25c25d3"},{url:"/assets/docs/grid-96-edit.svg",revision:"5d4e052dc914497a4ac844766356eaed"},{url:"/assets/docs/grid-96-eye.svg",revision:"5b174651b52196e2b0b2db02a9cab1d3"},{url:"/assets/docs/grid-96-heart.svg",revision:"10f5085df79634af2bbb2e0f0e05e288"},{url:"/assets/docs/grid-96-key.svg",revision:"399c32e2345776bd428921513b6e4567"},{url:"/assets/docs/grid-96-lock.svg",revision:"3fe498eaf710afe7b9801da3a1c516cc"},{url:"/assets/docs/grid-96-marker.svg",revision:"2214c4167636298cd04e9f75391c1738"},{url:"/assets/docs/grid-96-minus-bottom-right.svg",revision:"864f05a5e79452c561a40f4ae3292db7"},{url:"/assets/docs/grid-96-multiple.svg",revision:"e99dfc2f74458beccbd12f5db405eb82"},{url:"/assets/docs/grid-96-network.svg",revision:"2e0fe450aabc06d39ef4b0cd771deef6"},{url:"/assets/docs/grid-96-off.svg",revision:"89b1e1acad3b07b361a0102825f10610"},{url:"/assets/docs/grid-96-outline.svg",revision:"d36f5817a6f6c0ee53989cc38184940b"},{url:"/assets/docs/grid-96-plus-bottom-right.svg",revision:"d969c937cb2185093bb7ae60ede47f25"},{url:"/assets/docs/grid-96-question.svg",revision:"d05e15e2446a71e08e3b256ddcea30b4"},{url:"/assets/docs/grid-96-refresh.svg",revision:"1142816b71e34d8909f6782e23010ee7"},{url:"/assets/docs/grid-96-remove-bottom-right.svg",revision:"efa55f4516a0464ebd4253eebc26c5fb"},{url:"/assets/docs/grid-96-search-bottom-right.svg",revision:"03b38598146d4c7c9eb29f0ab5e6cbfd"},{url:"/assets/docs/grid-96-settings.svg",revision:"7f7af873b86b6db5234263fd776b2163"},{url:"/assets/docs/grid-96-star.svg",revision:"c55f6d8026bdf7bb73f03c148ca80476"},{url:"/assets/docs/grid-96-sync.svg",revision:"043cffd7f6957b8e7947889eb71859bf"},{url:"/assets/docs/grid-96-thick.svg",revision:"6f57790369847636525f739fca7bceeb"},{url:"/assets/docs/grid-96-variant.svg",revision:"09bf0bde49c9a46e2f0474cae2bb0b07"},{url:"/assets/libraries/mdi.svg",revision:"f1acca5f841b2ff32801208715c8f74d"},{url:"/assets/libraries/mdil.svg",revision:"cd60c1c582f5fb14f7a34a273cc74c44"},{url:"/contributors/026d40a8.jpg",revision:"b2779adc028d4776adf2e84b29f6cb1c"},{url:"/contributors/0b6dbaec.jpg",revision:"075e303b167776892a2010e904c9013f"},{url:"/contributors/2034d976.jpg",revision:"1072707481b15bc3492a9fce41563671"},{url:"/contributors/278D5FEB.jpg",revision:"40a23b6a690d3b36f131549a718bcc7f"},{url:"/contributors/42d6115a.jpg",revision:"197bc4a59cd1469a2ad52d463078d7cb"},{url:"/contributors/488193b9.jpg",revision:"210d0b5fe627772bb9fad06b7d02b3f3"},{url:"/contributors/50920196.jpg",revision:"7abe78ab8bf65e04c74c38d64d76b74b"},{url:"/contributors/573DEA44.jpg",revision:"3f4b4a694000287ad5b9aa6a7f13ec13"},{url:"/contributors/58a489e8.jpg",revision:"43b2282c17523308854bb87f944ceafb"},{url:"/contributors/632f0b4e.jpg",revision:"d597c4a67d87abf316270859d1da26e8"},{url:"/contributors/63659a12.jpg",revision:"f2d6e3a79428a08372981e6b1d8f15c8"},{url:"/contributors/79a515ac.jpg",revision:"3a8fe57ad55a80af5ad0b426403d4081"},{url:"/contributors/79c44334.jpg",revision:"ba9ab1339c8406a6f8f7afa963b3bae9"},{url:"/contributors/7ac07f7a.jpg",revision:"78183d97405d4a7a7e361f127b468ed0"},{url:"/contributors/80ba5a4d.jpg",revision:"9a34e92fa58014db2618bfffc175e9e4"},{url:"/contributors/818b2ede.jpg",revision:"7f2f793e7f0f7d5fa9985d0245695723"},{url:"/contributors/9826ba54.jpg",revision:"585b082a5831dfc12f1ce9860fa0879f"},{url:"/contributors/BFC07E9D.jpg",revision:"08a5d03d80c9f1e1b615eb3268c9fb86"},{url:"/contributors/C8B53CA6.jpg",revision:"df8662690b9be606efe2e60f98759111"},{url:"/contributors/FC979CE8.jpg",revision:"55627625fe105b4e1f89313a4484a418"},{url:"/contributors/a8a312b6.jpg",revision:"4daf2db56b0449236fd0654a806081fb"},{url:"/contributors/ab2e559c.jpg",revision:"1aa44fc4181fd185ae1220056dd226de"},{url:"/contributors/bb2d8a7a.jpg",revision:"2dc1995e3dde1f3333cde95874ebf673"},{url:"/contributors/bcedc9e0.jpg",revision:"207483a73fef6a85bdc623d03b77b64a"},{url:"/contributors/c4ea5584.jpg",revision:"58d04ad60412872ff9a7cc1b46acd026"},{url:"/contributors/contributors.json",revision:"41f60fcf4a310c40e2ef4819ec61c49e"},{url:"/contributors/de2f2677.jpg",revision:"bf8dc94530bd556c065c6656a57f00b8"},{url:"/contributors/f6c6b898.jpg",revision:"98e8fa387cd3760328ac1c5345535aa4"},{url:"/favicon.ico",revision:"226bf89150e08a8341b150fb24fa7346"},{url:"/icon-192x192.png",revision:"4eff9257a7b645443b65a72021fcfd68"},{url:"/icon-256x256.png",revision:"9d319b4f52bb88a9bab668a02a99fa7b"},{url:"/icon-384x384.png",revision:"e5cc3da037dc7819d9828523b19d3199"},{url:"/icon-512x512.png",revision:"2fbe322805b6f4eeeb177e346c2c4417"},{url:"/libraries/libraries.json",revision:"4f7139b890061bee71cf280dc2e2b833"},{url:"/libraries/mdi.json",revision:"64025b7fd6de64adb0ea4d4ef8f399ff"},{url:"/libraries/mdil.json",revision:"5aaeb1d92e7a8f40dc2d019d72169616"},{url:"/manifest.json",revision:"bc70959f0d5b321382d51448f6f3348d"},{url:"/og-card.png",revision:"4cba55bad3952d6d9aeaebc5152c724d"},{url:"/pictogrammers-brand-assets.zip",revision:"e68dff084d742c8e7054be9debafcf46"},{url:"/twitter-card.png",revision:"9c0502005da2f489371ea5f54f2d67bd"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
