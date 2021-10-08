import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAy8yCpoTI3xsBGMFBiiPRVjeo9VVAPXEA",
  authDomain: "tinder-clone-bc59d.firebaseapp.com",
  projectId: "tinder-clone-bc59d",
  storageBucket: "tinder-clone-bc59d.appspot.com",
  messagingSenderId: "140232103226",
  appId: "1:140232103226:web:7d37655eabcf2e516a6c03",
  measurementId: "G-2S9YDDN99Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
