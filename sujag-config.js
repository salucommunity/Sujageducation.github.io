/* SUJAG Education configuration.
   Leave FIREBASE as null to run in DEMO mode (data stays in the visitor's browser).
   To go live, follow FIREBASE-SETUP.txt and paste your Firebase web app config below. */
window.SUJAG_CONFIG = {
  FIREBASE: null,
  /* Example:
  FIREBASE: {
    apiKey: "AIza...",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef"
  }, */
  /* Emails allowed to open the Admin Panel (must also be listed in firestore.rules) */
  ADMIN_EMAILS: ["YOUR_ADMIN_EMAIL@gmail.com"],
  WHATSAPP: "923253061605",
  WHATSAPP_DISPLAY: "0325 3061605"
};
