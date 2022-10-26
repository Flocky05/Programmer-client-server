// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_gSRB2ZlaOTWLhCscxUC_9xZ8XZ35maU",
    authDomain: "programmer-621f5.firebaseapp.com",
    projectId: "programmer-621f5",
    storageBucket: "programmer-621f5.appspot.com",
    messagingSenderId: "437213961854",
    appId: "1:437213961854:web:e5c4cd26641c970359422f",
    measurementId: "G-KYJ00L1S4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;