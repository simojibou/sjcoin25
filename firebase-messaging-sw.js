// اسم الملف: firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD-sneIBO65i9uQIh3n_jw4MI7GQtjZfV8",
  authDomain: "sj-one.firebaseapp.com",
  projectId: "sj-one",
  storageBucket: "sj-one.appspot.com",
  messagingSenderId: "426335553508",
  appId: "1:426335553508:web:248f76772f6f78419ca9f1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://raw.githubusercontent.com/simojibou/logo/refs/heads/main/shared-0-sheet4.png', // أيقونة التطبيق
    sound: 'default'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
