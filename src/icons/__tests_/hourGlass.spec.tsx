import * as React from 'react';
import { create } from 'react-test-renderer';
import { HourGlassIcon } from '../hourglass';

describe('HourGlass Icon', () => {
	it('should show HourGlass Icon', () => {
		const component = create(<HourGlassIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
