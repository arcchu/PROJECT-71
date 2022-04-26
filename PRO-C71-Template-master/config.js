import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBhpmhjQmtlKef-g687t0ENBht2qrukQB0",
    authDomain: "e-library-8443b.firebaseapp.com",
    projectId: "e-library-8443b",
    storageBucket: "e-library-8443b.appspot.com",
    messagingSenderId: "174149115483",
    appId: "1:174149115483:web:7a45beba80d694353d697e"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
