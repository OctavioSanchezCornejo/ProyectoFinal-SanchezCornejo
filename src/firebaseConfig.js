// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4reMobtFUDYhXCHfnnRqvxdUIUu_37Ic",
    authDomain: "proyectofinal-com43290.firebaseapp.com",
    projectId: "proyectofinal-com43290",
    storageBucket: "proyectofinal-com43290.appspot.com",
    messagingSenderId: "1069349671553",
    appId: "1:1069349671553:web:19719c1c15a46780aa7380"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)