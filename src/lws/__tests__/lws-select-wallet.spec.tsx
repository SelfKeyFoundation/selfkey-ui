import * as React from 'react';
import { create } from 'react-test-renderer';
import { LWSSelectWallet } from '../lws-select-wallet';

describe('LWS Select Wallet', () => {
	it('should show LWS Select Wallet', () => {
		const component = create(
			<LWSSelectWallet
				wallets={[
					{
						publicKey: '0x4184288c556524df9cb9e58b73265ee66dca4efe',
						unlocked: false,
						profile: 'local'
					}
				]}
			/>
		);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
