import { Galleries } from './Galleries';
import Image from 'next/image';
import { theme } from './tailwindClasses';
import { Footer } from './Footer';

export const Body: React.FC = (): JSX.Element => {
	return (
		<>
			<div className={theme.bodyDiv}>
				<div className="child basis-1/2 lg:block hidden">
					<div className="px-14">
						<Image
							src="/body-illustration.svg"
							alt="decentralized"
							width={500}
							height={500}
						/>
					</div>
				</div>
				<div className="child-2 basis-1/2">
					<div className="body-info">
						<h2 className="lg:text-3xl w-56 text-2xl">
							Build on ETH. Owned by{' '}
							<span className="text-violet-500">you</span>
						</h2>
						<p className={theme.description}>
							Marketplace for crypto collectibles with a focus on the Ethereum
							blockchain. Ethereum is open access to digital money and
							data-friendly services for everyone – no matter your background or
							location. It's a community-built technology behind the
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
