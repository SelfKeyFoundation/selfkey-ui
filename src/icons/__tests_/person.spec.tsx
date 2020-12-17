import * as React from 'react';
import { create } from 'react-test-renderer';
import PersonIcon from '../person';

describe('Person Icon', () => {
	it('should show Person Icon', () => {
		const component = create(<PersonIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
