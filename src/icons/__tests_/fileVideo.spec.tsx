import * as React from 'react';
import { create } from 'react-test-renderer';
import FileVideoIcon from '../file-video';

describe('Filed Video Icon', () => {
	it('should show Filed Video Icon', () => {
		const component = create(<FileVideoIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
