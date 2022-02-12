import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBoae3PzKrcsYHRWl-4aIL-n8iVnkDyR_I",
    authDomain: "instagram-clone-8c0a6.firebaseapp.com",
    projectId: "instagram-clone-8c0a6",
    storageBucket: "instagram-clone-8c0a6.appspot.com",
    messagingSenderId: "419687242784",
    appId: "1:419687242784:web:9b20a5f4d5542055d43045",
    measurementId: "G-4ZYL2SJ8S1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }