// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// When working with nextjs server side rendering so the app is 
//rendering one instance from the server and other from fire base you don't want
//that so only want one instance to load while loading the app
// so we do singleton pattern to avoid it. 
const firebaseConfig = {
  apiKey: "AIzaSyCRUBPL4n1x3jHBxX2I2KfDPFjvXvKd-qU",
  authDomain: "instagram-clone-55cad.firebaseapp.com",
  projectId: "instagram-clone-55cad",
  storageBucket: "instagram-clone-55cad.appspot.com",
  messagingSenderId: "248355925245",
  appId: "1:248355925245:web:f4741b63bc35deebe8a294",
  measurementId: "G-H9TKFQX69N"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
//!getApps.lenght means check if there noover app rendering if there's no then run the app
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export { app, db, storage };