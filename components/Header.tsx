import Image from 'next/image';
import { HeaderCard } from '../components';
import { motion } from 'framer-motion';
import { theme } from './tailwindClasses';
import styles from './Header.module.css';

function Gradient() {
	return (
		<div className={styles.gradient}>
			<svg
				className="w-[300px] h-[300px] lg:w-[248px] lg:h-[248px]"
				viewBox="0 0 483 482"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_f_2_1384)">
					<circle cx="220" cy="219" r="124" fill="#73FDAA" fillOpacity="0.5" />
				</g>
				<defs>
					<filter
						id="filter0_f_2_1384"
						x="-43"
						y="-44"
						width="526"
						height="526"
						filterUnits="userSpaceOnUse"
						colorinterpolation-filters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="69.5"
							result="effect1_foregroundBlur_2_1384"
						/>
					</filter>
				</defs>
			</svg>
		</div>
	);
}
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
			className="grid grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-2 gap-6 p-5"
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{
				ease: 'easeInOut',
				duration: 1,
				delay: 0.6,
			}}>
			<Gradient />
			<div className="child1 grid justify-items-center">
				<div className="stars hidden w-96 lg:flex justify-end flex-col mb-2">
					<div className="flex justify-end">
						<Image src="/Star.svg" alt="star" width={44} height={44} />
					</div>
					<div className="flex justify-end ml-8 w-full">
						<Image src="/Star2.svg" alt="star" width={24} height={24} />
					</div>
				</div>
				<div className="text-3xl font-bold lg:leading-normal lg:text-5xl lg:w-3/4">
					<h1>
						A platform to find your digital{' '}
						<span className={styles.gradientText}>unique</span> rarity.
					</h1>
				</div>
				<p className={theme.description}>
					NFTu platform brings artists and creators together on a single
					platform. You can find your digital unique rarity and sell it to the
					world.
				</p>
				<div className="justify-self-start lg:ml-20">
					<button className={theme.getStartedButton}>
						Get started
						<div className="ml-4 w-auto mt-[.1em]">
							<Image src="/Line.svg" alt="arrow" width={14} height={14} />
						</div>
					</button>
					<button className={theme.buttonWithBorder}>How it works</button>
				</div>
			</div>
			<div className="child2 hidden lg:grid lg:justify-self-center lg:content-center">
				<div className="image">
					<div className="w-3/4">
						<Image
							src="/header-img-example.svg"
							alt="header-img"
							width={350}
							height={400}
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
