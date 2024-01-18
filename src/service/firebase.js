import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBLSKqEGw-tFgjjHAg_b3on0wV-dEmn6Eg",
  authDomain: "fir-clone-b9f0e.firebaseapp.com",
  projectId: "fir-clone-b9f0e",
  storageBucket: "fir-clone-b9f0e.appspot.com",
  messagingSenderId: "1027876232261",
  appId: "1:1027876232261:web:cf724c50c90b1ab3b6d72c",
  measurementId: "G-W053R4QCQS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// for db store
const db = getFirestore(app);
const auth = getAuth(app);
// for google analytic

export { db, auth };
