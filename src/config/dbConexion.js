const firebase = require('firebase-admin');

var serviceAccount = require("../../e-volutionfb-firebase-adminsdk-btwpa-1962bf1bd4.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://e-volutionfb.firebaseio.com/'
});

const db = firebase.firestore();

module.exports = db;