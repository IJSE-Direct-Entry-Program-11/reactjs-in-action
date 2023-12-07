// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkJGETFsF5HwZxLo2AF6gZq1WoIXtD7T0",
    authDomain: "to-do-app-6933f.firebaseapp.com",
    projectId: "to-do-app-6933f",
    storageBucket: "to-do-app-6933f.appspot.com",
    messagingSenderId: "630065699440",
    appId: "1:630065699440:web:0c4ba92d656a0521dfb2b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};

