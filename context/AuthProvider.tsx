import { db, auth, provider } from '../config/firebase/firebase';
import { useState, useEffect, createContext } from 'react';
import { User, AuthContextType } from '../interfaces/interfaces';

type AuthProviderProps = {
	children: JSX.Element | JSX.Element[];
};

export const AuthContext = createContext<AuthContextType>({
	user: null,
	signIn: () => Promise.resolve(),
	signOut: () => Promise.resolve(),
	addUser: () => {},
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		auth.onAuthStateChanged((user: User | null) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});
	}, []);

	const addUser = async (user: User) => {
		const userRef = db.collection('users').doc(user.uid);
		const userSnapshot = await userRef.get();
		if (!userSnapshot.exists) {
			await userRef.set({
				email: user.email,
				displayName: user.displayName,
				photoURL: user.photoURL,
			});
		}
	};

	const signIn = async () => {
		const result = await auth.signInWithPopup(provider);
		const user = result.user;
		if (user) {
			setUser(user);
		}
	};

	const signOut = async () => {
		await auth.signOut();
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, signIn, signOut, addUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
