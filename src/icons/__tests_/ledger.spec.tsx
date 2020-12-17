import * as React from 'react';
import { create } from 'react-test-renderer';
import LedgerIcon from '../ledger';

describe('Ledger Icon', () => {
	it('should show Ledger Icon', () => {
		const component = create(<LedgerIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
