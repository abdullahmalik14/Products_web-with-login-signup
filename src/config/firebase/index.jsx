// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDicwoNZsMvKFRLYxPI6JLobRlWugfX7PQ",
  authDomain: "product-web-14.firebaseapp.com",
  projectId: "product-web-14",
  storageBucket: "product-web-14.appspot.com",
  messagingSenderId: "609374486784",
  appId: "1:609374486784:web:f990035d47595a0ce2b3e5"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

const auth = getAuth(firebase_app);
export {firebase_app,auth}