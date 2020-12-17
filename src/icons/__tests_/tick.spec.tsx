import * as React from 'react';
import { create } from 'react-test-renderer';
import TickIcon from '../tick';

describe('Tick Icon', () => {
	it('should show Tick Icon', () => {
		const component = create(<TickIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
