import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvsE78ZOYOUHWOKwiWcnez5jufdogY16o",
    authDomain: "vuefirebase-101-e170e.firebaseapp.com",
    projectId: "vuefirebase-101-e170e",
    storageBucket: "vuefirebase-101-e170e.appspot.com",
    messagingSenderId: "73894748689",
    appId: "1:73894748689:web:4a03fab3725a54a46ac7b0",
    measurementId: "G-G08QH2QJHZ"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}
