import { NextPage } from 'next';
import { Body } from '../components';
import { Header } from '../components';
import { PageLayout } from '../components';

const Home: NextPage = () => {
	return (
		<PageLayout title="NFTu - Home">
			<Header />
			<Body />
		</PageLayout>
	);
};

export default Home;
