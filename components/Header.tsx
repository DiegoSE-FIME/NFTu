import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import { theme } from './tailwindClasses';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const Header = () => {
	const { firebaseUser } = useContext(AuthContext);
	return (
		<div className={theme.headerDiv}>
			<div className={theme.headerStars}>
				<Image src="/Star2.png" alt="Star2" width={50} height={50} />
				<Image src="/Star.png" alt="Star" width={20} height={20} />
			</div>
			<div className={theme.headerTitleDiv}>
				<h1 className={theme.headerTitle}>
					A platform to find your digital unique rarity
				</h1>
				<p className={theme.headerDescription}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
					voluptatem expedita asperiores voluptate quaerat cupiditate unde ipsa,
					natus eum inventore beatae quos quod nam, accusamus molestiae ut alias
					placeat vitae.
				</p>

				<div className="mt-5">
					<Link href={firebaseUser ? '/marketplace' : '/Login'}>
						<button className={theme.getStartedButton}>
							Get started
							<Image src="/assets/Line.png" alt="line" width={20} height={20} />
						</button>
					</Link>
					<Link href="/">
						<a className={theme.howItWorksButton}>How it works</a>
					</Link>
				</div>
			</div>

			<div className={styles.image}>
				<div className={theme.headerImage}>
					<Link href="/marketplace">
						<a>
							<Image
								src="/imageButton.png"
								width={120}
								height={96}
								alt="image"
							/>
						</a>
					</Link>
				</div>

				<div className={styles.info_image}>
					<Image src="/InfoImage.png" width={300} height={300} alt="image" />
				</div>
			</div>
		</div>
	);
};

export default Header;
