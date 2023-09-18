// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy8YO8aRdfJBV5j1PqR56qfQUXzeEMD-s",
  authDomain: "flavourvault-uptu.firebaseapp.com",
  projectId: "flavourvault-uptu",
  storageBucket: "flavourvault-uptu.appspot.com",
  messagingSenderId: "632022189791",
  appId: "1:632022189791:web:db004b02cba65b53614b6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

export function handleSignUp(email: string, password: string) {
    console.log("Attempting to sign up new account...");
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const userdata = userCredential.user;
            user.auth_data = userdata;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export function handleSignIn(email: string, password: string) {    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const userdata = userCredential.user;
            user.auth_data = userdata;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}
