import * as React from 'react';
import { create } from 'react-test-renderer';
import ExchangeRoundedIcon from '../exchange-rounded';

describe('Exchange Rounded Icon', () => {
	it('should show Exchange Rounded Icon', () => {
		const component = create(<ExchangeRoundedIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
