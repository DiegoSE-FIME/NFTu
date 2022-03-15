import { AuthContext } from './AuthContext';
import { FirebaseData, IUser } from '../interfaces';
import { useState, useEffect } from 'react';
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
	const [firebaseUser, setFirebaseUser] = useState<IUser | null>(null);
	const [firebaseData, setFirebaseData] = useState<FirebaseData | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const signInWithGoogle = async () => {
		const result = await signInWithPopup(auth, provider);
		if (result.user) {
			const user = result.user;
			const userData: IUser = {
				uid: user?.uid,
				email: user?.email || '',
				displayName: user?.displayName || '',
				photoURL: user?.photoURL || '',
				createdAt: user.metadata?.creationTime || '',
			};
			setFirebaseUser(userData);
			setIsLoading(false);
		}
	};

	const signOutUser = async (): Promise<void> => {
		await signOut(auth);
		console.log('signed out');
		setFirebaseUser(null);
		setIsLoading(false);
	};

	const addUser = async (user: IUser): Promise<void> => {
		const userData: FirebaseData = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL,
			createdAt: user.createdAt,
		};
		await addDoc(collection(db, 'users'), userData);
	};

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				const userData: IUser = {
					uid: user?.uid,
					email: user?.email || '',
					displayName: user?.displayName || '',
					photoURL: user?.photoURL || '',
					createdAt: user.metadata?.creationTime || '',
				};
				setFirebaseUser(userData);
				await addUser(userData);
				setIsLoading(false);
			} else {
				setFirebaseUser(null);
				setIsLoading(false);
			}
		});
	}, []);

	useEffect(() => {
		if (firebaseUser) {
			const userData: FirebaseData = {
				uid: firebaseUser.uid,
				email: firebaseUser.email,
				displayName: firebaseUser.displayName,
				photoURL: firebaseUser.photoURL,
				createdAt: firebaseUser.createdAt,
			};
			setFirebaseData(userData);
		}
	}, [firebaseUser]);

	return (
		<AuthContext.Provider
			value={{
				firebaseUser,
				firebaseData,
				isLoading,
				signInWithGoogle,
				signOutUser,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
