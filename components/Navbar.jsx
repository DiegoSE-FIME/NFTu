import styles from './Logo.module.css';
import Link from 'next/link';
import { useCallback, useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import { connector } from '../config/web3';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';
import { theme } from './tailwindClasses';

export const Navbar = () => {
	const { firebaseUser, signOutUser } = useContext(AuthContext);
	const { activate, active, deactivate, error } = useWeb3React();
	const router = useRouter();
	const connectWallet = useCallback(() => {
		if (typeof window.ethereum !== 'undefined') {
			activate(connector);
			localStorage.setItem('previouslyConnected', 'true');
		} else {
			router.push('/WalletError');
		}
	}, [activate, router]);

	const disconnectWallet = () => {
		deactivate();
		localStorage.removeItem('previouslyConnected');
	};

	if (error) {
		console.log(error);
	}

	return (
		<>
			<nav className="px-2 sm:px-4 py-2.5">
				<div className="border-gray-200 px-2 sm:px-4 py-2.5 container flex flex-wrap justify-between items-center mx-auto rounded-lg">
					<Link href="/">
						<a className="flex items-center whitespace-nowrap px-4">
							<span className={styles.logo}>NFTu.</span>
						</a>
					</Link>

					<div className="flex items-center justify-center nav-links hidden xl:inline-flex">
						<Link href="/marketplace">
							<a className="px-2 py-1 text-sm  text-white-500 hover:text-teal-200 hidden xl:inline-flex">
								Marketplace
							</a>
						</Link>
						<Link href="/resources">
							<a className="px-2 py-1 text-sm  text-white-500 hover:text-teal-200">
								Resources
							</a>
						</Link>
						<Link href="/community">
							<a className="px-2 py-1 text-sm  text-white-500 hover:text-teal-200">
								Community
							</a>
						</Link>
					</div>

					{/* add class hidden sm:inline-flex*/}
					<div className="space-x-2">
						{active ? (
							<button
								className={theme.navbarLoginButton}
								onClick={disconnectWallet}>
								{' '}
								Disconnect wallet{' '}
							</button>
						) : (
							<button
								className={theme.navbarLoginButton}
								onClick={connectWallet}>
								{' '}
								Connect wallet{' '}
							</button>
						)}

						{firebaseUser ? (
							<button className={theme.signOutButton} onClick={signOutUser}>
								{' '}
								Sign out{' '}
							</button>
						) : (
							<Link href="/login" passHref>
								<button className={theme.signInButton}> Sign In </button>
							</Link>
						)}
					</div>
				</div>
				<div className="xl:hidden text-xs border border-gray-500 mt-5">
					<div className="flex items-center xl:ml-24 justify-center nav-links">
						<Link href="/marketplace">
							<a className="px-2 py-1 text-sm  text-gray-500 hover:text-teal-200">
								Marketplace
							</a>
						</Link>
						<Link href="/resources">
							<a className="px-2 py-1 text-sm  text-gray-500 hover:text-teal-200">
								Resources
							</a>
						</Link>
						<Link href="/community">
							<a className="px-2 py-1 text-sm  text-gray-500 hover:text-teal-200">
								Community
							</a>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};
