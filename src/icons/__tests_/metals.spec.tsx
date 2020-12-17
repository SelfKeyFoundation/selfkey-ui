import * as React from 'react';
import { create } from 'react-test-renderer';
import { MetalsIcon } from '../metals';

describe('Metals Icon', () => {
	it('should show Metals Icon', () => {
		const component = create(<MetalsIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
