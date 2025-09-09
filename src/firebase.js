// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM1ioRZg-NHVeP0JVjBqpQiGZjJ2EVdjc",
  authDomain: "e-com-5d655.firebaseapp.com",
  databaseURL: "https://e-com-5d655-default-rtdb.firebaseio.com",
  projectId: "e-com-5d655",
  storageBucket: "e-com-5d655.firebasestorage.app",
  messagingSenderId: "780772765551",
  appId: "1:780772765551:web:203dd060439eec48ac029a",
  measurementId: "G-8BJBDQ1SK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// ✅ Export auth so Login.js & Signup.js can use it
export const auth = getAuth(app);