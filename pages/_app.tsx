import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { getLibrary } from '../config/web3';
import { Web3ReactProvider } from '@web3-react/core';
import { Navbar } from '../components';
import { AuthProvider } from '../context';
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Web3ReactProvider getLibrary={getLibrary}>
				<NextUIProvider disableBaseline>
					<Navbar />
					<Component {...pageProps} />
				</NextUIProvider>
			</Web3ReactProvider>
		</AuthProvider>
	);
}

export default MyApp;
