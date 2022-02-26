import { NextPage } from 'next';
import Body from '../components/Body';
import Header from '../components/Header';

const Home: NextPage = () => {
	return (
		<div>
			<Header />
			<Body />
		</div>
	);
};

export default Home;
