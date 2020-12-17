import * as React from 'react';
import { create } from 'react-test-renderer';
import { VisibilityOnIcon } from '../visibility-on';

describe('Visibility on Icon', () => {
	it('should show Visibility on Icon', () => {
		const component = create(<VisibilityOnIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
