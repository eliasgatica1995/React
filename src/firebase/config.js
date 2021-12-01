// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjENwGxZ6J3kxby5196_51Sed-h3bH184",
  authDomain: "react-30112021.firebaseapp.com",
  projectId: "react-30112021",
  storageBucket: "react-30112021.appspot.com",
  messagingSenderId: "454183058572",
  appId: "1:454183058572:web:19214780e1109eba88cfa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)