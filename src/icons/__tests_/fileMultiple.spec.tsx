import * as React from 'react';
import { create } from 'react-test-renderer';
import FileMultipleIcon from '../file-multiple';

describe('Filed Multiple Icon', () => {
	it('should show Filed Multiple Icon', () => {
		const component = create(<FileMultipleIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
