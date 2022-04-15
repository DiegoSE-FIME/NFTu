import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import { connector } from '../config/web3';
import { AuthContext } from '../context/AuthContext';
import styles from './Logo.module.css';
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
					<Link href="/" passHref>
						<a className="flex items-center lg:px-12 md:px-12 px-0">
							<span className={styles.logo}>NFTu.</span>
						</a>
					</Link>

					<div className="items-end justify-end nav-links hidden xl:inline-flex space-x-5  text-white-500">
						<Link href="/marketplace">
							<a className="px-2 py-1 text-md hover:text-teal-200 hidden xl:inline-flex">
								Marketplace
							</a>
						</Link>
						<Link href="/resources">
							<a className="px-2 py-1 text-md hover:text-teal-200">Resources</a>
						</Link>
						<Link href="/community">
							<a className="px-2 py-1 text-md hover:text-teal-200">Community</a>
						</Link>
					</div>

					{/* add class hidden sm:inline-flex*/}
					<div className="space-x-2">
						{active ? (
							<button
								className={theme.connectWalletButton}
								onClick={disconnectWallet}>
								{' '}
								Disconnect Wallet{' '}
							</button>
						) : (
							<button
								className={theme.connectWalletButton}
								onClick={connectWallet}>
								{' '}
								Connect Wallet{' '}
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
				<div className="xl:hidden text-xs border border-gray-500 mt-3 sticky">
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
