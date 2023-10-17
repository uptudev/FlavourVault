// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

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

let user;

export const signUp = async (email, password) => {
    try {
        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                const userCredential = createUserWithEmailAndPassword(auth, email, password);
                return userCredential.user;

            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            });


           } catch (error) {
        throw error;
    }
}

export const signIn = async (email, password) => {
    try {
        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                const userCredential = signInWithEmailAndPassword(auth, email, password);
                return userCredential.user;
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    } catch (error) {
        throw error;
    }
}

export const logOut = async () => {
    try {
        user = await signOut(auth);
    } catch (error) {
        throw error;
    }
}

// Function to check if a user is authenticated
export const loggedIn = async () => {
    try {
        let logIn: boolean = await !!auth.currentUser;
        return logIn;
    } catch (error) {
        throw error;
    }
};

export const getCurrentUser = async () => {
    try {
        return user;
    } catch (error) {
        throw error;
    }
}

const handleSignUp = async () => {
    try {
        user = await signUp(email, password);
        goto('/');
    } catch (error) {
        console.error(error.message);
    }
}

const handleSignIn = async () => {
    try {
        user = await signIn(email, password);
        goto('/');
    } catch (error) {
        console.error(error.message);
    }
}
