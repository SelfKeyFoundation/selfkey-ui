import * as React from 'react';
import { create } from 'react-test-renderer';
import { CheckEmptyIcon } from '../check-empty';

describe('Check Empty Icon', () => {
	it('should show CheckEmpty Icon', () => {
		const component = create(<CheckEmptyIcon />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
