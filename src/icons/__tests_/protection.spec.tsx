import * as React from 'react';
import { create } from 'react-test-renderer';
import ProtectionIcon from '../protection';

describe('Protection Icon', () => {
	it('should show Protection Icon', () => {
		const component = create(<ProtectionIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
