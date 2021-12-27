/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {  } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCezqMlldR6dukdDjIYoDIgA_swujP0T3g",
  authDomain: "slack-clone-5c723.firebaseapp.com",
  projectId: "slack-clone-5c723",
  storageBucket: "slack-clone-5c723.appspot.com",
  messagingSenderId: "662549808112",
  appId: "1:662549808112:web:17c45e08f8d8e138f29335",
  measurementId: "G-2BVR7E3XWP",
};

const fireBaseApp = initializeApp(firebaseConfig);
const auth = getAuth(fireBaseApp);
const db = getFirestore(fireBaseApp);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
