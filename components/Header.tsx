import Image from 'next/image';
import Link from 'next/link';
import { HeaderCard } from '../components';
import { motion } from 'framer-motion';
import { theme } from './tailwindClasses';

export const Header: React.FC = (): JSX.Element => {
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
		<motion.section
			className="lg:flex lg:flex-row lg:justify-center items-center lg:py-24 p-5"
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{
				ease: 'easeInOut',
				duration: 1,
				delay: 0.6,
			}}>
			<div className="child1 basis-6/12">
				<div className="stars w-96 flex justify-end flex-col lg:block hidden mb-2">
					<div className="flex justify-end">
						<Image src="/Star.svg" alt="star" width={44} height={44} />
					</div>
					<div className="flex justify-end ml-8 w-full">
						<Image src="/Star2.svg" alt="star" width={24} height={24} />
					</div>
				</div>
				<h1 className="text-3xl lg:text-5xl lg:leading-normal leading-normal w-auto lg:w-3/4 text-bold">
					A platform to find your digital unique rarity.
				</h1>
				<p className={theme.description}>
					NFTu platform brings artists and creators together on a single
					platform. You can find your digital unique rarity and sell it to the
					world.
				</p>
				<div className="flex-flex-row">
					<button className={theme.getStartedButton}>
						Get started
						<div className="ml-4 w-auto mt-[.1em]">
							<Image src="/Line.svg" alt="arrow" width={14} height={14} />
						</div>
					</button>
					<button className={theme.buttonWithBorder}>How it works</button>
				</div>
			</div>
			<div className="child2 lg:block hidden">
				<div className="image flex flex-col flex-wrap">
					<div className="w-3/4 basis-1/2">
						<Image
							src="/header-img-example.svg"
							alt="header-img"
							width={500}
							height={500}
						/>
					</div>
					<div className="lg:-mt-32 lg:ml-20">
						<HeaderCard />
					</div>
				</div>
			</div>
		</motion.section>
	);
};
