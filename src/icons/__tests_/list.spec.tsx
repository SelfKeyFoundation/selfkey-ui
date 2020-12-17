import * as React from 'react';
import { create } from 'react-test-renderer';
import ListIcon from '../list';

describe('List Icon', () => {
	it('should show List Icon', () => {
		const component = create(<ListIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
