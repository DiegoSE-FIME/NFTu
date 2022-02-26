import { AuthContext } from './AuthContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
	auth,
	db,
	provider,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from '../config/firebase/firebase.js';

import { ref, set } from 'firebase/database';
import { FirebaseData } from '../interfaces/interfaces';

type AuthProviderProps = {
	children: JSX.Element | JSX.Element[];
};

export interface IUser {
	uid: string;
	email: string;
	displayName: string;
	photoURL: string;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const initalUserData = {
		uid: '',
		email: '',
		displayName: '',
		photoURL: '',
		createdAt: '',
	};
	const [user, setUser] = useState<FirebaseData>(initalUserData);
	const [isLoading, setIsLoading] = useState(true);

	const router = useRouter();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user as FirebaseData);
				setIsLoading(false);
			} else {
				setUser(initalUserData);
				setIsLoading(false);
			}
		});
	}, [user]);

	const signIn = async () => {
		await signInWithPopup(auth, provider);
		const firebaseUser = auth.currentUser;
		setUser({
			uid: firebaseUser?.uid || '',
			email: firebaseUser?.email || '',
			displayName: firebaseUser?.displayName || '',
			photoURL: firebaseUser?.photoURL || '',
			createdAt: new Date().toISOString(),
		});
	};

	const logOut = async () => {
		signOut(auth);
		setUser(initalUserData);
		router.push('/');
	};

	const addUser = async (user: IUser) => {
		set(ref(db, 'users'), {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL,
			createdAt: new Date().toISOString(),
			lastLoginAt: new Date().toISOString(),
		});
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isLoading,
				signIn,
				logOut,
				addUser,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
