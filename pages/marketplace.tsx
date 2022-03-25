import { Card, Loader, PageLayout } from '../components';
import { NextPage } from 'next';
import { useFetchNFT } from '../hooks';
import { DataResponse, OwnedNft } from '../interfaces';

const Marketplace: NextPage = () => {
	const ownerAddr: string = '0x7217bc604476859303a27f111b187526231a300c';
	const { data } = useFetchNFT(ownerAddr);
	const { ownedNfts } = (data as DataResponse) || { ownedNfts: [] };
	const nums: number[] = [1, 2, 3, 4];

	return !data ? (
		<>
			<div className="flex justify-center mb-5 xl:inline-flex">
				<div className="flex justify-center h-8 w-40 bg-gray-500 animate-pulse xl:m-11 mt-11"></div>
			</div>
			<div className="xl:grid xl:gap-x-8 xl:grid-cols-4 grid grid-cols-2">
				{nums.map((num) => (
					<Loader key={num} />
				))}
			</div>
		</>
	) : (
		<PageLayout title="NFTu - Marketplace">
			<h1 className="text-bold text-3xl xl:m-11 xl:text-left text-center mt-11">
				Trending .
			</h1>
			<div className="xl:flex xl:m-14 justify-center m-5">
				<div className="xl:grid xl:gap-x-8 xl:grid-cols-4 grid grid-cols-2">
					{ownedNfts.slice(18, 22).map((nft: OwnedNft) => (
						<Card
							key={nft.id.tokenId}
							image={nft.media[0].gateway}
							title={nft.title}
							name="NFTu"
							address={nft.contract.address}
							link="https://opensea.io/"
						/>
					))}
				</div>
			</div>
		</PageLayout>
	);
};

export default Marketplace;
