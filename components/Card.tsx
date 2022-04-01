import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { item } from '../config/framer';

type CardProps = {
	title: string | undefined;
	image: string;
	link: string;
	address: string | undefined;
	name: string | undefined;
};

export const Card: React.FC<CardProps> = ({
	title,
	image,
	link,
	address,
	name,
}): JSX.Element => {
	return (
		<motion.div className="card">
			<motion.div
				className="xl:max-w-xs border border-slate-700 shadow-md mb-5 cursor-pointer rounded-lg flex flex-col"
				variants={item}
				initial="hidden"
				animate="show">
				<motion.div className="p-2">
					{image ? (
						<Image
							src={image}
							alt={title}
							width={500}
							height={450}
							className="rounded-t-lg"
						/>
					) : (
						<div className="p-5 rounded animated-pulse w-96"></div>
					)}
				</motion.div>
				<div className="flex flex-col">
					<div className="grid xl:grid-cols-2 grid-cols xl:justify-items-end">
						<div className="py-2 px-3 w-full whitespace-nowrap">
							<h5 className="mb-2 text-normal font-bold tracking-tight text-gray-900 dark:text-white">
								{title}
							</h5>
							<p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
								By <span className="text-indigo-500">{name}</span>
							</p>

							<div className="xl:w-40 w-28 text-sm">
								<Link href={link} passHref>
									<a target="_blank">
										<p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate whitespace-nowrap overflow-hidden">
											Address{' '}
											<span className="mt-2 text-indigo-500 hover:underline hover:decoration-indigo-500">
												{address}
											</span>
										</p>
									</a>
								</Link>
							</div>
						</div>
						<div className="px-3 py-1">
							<p className="text-sm text-gray-400">Price</p>
							<span className="text-normal">50 ETH</span>
							<p className="text-sm text-gray-400">Offer for</p>
							<span className="text-normal">60 ETH</span>
						</div>
					</div>
					<div className="flex border border-t border-slate-800 h-11">
						<span className="text-teal-200 p-3">Buy now</span>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};
