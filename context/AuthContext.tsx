import { createContext } from 'react';
import { IAuthContext } from '../interfaces/interfaces';

export const AuthContext = createContext<IAuthContext>({
	firebaseUser: null,
	firebaseData: null,
	signInWithGoogle: () => Promise.resolve(),
	signOutUser: () => Promise.resolve(),
	isLoading: false,
});
