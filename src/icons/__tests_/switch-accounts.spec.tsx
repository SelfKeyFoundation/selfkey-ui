import * as React from 'react';
import { create } from 'react-test-renderer';
import SwitchAccountsIcon from '../switch-accounts';

describe('Switch Accounts Icon', () => {
	it('should show Switch Accounts Icon', () => {
		const component = create(<SwitchAccountsIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
