// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIHfG6OC5Znrk8nytCdPVX_MvC2UWqNts",
  authDomain: "fir-assignment-09.firebaseapp.com",
  projectId: "fir-assignment-09",
  storageBucket: "fir-assignment-09.firebasestorage.app",
  messagingSenderId: "607589461069",
  appId: "1:607589461069:web:1084c09203c2ba4a1e0004"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app