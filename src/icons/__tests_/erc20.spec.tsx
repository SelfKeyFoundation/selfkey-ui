import * as React from 'react';
import { create } from 'react-test-renderer';
import Erc20Icon from '../erc20';

describe('Erc20 Icon', () => {
	it('should show Erc20 Icon', () => {
		const component = create(<Erc20Icon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
