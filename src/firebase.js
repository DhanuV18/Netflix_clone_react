import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app"


const firebaseConfig = {
  apiKey: "AIzaSyCmtsWJATm44UMusH-n_ugpeksHwZSIpqk",
  authDomain: "netflix-clone-6c7d8.firebaseapp.com",
  projectId: "netflix-clone-6c7d8",
  storageBucket: "netflix-clone-6c7d8.appspot.com",
  messagingSenderId: "324562696664",
  appId: "1:324562696664:web:342c809d8be017ec7ddaad"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebase.auth();

export { firebase }
export { auth };
export default db;
