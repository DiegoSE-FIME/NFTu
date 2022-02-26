import { createContext, useState, useEffect } from 'react';
import { auth, db, provider } from '../config/firebase';

type AuthContextProviderProps = {
	children: React.ReactNode;
};

type AuthContextType = {
	user: firebase.User | null;
	signIn: () => void;
	signOut: () => void;
};

export const AuthContext = createContext<firebase.User | null>(null);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
	children,
}) => {
	const [user, setUser] = useState<firebase.User | null>(null);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			setUser(user);
		});
	}, []);

	const signIn = () => {
		auth.signInWithPopup(provider);
	};

	const signOut = () => {
		auth.signOut();
	};

	return (
		<AuthContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};
