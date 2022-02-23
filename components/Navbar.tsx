import styles from './Logo.module.css';
import Link from 'next/link';
import { useCallback, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { connector } from '../config/web3';
import { useRouter } from 'next/router';

const Navbar = () => {
	const router = useRouter();

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
	console.log(chainId, account);
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
					{active ? (
						<button
							className="inline-flex items-center h-10 px-5 mt-2.5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 hidden xl:inline-flex"
							onClick={disconnectWallet}>
							{' '}
							Disconnect wallet{' '}
						</button>
					) : (
						<button
							className="inline-flex items-center h-10 px-5 mt-2.5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-8 hidden xl:inline-flex"
							onClick={connectWallet}>
							{' '}
							Connect wallet{' '}
						</button>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
