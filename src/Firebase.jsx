import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAw5pHHEodPenNBEXj3M-_4b5eoj21Anoc",
  authDomain: "mylogin-9d62e.firebaseapp.com",
  projectId: "mylogin-9d62e",
  storageBucket: "mylogin-9d62e.appspot.com",
  messagingSenderId: "522547762071",
  appId: "1:522547762071:web:b906384b6ba225da12ead2",
  measurementId: "G-V15NMH39M4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);