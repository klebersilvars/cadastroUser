import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA11j6zvg1W_A_NL4zXm9XR65RJEgl6WEU",
  authDomain: "cadastrouser-dedff.firebaseapp.com",
  projectId: "cadastrouser-dedff",
  storageBucket: "cadastrouser-dedff.appspot.com",
  messagingSenderId: "230903878664",
  appId: "1:230903878664:web:2bb29c115b5f65900f2dbd",
  measurementId: "G-2ZEQNBCRQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}