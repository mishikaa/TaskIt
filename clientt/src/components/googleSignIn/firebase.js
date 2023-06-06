// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-7jNufNtM-AdoHKKQDl8hzl_iA519NnE",
  authDomain: "taskit-5aa7e.firebaseapp.com",
  projectId: "taskit-5aa7e",
  storageBucket: "taskit-5aa7e.appspot.com",
  messagingSenderId: "1046799633032",
  appId: "1:1046799633032:web:7445a70d1fe6f64fe16d3d",
  measurementId: "G-EPXX089JKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth, provider};

// const db = getFirestore(app);
// const todoCollection = collect(db, "todos")
