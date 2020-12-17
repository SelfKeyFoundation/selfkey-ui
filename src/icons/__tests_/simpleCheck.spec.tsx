import * as React from 'react';
import { create } from 'react-test-renderer';
import { SimpleCheckIcon } from '../../icons/simple-check';

describe('Simple Check', () => {
	it('should show Simple Check', () => {
		const component = create(<SimpleCheckIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
