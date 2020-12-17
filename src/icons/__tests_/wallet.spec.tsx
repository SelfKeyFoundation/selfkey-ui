import * as React from 'react';
import { create } from 'react-test-renderer';
import { WalletIcon } from '../wallet';

describe('Wallet  Icon', () => {
	it('should show Wallet Icon', () => {
		const component = create(<WalletIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
