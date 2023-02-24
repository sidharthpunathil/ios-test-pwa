// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtJLdriaCgMGIuQ9WOaabLmAslmY4Emjo",
    authDomain: "maxq-test.firebaseapp.com",
    databaseURL: "https://maxq-test-default-rtdb.firebaseio.com",
    projectId: "maxq-test",
    storageBucket: "maxq-test.appspot.com",
    messagingSenderId: "444602160391",
    appId: "1:444602160391:web:5849613814c6e455eca1a2",
    measurementId: "G-B7GV6Q3QS4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

// export default firebaseConfig;
