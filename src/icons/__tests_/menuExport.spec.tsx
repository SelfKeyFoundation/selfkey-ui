import * as React from 'react';
import { create } from 'react-test-renderer';
import MenuExportIcon from '../menu-export';

describe('Menu Export Icon', () => {
	it('should show Menu Export Icon', () => {
		const component = create(<MenuExportIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
