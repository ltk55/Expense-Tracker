import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDiK2b-6EUetpflqbD6g1Intx4KbkNTZ4c",
  authDomain: "expense-tracker-55.firebaseapp.com",
  projectId: "expense-tracker-55",
  storageBucket: "expense-tracker-55.appspot.com",
  messagingSenderId: "668727771691",
  appId: "1:668727771691:web:c2a3c49b585bdfe219a06e",
  measurementId: "G-TTQQEQYVE1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// firebase.firestore().settings({ timestampInSnapshots: true });

export default firebase;
