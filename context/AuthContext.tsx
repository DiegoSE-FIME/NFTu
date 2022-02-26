import { createContext } from 'react';
import { IAuthContext } from '../interfaces/interfaces';

export const AuthContext = createContext<IAuthContext>({
	user: null,
	signIn: () => Promise.resolve(),
	logOut: () => Promise.resolve(),
	addUser: () => {},
	isLoading: false,
});
