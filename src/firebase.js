import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA44o_5rFLLAlivLGtt25zou2A0HDZIwfg",
    authDomain: "twitter-clone-395e1.firebaseapp.com",
    projectId: "twitter-clone-395e1",
    storageBucket: "twitter-clone-395e1.appspot.com",
    messagingSenderId: "884921292294",
    appId: "1:884921292294:web:a063e4e04fdaf1383b5587",
    measurementId: "G-1BL6RYLNZ3"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  export default db;  