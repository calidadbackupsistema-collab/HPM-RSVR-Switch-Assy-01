/* =====================================================================
   Configuración de Firebase · Monitoreo RSVR Switch Ass'y (HPM)
   Proyecto Firebase: HPM-RSVR-Switch-Assy-01

   Cómo obtener estos datos:
   Consola de Firebase → Descripción general → "+ Agregar app" → Web (</>)
   → nombre "Monitoreo RSVR" → Registrar app → copia el bloque firebaseConfig
   y pega cada valor abajo, reemplazando los "PEGAR_...".
   ===================================================================== */
var RSVR_FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCXx_2dD8Iwx0Er3Biy8Hh4nBuJ5-7LOzA",
  authDomain:        "hpm-rsvr-switch-assy-01.firebaseapp.com",
  projectId:         "hpm-rsvr-switch-assy-01",
  storageBucket:     "hpm-rsvr-switch-assy-01.firebasestorage.app",
  messagingSenderId: "408287289071",
  appId:             "1:408287289071:web:2af881d541a2ffe0d1051a"
};

/* ---------- No es necesario modificar nada debajo de esta línea ---------- */
var RSVR_FIREBASE_CONFIGURED = typeof firebase !== "undefined" &&
  !!RSVR_FIREBASE_CONFIG.apiKey && RSVR_FIREBASE_CONFIG.apiKey.indexOf("PEGAR_") !== 0;
var RSVR_DB = null;
var RSVR_AUTH_READY = Promise.reject(new Error("Firebase no configurado"));
RSVR_AUTH_READY.catch(function(){});

if (RSVR_FIREBASE_CONFIGURED) {
  try {
    if (!firebase.apps.length) firebase.initializeApp(RSVR_FIREBASE_CONFIG);
    RSVR_DB = firebase.firestore();
    RSVR_AUTH_READY = new Promise(function (resolve, reject) {
      var off = firebase.auth().onAuthStateChanged(function (user) {
        if (user) { off(); resolve(user); }
      });
      firebase.auth().signInAnonymously().catch(function (err) { off(); reject(err); });
    });
    RSVR_AUTH_READY.catch(function(){});
  } catch (e) {
    console.error("Firebase:", e);
    RSVR_FIREBASE_CONFIGURED = false;
  }
}
