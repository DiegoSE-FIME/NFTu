import { createContext } from 'react';
import { IAuthContext } from '../interfaces';

export const AuthContext = createContext<IAuthContext>({
	user: null,
	signInWithGoogle: () => Promise.resolve(),
	signOutUser: () => Promise.resolve(),
});
