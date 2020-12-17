import * as React from 'react';
import { create } from 'react-test-renderer';
import IdCardIcon from '../id-card';

describe('ID Card Icon', () => {
	it('should show ID Card Icon', () => {
		const component = create(<IdCardIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
