import React, { useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { get, getDatabase, ref, set } from "firebase/database";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
export const firebaseConfig = {
  apiKey: "AIzaSyCzLtMPBc8NwB_D7qpb4DNA8NxMfkXrRac",
  authDomain: "confident-connect.firebaseapp.com",
  databaseURL: "https://confident-connect-default-rtdb.firebaseio.com",
  projectId: "confident-connect",
  storageBucket: "confident-connect.appspot.com",
  messagingSenderId: "581207031268",
  appId: "1:581207031268:web:8023ca2a69cddcdc715bf1",
  measurementId: "G-WZ9GYT28W8"
};
const app = initializeApp(firebaseConfig);


// Constante pour realtime Database 
export const database = getDatabase(app);
//Constante pour authentification
export  const auth = getAuth(app);
export const  storage  = getStorage(app);
export const db = getFirestore(app);










