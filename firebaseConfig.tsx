// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV1g3w72GYqtBTyAQJ3jM_iouw-VfTHGk",
  authDomain: "gemin-cdb93.firebaseapp.com",
  projectId: "gemin-cdb93",
  storageBucket: "gemin-cdb93.appspot.com",
  messagingSenderId: "714121162418",
  appId: "1:714121162418:web:cdf19ac2ef71fc14e663ab",
  measurementId: "G-PLR8HZGZ30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);