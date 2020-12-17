import * as React from 'react';
import { create } from 'react-test-renderer';
import { SafeIcon } from '../safe';

describe('Safe Icon', () => {
	it('should show Safe Icon', () => {
		const component = create(<SafeIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
