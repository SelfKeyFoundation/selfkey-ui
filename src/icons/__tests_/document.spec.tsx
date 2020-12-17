import * as React from 'react';
import { create } from 'react-test-renderer';
import DocumentIcon from '../document';

describe('Document Icon', () => {
	it('should show Document Icon', () => {
		const component = create(<DocumentIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
