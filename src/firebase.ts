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

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
}

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
}

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
}
