import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkBmHpq1uqMOWcqZHn7JuvrpmdRplARyU",
  authDomain: "interviewbotx-4f5e5.firebaseapp.com",
  projectId: "interviewbotx-4f5e5",
  storageBucket: "interviewbotx-4f5e5.firebasestorage.app",
  messagingSenderId: "206972323868",
  appId: "1:206972323868:web:91c194d2e12512854f77d9",
  measurementId: "G-XS9XB7W33E"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);