import * as React from 'react';
import { create } from 'react-test-renderer';
import { TooltipArrow } from '../tooltip-arrow';

describe('Tooltip Arrow', () => {
	it('should show Tooltip Arrow', () => {
		const component = create(<TooltipArrow />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
