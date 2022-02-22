import { NextPage } from 'next';
import { useRouter } from 'next/router';

const walletError: NextPage = () => {
	const router = useRouter();
	return (
		<>
			<h1 className="text-center mt-4">Whoops</h1>
			<p className="text-center mt-4">
				There was an error with your wallet. Please make sure you have installed
				MetaMask extension and try again.
				<br />
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => router.push('/')}>
					Connect wallet
				</button>
			</p>
		</>
	);
};

export default walletError;
