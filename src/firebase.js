// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC8oIqY1diKQn0CDtG4hMjkYnERVtm4OU",
  authDomain: "project-umair.firebaseapp.com",
  projectId: "project-umair",
  storageBucket: "project-umair.appspot.com",
  messagingSenderId: "47574412328",
  appId: "1:47574412328:web:1155611a93b8ac6a47591d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth(app);

export {auth , db};