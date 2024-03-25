// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXUcnR_-9B8U9_mUQb_6peDj0hYTA8FR8",
  authDomain: "orebi2308.firebaseapp.com",
  projectId: "orebi2308",
  storageBucket: "orebi2308.appspot.com",
  messagingSenderId: "290873849063",
  appId: "1:290873849063:web:f77b6f2b51d82ad7571e42",
  measurementId: "G-GGBGD706DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;