import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { item } from '../../config/framer';

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
		<>
			<motion.div
				className="xl:max-w-xs  shadow-md cursor-pointer flex flex-col max-h-fit py-2"
				variants={item}
				initial="hidden"
				animate="show">
				<motion.div>
					{image ? (
						<Image src={image} alt={title} width={500} height={500} />
					) : (
						<div className="p-5 rounded animated-pulse w-96"></div>
					)}
				</motion.div>
				<div className="backdrop-blur-lg bg-white/10">
					<div className="grid xl:grid-cols-2 grid-cols xl:justify-items-end xl:gap-5 gap-0">
						<div className="px-2 py-3 w-full whitespace-nowrap">
							<h5 className="mb-2 text-sm tracking-tight text-gray-900 dark:text-white">
								{title}
							</h5>
							<p className="xl:mb-3 mb-0 text-sm text-gray-700 dark:text-gray-400">
								<span className="text-teal-400">@{name}</span>
							</p>

							<div className="w-28 text-sm mt-5 xl:block hidden">
								<Link href={link} passHref>
									<a target="_blank">
										<p className="font-normal text-gray-700 dark:text-gray-400 truncate whitespace-nowrap overflow-hidden">
											Address{' '}
											<span className="mt-2 text-teal-500 hover:underline">
												{address}
											</span>
										</p>
									</a>
								</Link>
								<span>1.05 ETH</span>
							</div>
						</div>
						<div className="py-3 px-2 text-center text-sm ">
							<p className="text-gray-400 mb-2">Auctions ends in</p>
							<div className="flex flex-col justify-between">
								<span>22 : 15 : 33</span>
							</div>
							<button className="mt-5 text-black bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-md dark:shadow-teal-800/80 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full">
								Place a bid
							</button>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};
