import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { Button, User } from '@nextui-org/react';

import { useWeb3React } from '@web3-react/core';
const Dashboard: NextPage = (): JSX.Element => {
	const { deactivate } = useWeb3React();
	const disconnectWallet = () => {
		deactivate();
		localStorage.removeItem('previouslyConnected');
	};

	return (
		<>
			<header className="w-full bg-gray-800 p-4 flex justify-between items-center">
				<nav className="flex items-center">
					<div className="text-white text-xs hidden sm:block ml-2">
						<a
							href="#"
							className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer">
							Dashboard
						</a>
						<a
							href="#"
							className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-1">
							Projects
						</a>
						<a
							href="#"
							className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-1">
							Issues
						</a>
						<a
							href="#"
							className="bg-gray-900 hover:bg-gray-700 p-2 rounded cursor-pointer ml-1">
							Boards
						</a>
					</div>
					<User
						bordered
						src="https://i.pravatar.cc/150?u=a048581f4e29026701d"
						name="William Howard"
						color="success"
						pointer={true}
					/>
				</nav>
			</header>

			<main className="flex w-full h-screen">
				<aside className="w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
					<div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
						<Link href="/create">
							<Button color="primary" auto>
								Add Item
							</Button>
						</Link>
					</div>
				</aside>

				<section className="w-full p-4">
					<div className="w-full h-64 border-dashed border-4 p-4 text-md">
						Dashboard
					</div>
				</section>
			</main>
		</>
	);
};

export default Dashboard;
