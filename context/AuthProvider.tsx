import { useState, useEffect, useCallback } from 'react';
import { AuthContext } from './AuthContext';
import { IUser } from '../interfaces';
import { User } from 'firebase/auth';
import {
	auth,
	db,
	provider,
	signInWithPopup,
	signOut,
	addDoc,
	collection,
} from '../config/firebase';

type AuthProviderProps = {
	children: JSX.Element | JSX.Element[];
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	function detectUser() {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				setFirebaseUser(user);
				setIsLoading(false);
			} else {
				setFirebaseUser(null);
				setIsLoading(false);
			}
		});
	}

	useEffect(() => {
		detectUser();
	}, []);

	async function addUser(user: User) {
		if (user) {
			const userData: IUser = {
				uid: user.uid,
				email: user.email || '',
				displayName: user.displayName || '',
				photoURL: user.photoURL || '',
				createdAt: new Date().toISOString(),
			};
			await addDoc(collection(db, 'users'), userData);
		}
	}

	useEffect(() => {
		if (firebaseUser) {
			addUser(firebaseUser);
		}
	}, [firebaseUser]);

	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, provider);
		} catch (error) {
			console.log(error);
		}
	};

	const signOutUser = async (): Promise<void> => {
		await signOut(auth);
		console.log('signed out');
		setFirebaseUser(null);
		setIsLoading(false);
	};

	return (
		<AuthContext.Provider
			value={{
				firebaseUser,
				isLoading,
				signInWithGoogle,
				signOutUser,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
