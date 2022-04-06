// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlEeHr-VRLlmncnySgMnT4i3E_9sxZTnc",
    authDomain: "email-password-auth-fc106.firebaseapp.com",
    projectId: "email-password-auth-fc106",
    storageBucket: "email-password-auth-fc106.appspot.com",
    messagingSenderId: "938281672524",
    appId: "1:938281672524:web:4da96b295ab7e5fd6739e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;