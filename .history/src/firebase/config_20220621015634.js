import firebase from "firebase/app";
import "firebase/auth";

if (firebase.apps.length) {
  firebase.initializeApp({
    apiKey:,

    authDomain: "",

    projectId: "",
  });
}

export default firebase