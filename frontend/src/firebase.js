import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcqRkh6oCqcke6nYhiCAKbM3eBpYs5eqQ",
  authDomain: "quora-clone-9af47.firebaseapp.com",
  projectId: "quora-clone-9af47",
  storageBucket: "quora-clone-9af47.appspot.com",
  messagingSenderId: "622332957768",
  appId: "1:622332957768:web:f83af451238b21793c347d",
  measurementId: "G-DENJ055125"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);