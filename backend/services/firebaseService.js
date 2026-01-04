const admin = require("firebase-admin");

let firebaseApp;

function getFirestore() {
  if (!firebaseApp) {
    const serviceAccount = require("../firebase-key.json");

    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  return admin.firestore();
}

module.exports = getFirestore;
