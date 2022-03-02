import styles from './Logo.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import { connector } from '../config/web3';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
	const router = useRouter();
	const { firebaseUser, signOutUser } = useContext(AuthContext);
	const { activate, active, deactivate, error, account, chainId } =
		useWeb3React();

	const connectWallet = useCallback(() => {
		activate(connector);
		localStorage.setItem('previouslyConnected', 'true');
	}, [activate]);

	const disconnectWallet = () => {
		deactivate();
		localStorage.removeItem('previouslyConnected');
	};

	if (error) {
		router.push('/walletError');
	}

	return (
		<div>
			<nav className="px-2 sm:px-4 py-2.5">
				<div className="container flex flex-wrap justify-between items-center mx-auto ">
					<Link href="/">
						<a className="flex items-center whitespace-nowrap px-2">
							<span className={styles.logo}>NFTu</span>
						</a>
					</Link>

					<div className="flex items-center justify-center nav-links">
						<Link href="/marketplace">
							<a className="px-2 py-1 text-sm  text-white-500 hover:text-teal-200">
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
								className="inline-flex items-center h-10 px-5 mt-2.5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 hidden xl:inline-flex"
								onClick={disconnectWallet}>
								{' '}
								Disconnect wallet{' '}
							</button>
						) : (
							<button
								className="inline-flex items-center h-10 px-5 mt-2.5 text-indigo-100 transition-colors duration-150 bg-indigo-600 rounded-lg focus:shadow-outline hover:bg-indigo-800 hidden xl:inline-flex"
								onClick={connectWallet}>
								{' '}
								Connect wallet{' '}
							</button>
						)}

						{firebaseUser ? (
							<button
								className="inline-flex items-center h-10 px-5 mt-2.5 text-indigo-100 transition-colors duration-150 bg-gray-500 rounded-lg focus:shadow-outline hover:bg-indigo-800"
								onClick={signOutUser}>
								{' '}
								Sign out{' '}
							</button>
						) : (
							<button
								className="inline-flex items-center h-10 px-5 mt-2.5 text-indigo-100 transition-colors duration-150 bg-indigo-600 rounded-lg focus:shadow-outline hover:bg-indigo-800"
								onClick={() => router.push('/Login')}>
								{' '}
								Sign In{' '}
							</button>
						)}
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
