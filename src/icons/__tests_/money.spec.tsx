import * as React from 'react';
import { create } from 'react-test-renderer';
import { MoneyIcon } from '../money';

describe('Money Icon', () => {
	it('should show Money Icon', () => {
		const component = create(<MoneyIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
