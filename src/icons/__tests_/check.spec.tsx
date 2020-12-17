import * as React from 'react';
import { create } from 'react-test-renderer';
import { CheckIcon } from '../check';

describe('Check Icon', () => {
	it('should show Check Icon', () => {
		const component = create(<CheckIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
