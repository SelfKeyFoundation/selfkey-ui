import * as React from 'react';
import { create } from 'react-test-renderer';
import { MuiAddIcon } from '../muiadd';

describe('Mui Add Icon', () => {
	it('should show Mui Add Icon', () => {
		const component = create(<MuiAddIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
