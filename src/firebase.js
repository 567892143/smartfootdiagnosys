import firebase from 'firebase/compat/app';
import {getDatabase} from 'firebase/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQk7GhMeafi6BL5KE2l_J1AXIfNyVEguo",
  authDomain: "footryx-2.firebaseapp.com",
  projectId: "footryx-2",
  storageBucket: "footryx-2.appspot.com",
  messagingSenderId: "1043295031956",
  appId: "1:1043295031956:web:5c2a7875aa55230a661a81"
};

firebase.initializeApp(firebaseConfig);
const db = getDatabase();
const db1 = firebase.firestore();
export {db,db1}