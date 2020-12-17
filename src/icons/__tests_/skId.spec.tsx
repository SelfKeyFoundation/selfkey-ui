import * as React from 'react';
import { create } from 'react-test-renderer';
import SKIDIcon from '../sk-id';

describe('SKID Icon', () => {
	it('should show SKID Icon', () => {
		const component = create(<SKIDIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
