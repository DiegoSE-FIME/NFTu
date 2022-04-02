import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { theme } from './tailwindClasses';

export const Header: React.FC = (): JSX.Element => {
	const transitionValues = {
		duration: 2,
		yoyo: Infinity,
		ease: 'easeOut',
	};

	return (
		<div className={theme.headerDiv}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className={theme.headerStars}>
				<Image src="/Star.svg" alt="Star2" width={50} height={50} />
				<Image src="/Star2.svg" alt="Star" width={20} height={20} />
			</motion.div>
			<motion.div className={theme.headerTitleDiv}>
				<motion.div
					initial={{ opacity: 0, y: -180 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						ease: 'easeInOut',
						duration: 1,
						delay: 0.6,
					}}>
					<h1 className={theme.headerTitle}>
						A platform to find your digital unique rarity.
					</h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: -180 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						ease: 'easeInOut',
						duration: 1,
						delay: 0.6,
					}}>
					<p className={theme.headerDescription}>
						Find extraordinary NFTs and collect them in your own collection,
						list them for sale or share them with your friends.
					</p>
				</motion.div>

				<div className="mt-5">
					<Link href="#resources" passHref>
						<button className={theme.getStartedButton}>
							Get started
							<Image src="/assets/Line.png" alt="line" width={20} height={20} />
						</button>
					</Link>
					<Link href="/">
						<a className={theme.howItWorksButton}>How it works</a>
					</Link>
				</div>
			</motion.div>
			<div className={theme.gradientAqua}>
				<Image
					src="/gradientAqua.png"
					width={350}
					height={350}
					className="rounded-full"
					alt="gradient"
					priority
				/>
			</div>
			<motion.div
				className="w-80 z-40 absolute top-[30%] right-[16%] hidden xl:block"
				transition={{
					y: transitionValues,
					width: transitionValues,
					height: transitionValues,
				}}
				animate={{
					y: ['2rem', '3rem'],
				}}>
				<Image src="/header-card.svg" width={500} height={500} alt="image" />
			</motion.div>
			<div className="grid-grid-cols-2">
				<motion.div
					className={theme.headerImage}
					transition={{
						y: transitionValues,
						width: transitionValues,
						height: transitionValues,
					}}
					animate={{
						y: ['2rem', '3rem'],
					}}>
					<Image
						src="/icon-security.svg"
						width={200}
						height={200}
						alt="image"
					/>
				</motion.div>
				<motion.div
					className="w-28 z-40 absolute top-[50%] right-[8%] hidden xl:block"
					transition={{
						y: transitionValues,
						width: transitionValues,
						height: transitionValues,
					}}
					animate={{
						y: ['2rem', '3rem'],
					}}>
					<Image src="/icon-money.svg" width={300} height={300} alt="image" />
				</motion.div>
			</div>
		</div>
	);
};
