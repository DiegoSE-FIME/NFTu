import { NextPage } from 'next';
import { theme } from '../theme/';
import { AuthContext } from '../context';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageLayout } from '../components';
const Login: NextPage = () => {
	const { signInWithGoogle, firebaseUser } = useContext(AuthContext);

	return !firebaseUser ? (
		<PageLayout title="NFTu - Login">
			<div className="h-full w-full py-9 px-4">
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
		</PageLayout>
	) : (
		<PageLayout title="NFTu - Login">
			<div className="flex justify-center items-center mt-8">
				<Image
					src={firebaseUser?.photoURL || '/favicon.ico'}
					width={100}
					height={100}
					className={theme.profileImage}
				/>
			</div>
			<div className="mt-5 text-center flex justify-center items-center">
				<h2 className="text-center text-xl xl:text-4xl">
					You are already logged in, {firebaseUser?.displayName || 'NFTu'}!
				</h2>{' '}
			</div>
			<div className="mt-5 text-center flex justify-center items-center">
				<p className="text-center text-xl xl:text-4xl">
					Explore the{' '}
					<Link href="/marketplace">
						<a className="text-teal-400 text-xl text-center xl:text-4xl">
							Marketplace.
						</a>
					</Link>
				</p>
			</div>
		</PageLayout>
	);
};

export default Login;
