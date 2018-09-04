export type Website = {
	name: string;
	url: string;
	termsUrl: string;
	policyUrl: string;
};


export type Wallet = {
	publicKey: string;
	unlocked?: boolean;
};
