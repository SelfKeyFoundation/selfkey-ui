import * as React from 'react';
import { create } from 'react-test-renderer';
import FilterIcon from '../filter';

describe('Filter Icon', () => {
	it('should show Filter Icon', () => {
		const component = create(<FilterIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
