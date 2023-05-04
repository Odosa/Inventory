import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFWFNmSdo65iAwSLdWk1tAHDMGsHPvcLM",
  authDomain: "inventory-25c96.firebaseapp.com",
  projectId: "inventory-25c96",
  storageBucket: "inventory-25c96.appspot.com",
  messagingSenderId: "425931975318",
  appId: "1:425931975318:web:9874d33ab1aea167f9b0b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)