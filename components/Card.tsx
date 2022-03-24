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

export const Card = ({ title, image, link, address, name }: CardProps) => {
	return (
		<>
			<motion.div
				className="xl:max-w-xs border border-slate-700 shadow-md mb-5"
				variants={item}
				initial="hidden"
				animate="show">
				<motion.div className="p-5">
					{image ? (
						<Image src={image} alt={title} width={500} height={450} />
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
			</motion.div>
		</>
	);
};
