// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1nujDEOd84tabtGnoTzbTEM-tIM_fUR4",
  authDomain: "hicity-cc05f.firebaseapp.com",
  projectId: "hicity-cc05f",
  storageBucket: "hicity-cc05f.appspot.com",
  messagingSenderId: "916982621728",
  appId: "1:916982621728:web:ad9f68d4d4bd4bc630fe45",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
