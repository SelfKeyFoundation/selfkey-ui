import * as React from 'react';
import { create } from 'react-test-renderer';
import LWSWalletConnectionError from '../lws-wallet-connection-error';

describe('LWS Wallet Connection Error', () => {
	it('should show LWS Wallet Connection Error', () => {
		const component = create(<LWSWalletConnectionError />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
