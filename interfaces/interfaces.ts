import { Method } from 'axios';
import { User } from 'firebase/auth';

export interface IAuthContext {
	user: User | null;
	signInWithGoogle: () => Promise<void>;
	signOutUser: () => Promise<void>;
}

export interface FirebaseData {
	uid: string;
	email: string;
	emailVerified?: boolean;
	displayName: string;
	isAnonymous?: boolean;
	photoURL: string;
	providerData?: ProviderDatum[];
	stsTokenManager?: StsTokenManager;
	createdAt?: string;
	lastLoginAt?: string;
	apiKey?: string;
	appName?: string;
}

export interface IUser {
	uid: string;
	email: string;
	displayName: string;
	photoURL: string;
	createdAt: string;
}

export interface ProviderDatum {
	providerId: string;
	uid: string;
	displayName: string;
	email: string;
	phoneNumber: null;
	photoURL: string;
}

export interface StsTokenManager {
	refreshToken: string;
	accessToken: string;
	expirationTime: number;
}

export interface ITheme {
	loginButton?: string;
	button?: string;
	signOutButton?: string;
	description?: string;
	profileImage?: string;
	bodyDiv?: string;
	bodyTitle?: string;
	gradientAqua?: string;
	getStartedButton?: string;
	placeABidButton?: string;
	buttonWithBorder?: string;
	path1GoogleIcon?: string;
	path2GoogleIcon?: string;
	path3GoogleIcon?: string;
	path4GoogleIcon?: string;
	pathGithubIcon?: string;
}

export interface DataResponse {
	ownedNfts: OwnedNft[];
	pageKey: string;
	totalCount: number;
	blockHash: string;
}

export interface OwnedNft {
	contract: Contract;
	id: ID;
	balance: string;
	title: string | '';
	description: string;
	tokenUri: TokenURI;
	media: TokenURI[];
	metadata: MetadataClass | string;
	timeLastUpdated: string;
	error?: Error;
}

export interface Contract {
	address: string;
}

export enum Error {
	TokenDoesNotExist = 'Token does not exist',
}

export interface ID {
	tokenId: string;
	tokenMetadata: TokenMetadata;
}

export interface TokenMetadata {
	tokenType: TokenType;
}

export enum TokenType {
	Erc721 = 'ERC721',
}

export interface TokenURI {
	raw: string;
	gateway: string;
}

export interface MetadataClass {
	name?: string;
	description?: string;
	image?: string;
	external_url?: string;
	dna?: string;
	attributes?: Attribute[];
	animation_url?: string;
	id?: string;
	external_link?: string;
	aspect_ratio?: number;
	traits?: Trait[];
	tokenID?: string;
	generator_url?: string;
	artist?: string;
	platform?: string;
	features?: Features;
	payout_address?: string;
	token_hash?: string;
	project_id?: string;
	is_static?: boolean;
	website?: string;
	royaltyInfo?: RoyaltyInfo;
	interactive_nft?: InteractiveNft;
	license?: string;
	series?: number;
	curation_status?: string;
	script_type?: string;
	collection_name?: string;
}

export interface Attribute {
	value: number | string;
	trait_type: string;
}

export interface Features {
	Type: string;
	'Start Color': number;
	'Steps Between': string;
	Segments: number;
	Height: string;
	'Color Spread': string;
	'Color Direction': string;
	Spectrum: string;
	'End Color': number;
}

export interface InteractiveNft {
	version: string;
	code_uri: string;
}

export interface RoyaltyInfo {
	additionalPayeePercentage: string;
	artistAddress: string;
	additionalPayee: string;
	royaltyFeeByID: string;
}

export interface Trait {
	value: string;
	trait_type: TraitType;
}

export enum TraitType {
	ChromieSquiggle = 'Chromie Squiggle',
}

export interface Options {
	method: Method;
	url: string;
	headers: { [key: string]: string };
}

export interface CarouselProps {
	data?: DataResponse | undefined;
	from?: number;
	to?: number;
	nfts: OwnedNft[];
	images?: string[];
}
