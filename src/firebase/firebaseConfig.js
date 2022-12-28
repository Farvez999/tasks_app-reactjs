// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdn69DPf4lPzzfnZrsaa0f0ej543qMZpA",
    authDomain: "tasks-app-reactjs.firebaseapp.com",
    projectId: "tasks-app-reactjs",
    storageBucket: "tasks-app-reactjs.appspot.com",
    messagingSenderId: "500585701630",
    appId: "1:500585701630:web:a648378fe768ce9f3b05af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;