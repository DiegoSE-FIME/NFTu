import Image from 'next/image';
import { Footer } from './Footer';
import { theme } from './tailwindClasses';

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
						<h2 className="lg:text-4xl w-72 text-2xl font-bold">
							Build on ETH. Owned by you.
						</h2>
						<div className="overflow-clip mt-5 max-w-lg">
							<span className={theme.description}>
								Marketplace for crypto collectibles with a focus on the Ethereum
								blockchain.
							</span>
							<span className={theme.description}>
								It&apos;s a community-built technology behind the cryptocurrency
								ether (ETH) and thousands of applications you can use today.
							</span>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
