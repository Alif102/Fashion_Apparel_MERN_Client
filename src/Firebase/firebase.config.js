// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS0uQREDMKiRdd9vpsa4XdOejeboeeo5g",
  authDomain: "fashion-apparel-mern.firebaseapp.com",
  projectId: "fashion-apparel-mern",
  storageBucket: "fashion-apparel-mern.appspot.com",
  messagingSenderId: "512246137502",
  appId: "1:512246137502:web:2cc948296606877719f18f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

