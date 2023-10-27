// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDotZuUSRz8CObVQzomyDrgGoYz-gc_0hs",
  authDomain: "projectmanager-27e0d.firebaseapp.com",
  projectId: "projectmanager-27e0d",
  storageBucket: "projectmanager-27e0d.appspot.com",
  messagingSenderId: "754416221460",
  appId: "1:754416221460:web:7e9efa782aa3efe49d1601",
  measurementId: "G-KHVQ1NGSJX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); // Use getFirestore to initialize Firestore
