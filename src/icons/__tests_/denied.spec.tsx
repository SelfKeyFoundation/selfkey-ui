import * as React from 'react';
import { create } from 'react-test-renderer';
import { DeniedIcon } from '../denied';

describe('Denied Icon', () => {
	it('should show Denied Icon', () => {
		const component = create(<DeniedIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
