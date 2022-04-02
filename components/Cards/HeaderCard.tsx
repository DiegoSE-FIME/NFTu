import Image from 'next/image';
import { transitionValues } from '../../config/framer';
import { motion } from 'framer-motion';

export const HeaderCard = (): JSX.Element => {
	return (
		<>
			<div className="w-80 z-40 absolute top-[35%] right-[18%] hidden xl:block">
				<Image
					src="/header-img-example.svg"
					width={440}
					height={436}
					alt="image"
				/>
			</div>
			<motion.div
				className="w-80 z-40 absolute top-[68%] right-[14%] hidden xl:block"
				transition={{
					y: transitionValues,
					width: transitionValues,
					height: transitionValues,
				}}
				animate={{
					y: ['2rem', '2.5rem'],
				}}>
				<div className="backdrop-blur-md bg-white/10 rounded-md">
					<div className="grid xl:grid-cols-2 grid-cols xl:justify-items-end xl:gap-5 gap-0">
						<div className="px-2 py-3 w-full whitespace-nowrap">
							<h5 className="mb-2 text-sm tracking-tight text-gray-900 dark:text-white">
								Abstract Wall Art
							</h5>

							<div className="w-28 text-sm mt-11 xl:block hidden">
								<p>Reserve price</p>
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
