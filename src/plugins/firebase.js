import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp({
  apiKey: "AIzaSyDI_VEZ5xWZnN9wUPxH1svapM1wFZHkWr8",
  authDomain: "muj-foreign-relations.firebaseapp.com",
  databaseURL: "https://muj-foreign-relations.firebaseio.com",
  projectId: "muj-foreign-relations",
  storageBucket: "muj-foreign-relations.appspot.com",
  messagingSenderId: "534214150982",
  appId: "1:534214150982:web:857ff349162f96770e3347"
});

export default firebase;
