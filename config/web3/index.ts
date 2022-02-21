import web3 from 'web3';
import { provider } from 'web3-core';
import { InjectedConnector } from '@web3-react/injected-connector';

const ETHEREUM_NETWORK_ID: number = 1;

export const connector = new InjectedConnector({
	supportedChainIds: [ETHEREUM_NETWORK_ID],
});

export const getLibrary = (provider: provider) => {
	const library = new web3(provider);
	return library;
};
