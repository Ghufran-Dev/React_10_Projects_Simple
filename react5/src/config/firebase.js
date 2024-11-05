// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBSvMihmSohqlajYJeEdUoDYvmtRrLjCl4",
  authDomain: "react5-contact.firebaseapp.com",
  projectId: "react5-contact",
  storageBucket: "react5-contact.firebasestorage.app",
  messagingSenderId: "958883486647",
  appId: "1:958883486647:web:96bee415c2d3eba0cae632"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)