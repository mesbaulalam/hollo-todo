import firebase from "firebase";

var firebaseApp;
if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBA-3tflHVgz97bjsnjAPvaq8e_L3-Fc48",
    authDomain: "holo-todo.firebaseapp.com",
    projectId: "holo-todo",
    storageBucket: "holo-todo.appspot.com",
    messagingSenderId: "866779812194",
    appId: "1:866779812194:web:926d09c3fdfafb4db8dc3b",
  });
} else {
  firebaseApp = firebase.app();
}

const db = firebaseApp.firestore();

export { db };
