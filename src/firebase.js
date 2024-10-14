// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1A0VDrjSAJmAI-tWdUdbsD8v1S47z2LE",
  authDomain: "zacates-9af03.firebaseapp.com",
  databaseURL: 'https://zacates-9af03-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: "zacates-9af03",
  storageBucket: "zacates-9af03.appspot.com",
  messagingSenderId: "1057555870025",
  appId: "1:1057555870025:web:7d911bd98bb45440ce6a98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;