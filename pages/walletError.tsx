import { NextPage } from 'next';

const walletError: NextPage = () => {
	return (
		<>
			<h1 className="text-center mt-4">Whoops</h1>
			<p className="text-center mt-4">
				There was an error with your wallet. Please make sure you have installed
				MetaMask extension and try again.
				<br />
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Connect wallet
				</button>
			</p>
		</>
	);
};

export default walletError;
