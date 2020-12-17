import * as React from 'react';
import { create } from 'react-test-renderer';
import BuyRoundedIcon from '../buy-rounded';

describe('Buy Rounded Icon', () => {
	it('should show Buy Rounded Icon', () => {
		const component = create(<BuyRoundedIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
