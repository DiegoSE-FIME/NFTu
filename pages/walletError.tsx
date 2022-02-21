import { NextPage } from 'next';

const walletError = () => {
	return (
		<>
			<h1>Whoops</h1>
			<p className="text-center mt-4">
				There was an error with your wallet. Please make sure you have installed
				MetaMask extension ans try again.
				<a href="/">return to the home page</a>.
			</p>
		</>
	);
};

export default walletError;
