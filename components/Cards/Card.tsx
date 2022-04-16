import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { item } from '../../config/framer';

type CardProps = {
	title: string | undefined;
	image: string;
	link: string;
	address: string | undefined;
	name: string | undefined;
};

function cn(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export const Card: React.FC<CardProps> = ({
	title,
	image,
	link,
	address,
	name,
}): JSX.Element => {
	const [isLoading, setLoading] = useState(true);
	return (
		<motion.a
			href={link}
			className="group"
			variants={item}
			initial="hidden"
			animate="show"
			exit="exit">
			<div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-400 xl:aspect-w-7 xl:aspect-h-8">
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
			<h3 className="mt-1 text-lg font-bold text-violet-700">{title}</h3>
			<p className="mt-4 text-sm text-gray-700 dark:text-gray-400 truncate whitespace-nowrap overflow-hidden">
				{address}
			</p>
			<p className="mt-4 text-sm text-gray-700 dark:text-gray-400 truncate whitespace-nowrap overflow-hidden">
				@{name}
			</p>
		</motion.a>
	);
};
