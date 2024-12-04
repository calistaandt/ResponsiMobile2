// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCYmk_ol-4FIKqbVe7zykdVft1RpgBtJvo",
    authDomain: "responsimobile-d08d6.firebaseapp.com",
    projectId: "responsimobile-d08d6",
    storageBucket: "responsimobile-d08d6.firebasestorage.app",
    messagingSenderId: "186991611622",
    appId: "1:186991611622:web:92e992b7e4477d2f5d7527"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

const db = getFirestore(firebase);

export { auth, googleProvider, db };