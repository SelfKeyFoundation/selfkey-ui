import * as React from 'react';
import { create } from 'react-test-renderer';
import { CodeIcon } from '../code';

describe('Code Icon', () => {
	it('should show Code Icon', () => {
		const component = create(<CodeIcon />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
