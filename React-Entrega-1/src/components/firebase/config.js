import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARmLNTkDRQxGCKNNlWHV09BmsI76G94eE",
  authDomain: "ecommerce-bajonero.firebaseapp.com",
  projectId: "ecommerce-bajonero",
  storageBucket: "ecommerce-bajonero.firebasestorage.app",
  messagingSenderId: "1055022150097",
  appId: "1:1055022150097:web:c1a600f3f24d7d8ff2b0f0",
  measurementId: "G-C3W6VSTWH0"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);