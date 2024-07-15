// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnsZfPmN5PN-_imRoY0oWztNJvvxTKQew",
  authDomain: "letflix-fd271.firebaseapp.com",
  projectId: "letflix-fd271",
  storageBucket: "letflix-fd271.appspot.com",
  messagingSenderId: "398909097965",
  appId: "1:398909097965:web:a15d3acd2932ef7b4709e4",
  measurementId: "G-PGX4CQY2Z9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
