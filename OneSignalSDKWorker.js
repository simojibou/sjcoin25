<script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
    <script>
      window.OneSignalDeferred = window.OneSignalDeferred || [];
      OneSignalDeferred.push(async function(OneSignal) {
        await OneSignal.init({
          appId: "717b40db-52bf-45b1-8a6a-600ca9beedc0",
          safari_web_id: "web.onesignal.auto.18f55e14-9585-4855-a0ee-ea6515e10e22",
          notifyButton: { enable: false },
          allowLocalhostAsSecureOrigin: true,
          
          // 👇👇👇 هذا هو التعديل السحري للإصلاح 👇👇👇
          // نخبره أن يبحث عن الملف داخل مجلد sjcoin25
          serviceWorkerPath: 'sjcoin25/OneSignalSDKWorker.js',
          serviceWorkerParam: { scope: '/sjcoin25/' }
        });
      });
    </script>
