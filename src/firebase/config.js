import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import * as firebase_auth from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDK71GmJQti8CeIywfoUI69GY9wLowICeM",
  authDomain: "finalproject-2c9e3.firebaseapp.com",
  databaseURL: "https://finalproject-2c9e3-default-rtdb.firebaseio.com",
  projectId: "finalproject-2c9e3",
  storageBucket: "finalproject-2c9e3.appspot.com",
  messagingSenderId: "887081165260",
  appId: "1:887081165260:web:d6bda176819e82bf01bd69"
};

const app = initializeApp(firebaseConfig);
export const auth_firebase = firebase_auth;
export const db = getDatabase(app);