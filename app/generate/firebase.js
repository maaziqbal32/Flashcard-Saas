// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import{getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4wzUIlllfY8VgPORPZ40hmRY76JyZNzg",
  authDomain: "flashcardsaas-40363.firebaseapp.com",
  projectId: "flashcardsaas-40363",
  storageBucket: "flashcardsaas-40363.appspot.com",
  messagingSenderId: "682877374658",
  appId: "1:682877374658:web:b11e6026385f3365f2eb5b",
  measurementId: "G-90H43R90YK"
};

// Initialize Firebase
let app;
let db;

if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}


export{ db };