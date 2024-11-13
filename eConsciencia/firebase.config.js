import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDilHTnR_fuGQS7DCv8JXAKD7BkzHNQ0p0",
  authDomain: "econsciencia-820d6.firebaseapp.com",
  projectId: "econsciencia-820d6",
  storageBucket: "econsciencia-820d6.firebasestorage.app",
  messagingSenderId: "656765534378",
  appId: "1:656765534378:web:0ec7a323973a3ab3e090d3"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app); 
