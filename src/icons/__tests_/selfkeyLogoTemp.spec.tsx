import * as React from 'react';
import { create } from 'react-test-renderer';
import SelfkeyLogoTemp from '../selfkeyLogoTemp';

describe('Selfkey Logo Temp Icon', () => {
	it('should show Selfkey Logo Temp Icon', () => {
		const component = create(<SelfkeyLogoTemp />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
