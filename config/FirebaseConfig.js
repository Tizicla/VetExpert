// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "vetexpert-851ce.firebaseapp.com",
  projectId: "vetexpert-851ce",
  storageBucket: "vetexpert-851ce.firebasestorage.app",
  messagingSenderId: "198273608680",
  appId: "1:198273608680:web:87640607a68c72d069525d",
  measurementId: "G-JB4GS9LPT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //(app, nombredelaBDenFirebase en caso de tener una)
//const analytics = getAnalytics(app);