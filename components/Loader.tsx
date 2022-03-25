import { motion } from 'framer-motion';
import type { ReactElement } from 'react';
import { item } from '../config/framer';

export const Loader: React.FC = (): ReactElement => {
	return (
		<>
			<motion.div
				initial="hidden"
				animate="show"
				exit="exit"
				variants={item}
				className="xl:max-w-xs border border-slate-700 shadow-md mb-5">
				<div className="p-5">
					<div className="w-40 h-40 animate-pulse bg-gray-500"></div>
				</div>
				<motion.div
					className="py-0 px-5 w-40"
					initial="hidden"
					animate="show"
					exit="exit">
					<motion.div
						className="h-5 mb-3 bg-gray-500 animate-pulse"
						variants={item}></motion.div>
				</motion.div>
			</motion.div>
		</>
	);
};
