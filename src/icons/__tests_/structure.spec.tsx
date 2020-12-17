import * as React from 'react';
import { create } from 'react-test-renderer';
import StructureIcon from '../structure';

describe('Structure Icon', () => {
	it('should show Structure Icon', () => {
		const component = create(<StructureIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
