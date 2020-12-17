import * as React from 'react';
import { create } from 'react-test-renderer';
import { ShieldIcon } from '../shield';

describe('Shield  Icon', () => {
	it('should show Shield Icon', () => {
		const component = create(<ShieldIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
