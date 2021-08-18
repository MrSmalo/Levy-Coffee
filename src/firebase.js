import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_sIqzUL-8qW4v1FAAsyUrKU1ie_u25rM",
  authDomain: "levy-coffee.firebaseapp.com",
  projectId: "levy-coffee",
  storageBucket: "levy-coffee.appspot.com",
  messagingSenderId: "951466433215",
  appId: "1:951466433215:web:499a8019ede035e5d5440a"
};

firebase.initializeApp(firebaseConfig);

export default firebase;