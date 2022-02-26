// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import {
	getAuth,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyBfOp3YQD_hEwTeOik-sfAKTqLUGtAnDh4',
	authDomain: 'nftu-96c88.firebaseapp.com',
	projectId: 'nftu-96c88',
	storageBucket: 'nftu-96c88.appspot.com',
	messagingSenderId: '913414210485',
	appId: '1:913414210485:web:06e31802ce745b988d0ffc',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
	app,
	db,
	auth,
	provider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
};
