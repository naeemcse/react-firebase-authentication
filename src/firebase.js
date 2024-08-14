// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,sendPasswordResetEmail,GoogleAuthProvider,signInWithPopup} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

// for Social LogiIn
const provider = new GoogleAuthProvider();


export const registerWithEmailAndPassword = async (email, password) => {
    try{
        const user  = await createUserWithEmailAndPassword(auth, email, password) ;
       // console.log(user);
       return user;
    }
    catch (error) {
        console.log(error);
    }

}

export const logInWithEmailAndPassword = async (email, password) => {
    try{
        const user  = await signInWithEmailAndPassword(auth, email, password) ;
       // console.log(user);
       return user;
    }
    catch (error) {
        console.log(error);
    }

}


const resetPassword = async (email) => {

    try {
        const user = await sendPasswordResetEmail(auth, email);
        // console.log(user
        return user;
    } catch (error) {
        console.log(error);
    }
}

const singInWithGoogle = async () =>{
  try {
    const res  = await  signInWithPopup(auth, provider)
      // console.log("From firebase request"+ user.user) ;
    const user = res.user ;
    return user;
    }
    catch(error){
   console.log(error)
}

}

const analytics = getAnalytics(app);

export  {auth , resetPassword , singInWithGoogle};
