import firebase from "firebase/app";
import "firebase/auth";

if (firebase.apps.length) {
  firebase.initializeApp({
    apiKey:,

    authDomain: "",

    projectId: "admintemplatenico",

    storageBucket: "admintemplatenico.appspot.com",

    messagingSenderId: "1005832350992",

    appId: "1:1005832350992:web:bc0abd1e4a4535e7d80995",
  });
}

export default firebase