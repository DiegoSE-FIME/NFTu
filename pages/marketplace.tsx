import { NextPage } from 'next';
import { PageLayout } from '../components/PageLayout';

const marketplace: NextPage = () => {
	return (
		<PageLayout title="NFTu - Marketplace">
			<h1 className="text-center mt-4">Hello from Marketplace</h1>
		</PageLayout>
	);
};

export default marketplace;
