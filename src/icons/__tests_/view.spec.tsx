import * as React from 'react';
import { create } from 'react-test-renderer';
import ViewIcon from '../view';

describe('View Icon', () => {
	it('should show View Icon', () => {
		const component = create(<ViewIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
