export interface IAuthContext {
	firebaseUser: FirebaseData | null;
	firebaseData: FirebaseData | null;
	signInWithGoogle: () => Promise<void>;
	signOutUser: () => Promise<void>;
	isLoading: boolean;
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
	navbarLoginButton?: string;
	signInButton?: string;
	signOutButton?: string;
	profileImage?: string;
	headerDiv?: string;
	headerStars?: string;
	headerTitleDiv?: string;
	headerTitle?: string;
	headerDescription?: string;
	getStartedButton?: string;
	howItWorksButton?: string;
	headerImage?: string;
	path1GoogleIcon?: string;
	path2GoogleIcon?: string;
	path3GoogleIcon?: string;
	path4GoogleIcon?: string;
	pathGithubIcon?: string;
}
