import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  
    apiKey: "AIzaSyAX2z3ItjM6xbdnh2DRHr0L6DBosGYI_tk",
    authDomain: "pvt-ext4.firebaseapp.com",
    projectId: "pvt-ext4",
    storageBucket: "pvt-ext4.appspot.com",
    messagingSenderId: "97651497992",
    appId: "1:97651497992:web:070a00821b35db935605bd",
    measurementId: "G-CGGHYMRP9D"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
