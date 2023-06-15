import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChNqc_y7_08KKDW5c5uwqOamLxHeZXgYk",
  authDomain: "hackshark-7ff93.firebaseapp.com",
  projectId: "hackshark-7ff93",
  storageBucket: "hackshark-7ff93.appspot.com",
  messagingSenderId: "143747897876",
  appId: "1:143747897876:web:19b6ba282551fcc73b6501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export default app;
