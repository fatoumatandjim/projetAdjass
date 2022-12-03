// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeZ966wJiaid_28XoKDg7cpKMuvF4V7wA",
  authDomain: "cryptobase-6dbf5.firebaseapp.com",
  projectId: "cryptobase-6dbf5",
  storageBucket: "cryptobase-6dbf5.appspot.com",
  messagingSenderId: "165161167286",
  appId: "1:165161167286:web:f9881234f7310a5f113917",
  measurementId: "G-JNXNKBBYVB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app