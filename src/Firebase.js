import firebase from "firebase";
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBzrNCGCrILP-lDAm3NHBh_-5Onnt6PawM",
  authDomain: "react-contact-form-79a80.firebaseapp.com",
  projectId: "react-contact-form-79a80",
  storageBucket: "react-contact-form-79a80.appspot.com",
  messagingSenderId: "226624955381",
  appId: "1:226624955381:web:6b42e32d2c8671d5b0b6bc",
});
var database = firebaseApp.firestore();
export { database };
