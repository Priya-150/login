// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyDVTV5-48Y0R0bMXEP719t38qnA6bdk4AY",
  authDomain: "login-page-e0ff8.firebaseapp.com",
  projectId: "login-page-e0ff8",
  storageBucket: "login-page-e0ff8.firebasestorage.app",
  messagingSenderId: "212622563742",
  appId: "1:212622563742:web:afe0a9f6783e8a07465e8f",
  measurementId: "G-6JLNH8VLVG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
