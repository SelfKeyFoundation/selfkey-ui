import * as React from 'react';
import { create } from 'react-test-renderer';
import EditTransparentIcon from '../edit-transparent';

describe('Edit Transparent Icon', () => {
	it('should show Edit Transparent Icon', () => {
		const component = create(<EditTransparentIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
