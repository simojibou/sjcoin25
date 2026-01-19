importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

self.addEventListener('install', function(event) {
    self.skipWaiting(); // إجبار العامل على العمل فوراً
});

self.addEventListener('activate', function(event) {
    event.waitUntil(clients.claim()); // السيطرة على الصفحة فوراً لإلغاء خطأ postMessage
});
