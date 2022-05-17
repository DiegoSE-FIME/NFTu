import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { item } from '../../config/framer';

type CardProps = {
	title: string | undefined;
	image: string;
	link: string;
};

function cn(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export const Card: React.FC<CardProps> = ({
	title,
	image,
	link,
}): JSX.Element => {
	const [isLoading, setLoading] = useState(true);
	return (
		<motion.a
			href={link}
			className="group flex flex-col max-w-sm"
			variants={item}
			initial="hidden"
			animate="show"
			exit="exit">
			<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg bg-gray-400 xl:aspect-w-7 xl:aspect-h-8">
				<Image
					alt={title}
					src={image}
					layout="fill"
					objectFit="cover"
					className={cn(
						'duration-700 ease-in-out group-hover:opacity-75',
						isLoading
							? 'scale-110 blur-2xl grayscale'
							: 'scale-100 blur-0 grayscale-0'
					)}
					onLoadingComplete={() => setLoading(false)}
					priority
				/>
			</div>
			<div className="flex flex-col bg-[#212529] rounded-b-lg text-white p-2">
				<div className="flex justify-between">
					<h3 className="text-md font-bold w-48 truncate whitespace-nowrap">
						{title}
					</h3>
					<div className="relative overflow-hidden w-6 h-6 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500">
						<svg
							className="absolute w-8 h-7 text-gray-400 -left-1"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clipRule="evenodd"></path>
						</svg>
					</div>
				</div>
				<div className="flex justify-between mt-4">
					<h4 className="text-gray-300 text-sm">Price</h4>
					<h4 className="text-sm font-bold">{400} ETH.</h4>
				</div>
			</div>
		</motion.a>
	);
};
