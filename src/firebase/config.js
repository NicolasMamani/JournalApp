// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'; // note: usamos lite porque no necesitamos todas las funcionalidades


const firebaseConfig = {
  apiKey: "AIzaSyBWeDkDqLJD9Ukee5DTiAw5vPS8LyqowEo",
  authDomain: "jornal-app-ef934.firebaseapp.com",
  projectId: "jornal-app-ef934",
  storageBucket: "jornal-app-ef934.appspot.com",
  messagingSenderId: "666679702738",
  appId: "1:666679702738:web:393b523cbc55eb7866290b"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(firebaseApp); // note: autenticación
export const FirestoreDB = getFirestore( firebaseApp ); // note: base de datos de firestore