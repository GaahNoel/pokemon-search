import firebase from 'firebase/app';
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCD5FxM3wErDShmP7gW14v6UTT4etoWXKM",
  authDomain: "pokemonsearch-93dca.firebaseapp.com",
  projectId: "pokemonsearch-93dca",
  storageBucket: "pokemonsearch-93dca.appspot.com",
  messagingSenderId: "224855009869",
  appId: "1:224855009869:web:15dfdd1364acaa17c90a04",
  measurementId: "G-D192DMXKTS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const Firebase = firebase.app();
export const FirebaseAuth = firebase.auth();