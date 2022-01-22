import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAHzcyPEA6RiqihevFcZa97G8MX2dRFtBs",
  authDomain: "e-ride-adfb8.firebaseapp.com",
  projectId: "e-ride-adfb8",
  storageBucket: "e-ride-adfb8.appspot.com",
  messagingSenderId: "617540973260",
  appId: "1:617540973260:web:7bd88ebcb3a95184378869",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
