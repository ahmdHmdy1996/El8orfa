// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAwlQUf4EclpxpQuy82FH2oRgYFztmu7eg",
    authDomain: "fire-study-78d5d.firebaseapp.com",
    projectId: "fire-study-78d5d",
    storageBucket: "fire-study-78d5d.appspot.com",
    messagingSenderId: "708328601492",
    appId: "1:708328601492:web:c7d8d37ef2935f004c4181",
    measurementId: "G-FEDP59VX8G"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export  const auth = getAuth(app)
