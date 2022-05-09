import { NextPage } from 'next';
import { Body, Header, PageLayout } from '../components';

const Home: NextPage = () => {
	return (
		<PageLayout title="NFTu - Home">
			<Header />
			<Body />
		</PageLayout>
	);
};

export default Home;
