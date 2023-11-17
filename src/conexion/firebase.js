// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcn9tFBVUBzTH4zamrw_xo9B9WgXu9qr0",
  authDomain: "react-app04-c3c0b.firebaseapp.com",
  databaseURL: "https://react-app04-c3c0b-default-rtdb.firebaseio.com",
  projectId: "react-app04-c3c0b",
  storageBucket: "react-app04-c3c0b.appspot.com",
  messagingSenderId: "815601426262",
  appId: "1:815601426262:web:d375bdd41c3cf36195c0f7",
  measurementId: "G-DWRK1K1PCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);