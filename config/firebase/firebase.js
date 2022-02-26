import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBfOp3YQD_hEwTeOik-sfAKTqLUGtAnDh4',
	authDomain: 'nftu-96c88.firebaseapp.com',
	projectId: 'nftu-96c88',
	storageBucket: 'nftu-96c88.appspot.com',
	messagingSenderId: '913414210485',
	appId: '1:913414210485:web:06e31802ce745b988d0ffc',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
