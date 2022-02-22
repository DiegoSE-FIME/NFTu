import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
	return (
		<div className="grid grid-cols-2 gap-4">
			<div className="w-40 absolute left-[30%] top-[22%] self-auto hidden xl:block">
				<Image src="/Star2.png" alt="Star2" width={50} height={50} />
				<Image src="/Star.png" alt="Star" width={20} height={20} />
			</div>
			<div className="xl:w-[450px] w-[300px] col-span-1 ml-5 sm:ml-[50px] mt-[20%]">
				<h1 className="text-3xl font-semibold sm:text-5xl sm:leading-normal leading-normal ">
					A platform to find your digital unique rarity
				</h1>
				<p className="text-gray-400 mt-5">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
					voluptatem expedita asperiores voluptate quaerat cupiditate unde ipsa,
					natus eum inventore beatae quos quod nam, accusamus molestiae ut alias
					placeat vitae.
				</p>
			</div>
			<div className={styles.image}>
				<div className="w-40 z-40 absolute top-[19%] right-[32%] hidden xl:block">
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