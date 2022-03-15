import { Card } from '../components';
import { NextPage } from 'next';
import { PageLayout } from '../components';
import { Key } from 'swr';
import { useFetchNFT } from '../hooks';
import { DataResponse, OwnedNft } from '../interfaces';

const Marketplace: NextPage = () => {
	const apiKey: Key = 'z6-SaAgm7QbsR3nNeob_oO6iIfHcLIV-';
	const baseURL: string = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}/getNFTs`;
	const ownerAddr: string = '0x7d5498a12b53259a2362fc233fe4d6b5d7bf3400';
	const options = {
		method: 'GET',
		url: `${baseURL}?=owner=${ownerAddr}`,
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const { url } = options;
	const { data } = useFetchNFT(url);
	const { ownedNfts } = (data as DataResponse) || '';

	return !data ? (
		<h2 className="flex justify-center">Loading...</h2>
	) : (
		<>
			<PageLayout title="NFTu - Marketplace">
				<h1 className="text-center">Marketplace</h1>
				<div className="flex justify-center">
					<div className="xl:grid xl:gap-x-8 xl:gap-y-4 xl:grid-cols-3 mt-11">
						{ownedNfts.map((nft: OwnedNft) => (
							<Card
								key={nft.id.tokenId}
								image={nft.media[0].raw}
								title={nft.title}
								name="NFTu"
								address={nft.contract.address}
								link="https://opensea.io/"
							/>
						))}
					</div>
				</div>
			</PageLayout>
		</>
	);
};

export default Marketplace;
