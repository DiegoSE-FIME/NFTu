import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Header.module.css';
import { theme } from './tailwindClasses';

export const Header: React.FC = () => {
	return (
		<div className={theme.headerDiv}>
			<div className={theme.headerStars}>
				<Image src="/Star.svg" alt="Star2" width={50} height={50} />
				<Image src="/Star2.svg" alt="Star" width={20} height={20} />
			</div>
			<motion.div className={theme.headerTitleDiv}>
				<motion.div
					initial={{ y: 310 }}
					animate={{ y: 0 }}
					transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}>
					<h1 className={theme.headerTitle}>
						A platform to find your digital unique rarity.
					</h1>
				</motion.div>

				<motion.div
					initial={{ y: 310 }}
					animate={{ y: 0 }}
					transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}>
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
			<div className={styles.image}>
				<div className={theme.headerImage}>
					<Link href="/marketplace" passHref>
						<a>
							<Image
								src="/imageButton.svg"
								width={120}
								height={96}
								alt="image"
							/>
						</a>
					</Link>
				</div>
				<motion.div whileHover={{ scale: 1.1 }} className={styles.info_image}>
					<Image src="/InfoImage.svg" width={350} height={450} alt="image" />
				</motion.div>
			</div>
		</div>
	);
};
