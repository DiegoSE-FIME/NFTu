import { NextPage } from 'next';

const walletError: NextPage = () => {
	return (
		<>
			<h1 className="text-center mt-4">Whoops</h1>
			<p className="text-center mt-4">
				There was an error with your wallet. Please make sure you have installed
				MetaMask extension and try again.
				<br />
			</p>
		</>
	);
};

export default walletError;
