import * as React from 'react';
import { create } from 'react-test-renderer';
import { SelfkeyIcon } from '../selfkey';

describe('Selfkey Icon', () => {
	it('should show Selfkey Icon', () => {
		const component = create(<SelfkeyIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
