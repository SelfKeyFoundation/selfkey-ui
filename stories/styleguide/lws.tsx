import * as React from 'react';

import { LWSSelectWallet } from '../../src/lws/lws-select-wallet';
import { LWSRequiredInfo } from '../../src/lws/lws-required-info';
import { LWSWalletConnectionError } from '../../src/lws/lws-wallet-connection-error';
import { LWSSelfkeyIdError } from '../../src/lws/lws-selfkey-id-error';
import { LWSExtensionError } from '../../src/lws/lws-extension-error';
import { LWSSuccess } from '../../src/lws/lws-success';
import { LWSAuthError } from '../../src/lws/lws-auth-error';

export const LWSSelectWalletWrapper = () => (
	<div>
		<LWSSelectWallet
			wallets={[
				{ publicKey: '0x4184288c556524df9cb9e58b73265ee66dca4efe', unlocked: true, profile: 'local' },
				{ publicKey: '0x4184288c556524df9cb9e58b73265ee66dca4ef2', unlocked: false, profile: 'local' },
			]}
			loginAction={(wallet, password) => {
				alert(`${wallet.publicKey}:${password}`);
			}}
		/>
	</div>
);

export const LWSRequiredInfoWrapper = () => (
	<div>
		<LWSRequiredInfo
			required={[
				{ label: 'Name', key: 'first_name' },
				{ label: 'Country', key: 'country' },
				{
					label: 'Address',
					key: 'address',
				},
				{
					label: 'Birth Day',
					key: 'birth_day',
				},
			]}
			attributes={[
				{ label: 'Name', key: 'first_name', data: { value: 'Rodrigo Pavezi' } },
				{ label: 'Country', key: 'country', data: { value: '' } },
				{
					label: 'Address',
					key: 'address',
					data: { value: 'Jeson Street' },
				},
			]}
			website={{
				name: 'PaveziCoin',
				url: 'http://www.pavezicoin.org',
				termsUrl: 'http://www.pavezicoin.org/terms',
				policyUrl: 'http://www.pavezicoin.org/privacy',
			}}
		/>
	</div>
);

export const LWSWalletConnectionErrorWrapper = () => (
	<div>
		<LWSWalletConnectionError />
	</div>
);

export const LWSSelfkeyIdErrorWrapper = () => (
	<div>
		<LWSSelfkeyIdError />
	</div>
);

export const LWSExtensionErrorWrapper = () => (
	<div>
		<LWSExtensionError />
	</div>
);

export const LWSSuccessWrapper = () => (
	<div>
		<LWSSuccess />
	</div>
);

export const LWSAuthErrorWrapper = () => (
	<div>
		<LWSAuthError
			website={{
				name: 'PaveziCoin',
				url: 'http://www.pavezicoin.org',
				termsUrl: 'http://www.pavezicoin.org/terms',
				policyUrl: 'http://www.pavezicoin.org/privacy',
			}}
		/>
	</div>
);
