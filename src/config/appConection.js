const firebase = require('firebase');

var firebaseConfig = {
  apiKey: "AIzaSyBPVrua5g_HqHlSVnx3fNM9SBfWvydqLCc",
  authDomain: "e-volutionfb.firebaseapp.com",
  databaseURL: "https://e-volutionfb.firebaseio.com",
  projectId: "e-volutionfb",
  storageBucket: "e-volutionfb.appspot.com",
  messagingSenderId: "522715167673",
  appId: "1:522715167673:web:fcbcd7795b3c4376a21468"
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;