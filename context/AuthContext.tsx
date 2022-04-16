import { createContext } from 'react';
import { IAuthContext } from '../interfaces';

export const AuthContext = createContext<IAuthContext>({
	firebaseUser: null,
	signInWithGoogle: () => Promise.resolve(),
	signOutUser: () => Promise.resolve(),
	isLoading: false,
});
