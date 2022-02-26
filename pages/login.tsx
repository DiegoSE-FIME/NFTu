import { NextPage } from 'next';
import { AuthContext } from '../context/AuthProvider';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

const login: NextPage = () => {
	const router = useRouter();
	const { user, signIn } = useContext(AuthContext);

	useEffect(() => {
		if (user) {
			router.push('/');
		}
	}, [user]);

	return (
		<>
			<div className="flex justify-center">
				<button
					className="inline-flex outline outline-1 outline-teal-400 items-center h-10 px-5 mt-2.5 text-indigo-100 transition-colors duration-150 focus:shadow-outline hover:bg-teal-400 hover:text-black rounded"
					onClick={signIn}>
					Sign in with Google
				</button>
			</div>
		</>
	);
};

export default login;
