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
					variants={variants}
					initial="initial"
					animate="animate"
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
			<HeaderCard />
		</div>
	);
};
