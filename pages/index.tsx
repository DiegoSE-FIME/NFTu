import { NextPage } from 'next';
import { Body, Header, PageLayout, Footer } from '../components';

const Home: NextPage = () => {
	return (
		<PageLayout title="NFTu - Home">
			<main className="main-container relative min-h-[100vh] pl-[0.45rem] pr-[0.45rem] sm:pl-0 sm:pr-0">
				<Header />
				<Body />
				<Footer />
			</main>
		</PageLayout>
	);
};

export default Home;
