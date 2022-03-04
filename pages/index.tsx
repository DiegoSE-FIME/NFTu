import { NextPage } from 'next';
import Body from '../components/Body';
import Header from '../components/Header';
import { PageLayout } from '../components/PageLayout';

const Home: NextPage = () => {
	return (
		<PageLayout title="NFTu - Home">
			<Header />
			<Body />
		</PageLayout>
	);
};

export default Home;
