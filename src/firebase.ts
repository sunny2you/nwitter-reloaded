import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtYtUrpNIp76_H5ynwuJvwnqLNCEuq0b8",
  authDomain: "nwitter-reloaded-9d3a5.firebaseapp.com",
  projectId: "nwitter-reloaded-9d3a5",
  storageBucket: "nwitter-reloaded-9d3a5.appspot.com",
  messagingSenderId: "87262371870",
  appId: "1:87262371870:web:f488da8d735bedbfec4e0f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
