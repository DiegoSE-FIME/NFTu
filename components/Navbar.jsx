import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useCallback, useContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import { useCycle } from 'framer-motion';
import { connector } from '../config/web3';
import { AuthContext } from '../context';
import styles from './Logo.module.css';
import { Button, User } from '@nextui-org/react';
import { Sidebar } from './Sidebar';

export const Navbar = () => {
	const [open, cycleOpen] = useCycle(false, true);
	const { firebaseUser, signOutUser, signInWithGoogle } =
		useContext(AuthContext);
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

	const links = [
		{ name: 'Marketplace', to: '/marketplace', id: 1 },
		{ name: 'Resources', to: '/resources', id: 2 },
		{ name: 'Community', to: '/community', id: 3 },
		{ name: 'Sign In', to: '/login', id: 4 },
	];

	const sideVariants = {
		closed: {
			transition: {
				staggerChildren: 0.2,
				staggerDirection: -1,
			},
		},
		open: {
			transition: {
				staggerChildren: 0.2,
				staggerDirection: 1,
			},
		},
	};

	const itemVariants = {
		closed: {
			opacity: 0,
		},
		open: { opacity: 1 },
	};

	const onLinkClicked = () => {
		cycleOpen(false);
	};

	return (
		<nav className="px-3 sm:px-4 py-2.5">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<div className="flex flex-nowrap w-fit">
					<Link href="/" passHref>
						<p className={styles.logo}>NFTu</p>
					</Link>
					<span className="uppercase bg-black border border-white text-gray-200 text-xs font-semibold -ml-2 sm:ml-3 mt-7 sm:mt-2.5 px-2.5 py-0.5 rounded-full h-5 w-fit sm:w-full">
						Beta
					</span>
				</div>
				<div className="hidden sm:flex">
					{links.map(({ name, to, id }) => (
						<Fragment key={id}>
							<Link href={to} passHref>
								<ul className="flex flex-col mt-4 xl:text-[1rem] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
									<li className="block py-2 pr-4 pl-3 hover:text-gray-400 cursor-pointer">
										{name}
									</li>
								</ul>
							</Link>
						</Fragment>
					))}
				</div>
				<div className="hidden sm:flex sm:items-center md:order-2">
					{active ? (
						<Fragment>
							<Button color="gradient" auto rounded onClick={disconnectWallet}>
								Disconnect Wallet
							</Button>
							<Link href="/dashboard" passHref>
								<User
									bordered
									src="https://i.pravatar.cc/150?u=a048581f4e29026701d"
									name="William Howard"
									color="success"
									pointer
								/>
							</Link>
						</Fragment>
					) : (
						<Button color="gradient" auto rounded onClick={connectWallet}>
							Connect Wallet
						</Button>
					)}
				</div>
				<div className="block sm:hidden p-5 z-50">
					<div className="z-50 sticky">
						<svg
							className="w-6 h-6"
							onClick={() => cycleOpen(!open)}
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"></path>
						</svg>
						<svg
							className="hidden w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"></path>
						</svg>
					</div>
					<Sidebar
						sideVariants={sideVariants}
						itemVariants={itemVariants}
						links={links}
						open={open}
						onLinkClicked={onLinkClicked}
					/>
				</div>
			</div>
		</nav>
	);
};
