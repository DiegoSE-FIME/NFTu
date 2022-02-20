import styles from './Logo.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<div>
			<nav className="px-2 sm:px-4 py-2.5">
				<div className="container flex flex-wrap justify-between items-center mx-auto ">
					<Link href="/">
						<a className="flex items-center whitespace-nowrap px-2">
							<span className={styles.logo}>NFTu</span>
						</a>
					</Link>

					<div className="flex items-center justify-center nav-links">
						<Link href="/marketplace">
							<a className="px-2 py-1 text-sm  text-white-500 hover:text-teal-200">
								Marketplace
							</a>
						</Link>
						<Link href="/resources">
							<a className="px-2 py-1 text-sm  text-white-500 hover:text-teal-200">
								Resources
							</a>
						</Link>
						<Link href="/community">
							<a className="px-2 py-1 text-sm  text-white-500 hover:text-teal-200">
								Community
							</a>
						</Link>
					</div>
					<Link href="/login">
						<button className="inline-flex items-center h-10 px-5 mt-2.5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 hidden sm:inline-flex">
							{' '}
							Connect wallet{' '}
							<Image
								src="/assets/Line.png"
								width="24"
								height="24"
								className="w-4 h-4 ml-3 fill-current"
							/>{' '}
						</button>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
