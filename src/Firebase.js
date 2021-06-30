import firebase from "firebase";
var firebaseApp = firebase.initializeApp({
  //Your Firebase Code
});
var database = firebaseApp.firestore();
export { database };
