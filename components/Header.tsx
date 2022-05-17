import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@nextui-org/react';

const sentence = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
};

const letter = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
	},
};

const line1 = 'Trade with Simpler and Smarter NFT world';

export const Header: React.FC = (): JSX.Element => {
	return (
		<>
			<div className="flex flex-col justify-center relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
				<motion.p
					className="text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-400 text-center mb-4"
					variants={sentence}
					initial="hidden"
					animate="visible">
					{line1.split('').map((char, index) => {
						return (
							<motion.span key={index} variants={letter}>
								{char}
							</motion.span>
						);
					})}
				</motion.p>
				<motion.h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white leading-normal">
					Explore the{' '}
					<span className='text-indigo-500 after:content-[""]'>NFT</span> world,
					collect and sell your art work
				</motion.h1>
			</div>
			<div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
				<Button color="gradient" auto rounded>
					<Link href="#step1">Get Started</Link>
				</Button>
			</div>
		</>
	);
};
