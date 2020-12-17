import * as React from 'react';
import { create } from 'react-test-renderer';
import IncorporationsIcon from '../incorporations';

describe('Incorporations Icon', () => {
	it('should show Incorporations Icon', () => {
		const component = create(<IncorporationsIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
