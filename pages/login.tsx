import { NextPage } from 'next';
import { theme } from '../components/tailwindClasses';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login: NextPage = () => {
	const { signInWithGoogle, firebaseUser } = useContext(AuthContext);
	const router = useRouter();
	return !firebaseUser ? (
		<div className="h-full  from-green-400 to-indigo-900 w-full py-16 px-4">
			<div className="flex flex-col items-center justify-center">
				<div className="shadow rounded border border-teal-400 lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
					<p
						tabIndex={0}
						role="heading"
						aria-label="Login to your account"
						className="text-2xl font-extrabold leading-6 text-white-800">
						Login to your account
					</p>
					<button
						aria-label="Continue with google"
						role="button"
						className={theme.loginButton}
						onClick={signInWithGoogle}>
						<svg
							width={19}
							height={20}
							viewBox="0 0 19 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d={theme.path1GoogleIcon} fill="#4285F4" />
							<path d={theme.path2GoogleIcon} fill="#34A853" />
							<path d={theme.path3GoogleIcon} fill="#FBBC05" />
							<path d={theme.path4GoogleIcon} fill="#EB4335" />
						</svg>
						<p className="text-base font-medium ml-4 text-white-700">
							Continue with Google
						</p>
					</button>
					<button
						aria-label="Continue with github"
						role="button"
						className={theme.loginButton}>
						<svg
							width={21}
							height={20}
							viewBox="0 0 21 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d={theme.pathGithubIcon} fill="#333333" />
						</svg>
						<p className="text-base font-medium ml-4 text-white-700">
							Continue with Github
						</p>
					</button>
				</div>
			</div>
		</div>
	) : (
		<div className="flex justify-center mt-9">
			<div>
				<h2 className="text-center text-xl">You are already logged in</h2>{' '}
				<Link href="/">
					<a className="text-center text-xl">Go to home page</a>
				</Link>
			</div>
		</div>
	);
};

export default Login;
