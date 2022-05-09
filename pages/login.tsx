import { NextPage } from 'next';
import { useContext, useEffect, Fragment } from 'react';
import { AuthChangeEvent, Session } from '@supabase/supabase-js';
import { Auth, Button } from '@supabase/ui';
import { supabase } from '../utils/supabaseClient';
import { AuthContext } from '../context';
import { PageLayout } from '../components';

const Login: NextPage = () => {
	const { signInWithGoogle } = useContext(AuthContext);
	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event: AuthChangeEvent, session: Session | null) => {
				fetch('/api/auth', {
					method: 'POST',
					headers: new Headers({ 'Content-Type': 'application/json' }),
					credentials: 'same-origin',
					body: JSON.stringify({ event, session }),
				}).then((res) => res.json());
			}
		);

		return () => authListener?.unsubscribe();
	}, []);
	return (
		<Fragment>
			<Auth.UserContextProvider supabaseClient={supabase}>
				<PageLayout title="NFTu - Login">
					<div className="w-full p-8 flex justify-center flex-wrap">
						<div className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md">
							<Button
								onClick={signInWithGoogle}
								className="px-4 py-3 w-full text-center text-gray-600 font-bold">
								Sign in with Google
							</Button>
						</div>
					</div>
				</PageLayout>
			</Auth.UserContextProvider>
		</Fragment>
	);
};

export default Login;
