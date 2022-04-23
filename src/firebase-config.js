// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

import { getStorage } from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-YyxrIAMv9Fe8dd4C02BYG_0PLkDpAec",
  authDomain: "bearwear-dde0b.firebaseapp.com",
  projectId: "bearwear-dde0b",
  storageBucket: "bearwear-dde0b.appspot.com",
  messagingSenderId: "356927930904",
  appId: "1:356927930904:web:4b7b5972a67c590151396d",
  measurementId: "G-FQ4G0Y1KLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage();
export const auth = getAuth(app);