// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
} from 'firebase/auth';

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
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider, signInWithPopup, signOut, onAuthStateChanged };
