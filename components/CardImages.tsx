import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
	image: string;
	title: string;
	link: string;
	address: string;
	name: string;
}

export const CardImages: React.FC<Props> = ({
	image,
	title,
	link,
	address,
	name,
}) => {
	return (
		<>
			<div className="xl:max-w-xs border border-slate-700 shadow-md mb-5">
				<motion.div className="p-5" whileTap={{ scale: 0.8 }}>
					{image ? (
						<Image
							src={image}
							alt={title}
							width={500}
							height={450}
							className="rounded"
						/>
					) : (
						<div className="p-5 rounded animated-pulse w-96"></div>
					)}
				</motion.div>
				<div className="grid grid-cols-2">
					<div className="py-0 px-5 w-80">
						<Link href="marketplace/[id]" passHref>
							<h5 className="mb-2 xl:text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-100 text-normal">
								{title}
							</h5>
						</Link>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							By <span className="text-indigo-500">{name}</span>
						</p>

						<div className="xl:w-40 w-28">
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
				</div>
			</div>
		</>
	);
};
