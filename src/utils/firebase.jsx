// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoFpNAdEBHERmaI422e-rVfFMZ_04WCj4",
  authDomain: "netflixgpt-b497e.firebaseapp.com",
  projectId: "netflixgpt-b497e",
  storageBucket: "netflixgpt-b497e.firebasestorage.app",
  messagingSenderId: "1028598283464",
  appId: "1:1028598283464:web:d7dd66c27280c3be8439fd",
  measurementId: "G-W82HD9PJH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };