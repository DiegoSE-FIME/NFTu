import { NextPage } from 'next';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { theme } from '../components/tailwindClasses';

const login: NextPage = () => {
	const { signIn } = useContext(AuthContext);

	return (
		<>
			<div className="flex justify-center mt-5">
				<button className={theme.loginButton} onClick={signIn}>
					Sign in with Google
				</button>
			</div>
			<div className="flex justify-center mt-5">hello from login</div>
		</>
	);
};

export default login;
