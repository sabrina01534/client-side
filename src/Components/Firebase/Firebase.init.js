// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCOgZPxkkZa3YYTzYN76V1QcSsNOVRBmQg",
  authDomain: "assignment-10-83fd1.firebaseapp.com",
  projectId: "assignment-10-83fd1",
  storageBucket: "assignment-10-83fd1.firebasestorage.app",
  messagingSenderId: "174806177483",
  appId: "1:174806177483:web:fe320954cefd6e1afbad4e"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

