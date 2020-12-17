import * as React from 'react';
import { create } from 'react-test-renderer';
import SelfkeyIDMenuIcon from '../selfkey-id-menu';

describe('Selfkey ID Menu Icon', () => {
	it('should show Selfkey ID Menu Icon', () => {
		const component = create(<SelfkeyIDMenuIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
