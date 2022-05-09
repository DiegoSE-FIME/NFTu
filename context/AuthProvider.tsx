import { useState } from 'react';
import { AuthContext } from './AuthContext';
import type { User } from 'firebase/auth';
import { supabase } from '../utils/supabaseClient';

type AuthProviderProps = {
	children: JSX.Element | JSX.Element[];
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	async function createSupabaseUser(user: User): Promise<any[] | null> {
		const { data, error } = await supabase.from('users').insert([
			{
				uid: user.uid,
				displayName: user.displayName,
				email: user.email,
				photoURL: user.photoURL,
			},
		]);

		if (data) {
			setUser(user);
		}
		if (error) {
			console.error(error);
		}

		return data;
	}

	async function signInWithGoogle() {
		const { error } = await supabase.auth.signIn({ provider: 'google' });
		if (error)
			console.log(`Status:  ${error.status} - Message: ${error.message}`);
	}

	const signOutUser = async (): Promise<void> => {
		await supabase.auth.signOut();
		console.log('signed out');
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				signInWithGoogle,
				signOutUser,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
