/* =====================================================================
   Configuración de Firebase · Monitoreo RSVR Switch Ass'y (HPM)
   Proyecto Firebase: HPM-RSVR-Switch-Assy-01

   Cómo obtener estos datos:
   Consola de Firebase → Descripción general → "+ Agregar app" → Web (</>)
   → nombre "Monitoreo RSVR" → Registrar app → copia el bloque firebaseConfig
   y pega cada valor abajo, reemplazando los "PEGAR_...".
   ===================================================================== */
var RSVR_FIREBASE_CONFIG = {
  apiKey:            "PEGAR_API_KEY",
  authDomain:        "PEGAR_PROJECT_ID.firebaseapp.com",
  projectId:         "PEGAR_PROJECT_ID",
  storageBucket:     "PEGAR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PEGAR_SENDER_ID",
  appId:             "PEGAR_APP_ID"
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
    try { RSVR_DB.enablePersistence({ synchronizeTabs: true }).catch(function(){}); } catch (e) {}
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
