export interface User {
	uid: string;
	email: string;
	displayName: string;
	photoURL: string;
}

export interface AuthContextType {
	user: User | null;
	signIn: () => Promise<void>;
	signOut: () => Promise<void>;
	addUser: (user: User) => void;
}
