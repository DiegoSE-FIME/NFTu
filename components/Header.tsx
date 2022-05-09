import Image from 'next/image';
import { useState } from 'react';
import { HeaderCard } from '../components';
import { motion } from 'framer-motion';
import { theme } from './tailwindClasses';
import styles from './Header.module.css';

function cn(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export const Header: React.FC = (): JSX.Element => {
	const [isLoading, setLoading] = useState(true);
	const variants = {
		initial: {
			opacity: 0,
			y: -180,
		},
		animate: {
			opacity: 1,
			y: 0,
		},
	};
	return (
		<main className="main-container relative min-h-[100vh] pl-[0.75rem] pr-[0.75rem]">
			<div className="flex flex-col justify-center relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
				<p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-400 text-center mb-4">
					Trade with Simpler and Smarter NFT world
				</p>
				<motion.h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white leading-normal">
					Explore the{' '}
					<span className='text-indigo-500 after:content-[""]'>NFT</span> world,
					collect and sell your art work
				</motion.h1>
			</div>
			<div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
				<button className={theme.button}>Get Started</button>
			</div>
		</main>
	);
};
