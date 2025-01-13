// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcw54V8hxcPFBqBkEcq2wnVYKxtvpsrIw",
  authDomain: "share-expenses-ea6c6.firebaseapp.com",
  databaseURL: "https://share-expenses-ea6c6.firebaseio.com",
  projectId: "share-expenses-ea6c6",
  storageBucket: "share-expenses-ea6c6.appspot.com",
  messagingSenderId: "612065875322",
  appId: "1:612065875322:web:b2ef2a989a20af8d2832c3",
  measurementId: "G-GNXX1DX7CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);          // Authentication
export const db = getFirestore(app);      // Firestore Database
export const functions = getFunctions(app); // Firebase Cloud Functions
