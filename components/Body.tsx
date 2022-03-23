import { Galleries } from './Galleries';
import Image from 'next/image';
import { theme } from './tailwindClasses';
import { Footer } from './Footer';

export const Body: React.FC = () => {
	return (
		<>
			<div className={theme.bodyDiv}>
				<div className="hidden xl:block xl:px-20 xl:py-11">
					<Image src="/Card.png" alt="Card" width={350} height={400} />
					<button className={theme.placeABidButton}>
						<span>Place a bid</span>
					</button>
				</div>

				<div>
					<div className={theme.bodyTitle}>
						<h2>Build on ETH.</h2>
						<h2>
							Owned by <span className="text-teal-400">you</span>.
						</h2>
					</div>
					<div className="xl:mt-5 xl:w-[500px] w-96 px-5 xl:px-0">
						<p className={theme.headerDescription}>
							Marketplace for crypto collectibles with a focus on the Ethereum
							blockchain. Ethereum is open access to digital money and
							data-friendly services for everyone – no matter your background or
							location. It&apos;s a community-built technology behind the
							cryptocurrency ether (ETH) and thousands of applications you can
							use today.
						</p>
					</div>
				</div>
			</div>
			<Galleries />
			<Footer />
		</>
	);
};
