import * as React from 'react';
import { create } from 'react-test-renderer';
import MenuHelpIcon from '../menu-help';

describe('Menu Help Icon', () => {
	it('should show Menu Help Icon', () => {
		const component = create(<MenuHelpIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
