import * as React from 'react';
import { create } from 'react-test-renderer';
import { LoansSmallIcon } from '../loans-small';

describe('Loans Small Icon', () => {
	it('should show Loans Small Icon', () => {
		const component = create(<LoansSmallIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
