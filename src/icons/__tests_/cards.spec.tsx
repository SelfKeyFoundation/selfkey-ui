import * as React from 'react';
import { create } from 'react-test-renderer';
import { CardsIcon } from '../cards';

describe('Cards Icon', () => {
	it('should show Cards Icon', () => {
		const component = create(<CardsIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
