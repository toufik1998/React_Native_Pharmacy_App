// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth}  from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDxfYWfBmCamrx1Et9RaE7i05KR8RCaHAA",
//   authDomain: "pharma-auth-4089b.firebaseapp.com",
//   projectId: "pharma-auth-4089b",
//   storageBucket: "pharma-auth-4089b.appspot.com",
//   messagingSenderId: "257118450369",
//   appId: "1:257118450369:web:d7f172f352c0a81d5c9a40",
//   measurementId: "G-QPZ3E6KMBP"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCaAphl2eyXYvYr-rNiKWtBTDZd7qQ5zhY",
  authDomain: "pharma-auth-34bc7.firebaseapp.com",
  projectId: "pharma-auth-34bc7",
  storageBucket: "pharma-auth-34bc7.appspot.com",
  messagingSenderId: "707254379772",
  appId: "1:707254379772:web:1de87247dec31fc7056379",
  measurementId: "G-BG0JHREQYH"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app)
const auth = getAuth(app)

export  {app,db,auth};
