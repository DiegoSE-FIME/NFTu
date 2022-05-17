import { ReactNode } from 'react';
import Image from 'next/image';
import { Slider } from './Slider';
import Link from 'next/link';

function ContainerSteps({
	title,
	description,
}: {
	title: string;
	description: string;
}): JSX.Element {
	return (
		<div className="px-2 py-3 sm:px-3 sm:py-5 text-center m-3">
			<h3 className="font-semibold text-lg sm:text-xl">{title}</h3>
			<p className="text-gray-400">{description}</p>
		</div>
	);
}

function Container({ children }: { children: ReactNode }): JSX.Element {
	return (
		<div className="flex flex-wrap sm:flex-nowrap py-5 px-3 justify-center gap-4 bg-clip-content">
			{children}
		</div>
	);
}

function Button({ title }: { title: string }) {
	return (
		<button className="mt-4 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border border-gray-200 focus:z-10 focus:ring-4  dark:focus:ring-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-600 dark:hover:text-slate-300 dark:hover:bg-gray-800">
			{title}
		</button>
	);
}

export const Body: React.FC = (): JSX.Element => {
	return (
		<>
			<section className="flex flex-col justify-center relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
				<h2 className="font-bold text-2xl sm:text-3xl text-center">
					Why Creators Love NFTu
				</h2>
				<Container>
					<ContainerSteps
						title="Easily setup"
						description="Get started with MetaMask (desktop only)"
					/>
					<ContainerSteps
						title="Sell faster"
						description="You choose how you want to sell your NFTs"
					/>
					<ContainerSteps
						title="Add your NFTs"
						description="Upload your work (image, video, audio, or 3D art)"
					/>
				</Container>
				<Container>
					<div className="text-center relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
						<h4 className="text-sky-400 uppercase">Step 1</h4>
						<h3 className="font-semibold text-2xl sm:text-3xl">
							Connect Your Wallet
						</h3>
						<p className="tracking-tight text-gray-400 w-full sm:max-w-xl mt-4">
							Looking to kick off your NFT collection, but not sure where to
							begin? The first thing you’ll need is a crypto wallet, which will
							store your method of payment and allow you to access your new NFT.{' '}
						</p>
						<Button title="Connect Wallet" />
					</div>
				</Container>
				<Container>
					<div className="p-6 max-w-4xl rounded-lg border-current bg-gray-900 border border-gray-800">
						<div className="grid grid-cols-1 sm:grid-cols-2">
							<div>
								<p className="font-semibold text-sm">Your Wallet</p>
								<h3 className="font-bold text-2xl sm:text-3xl mt-8">
									Getting Started with{' '}
									<span className="text-sky-500 after:content-['']">
										MetaMask
									</span>
									.
								</h3>
								<ul className="mt-8">
									<li className="mt-2">
										<div className="text-sm px-3 py-2.5 text-center inline-flex items-center bg-gray-700 rounded-full w-8 h-8 mr-3">
											1
										</div>
										Visit{' '}
										<a
											href="https://metamask.io/download/"
											className="text-sky-300 hover:text-sky-500">
											https://metamask.io/download/
										</a>
									</li>
									<li className="mt-2 tracking-tight mb-5">
										<div className="text-sm px-3 py-2.5 text-center inline-flex items-center bg-gray-700 rounded-full w-8 h-8 mr-3">
											2
										</div>
										Choose your application and click the Install MetaMask
										button.
									</li>
								</ul>
								<Link href="/metamask" passHref>
									<span className="text-sky-300 hover:text-sky-500 cursor-pointer">
										See more
									</span>
								</Link>
							</div>
							<div className="flex justify-center">
								<Image
									src="/metamask-fox.svg"
									width={300}
									height={300}
									alt="Cover"
								/>
							</div>
						</div>
					</div>
				</Container>
				<Container>
					<div className="text-center relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
						<h4 className="text-sky-400 uppercase">Step 2</h4>
						<h3 className="font-semibold text-2xl sm:text-3xl">
							Explore The Marketplace
						</h3>
						<p className="tracking-tight text-gray-400 w-full sm:max-w-xl mt-4">
							With so many projects out there, we know it can seem hard to find
							an NFT you love. Here are a few things you may want to keep in
							mind to simplify the process.
						</p>
						<Button title="Connect Wallet" />
					</div>
				</Container>
				<Container>
					<div className="p-6 max-w-2xl rounded-lg border-current bg-gray-900 border border-gray-800">
						<div>
							<p className="font-semibold text-sm text-green-500">Purpose</p>
							<h3 className="font-bold text-2xl sm:text-4xl mt-8 text-gray-600 flex flex-col flex-wrap">
								All Of Creations.{' '}
								<span className="text-white after:content-['']">One NFT.</span>
							</h3>
							<div className="flex justify-center mt-5">
								<Image
									src="/nft-marketplace-body.svg"
									width={300}
									height={300}
									alt="Example"
								/>
							</div>
						</div>
					</div>
					<div className="p-6 max-w-2xl rounded-lg border-current bg-gray-900 border border-gray-800">
						<div>
							<h3 className="font-bold text-2xl sm:text-3xl mt-8">
								Consider The Purpose of Purchasing.
							</h3>
							<p className="text-gray-400 mt-5 max-w-xl">
								Are you buying an NFT you’ll use for a profile photo (PFP)?
								Alternatively, is it purely for art? Is it something you’d
								display at home? Maybe you’re looking for virtual land? How long
								do you plan to own the NFT? Asking these questions will help you
								narrow down the search as you browse.
							</p>
						</div>
						<div className="cursor-pointer text-yellow-200 mt-3">
							<Link href="/marketplace">Explore the Marketplace</Link>
						</div>
					</div>
				</Container>
				<Container>
					<div className="text-center relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 mb-5">
						<h3 className="font-semibold text-2xl sm:text-3xl">
							Experts Agree
						</h3>
					</div>
				</Container>
			</section>
			<Slider />
		</>
	);
};
