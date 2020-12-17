import * as React from 'react';
import { create } from 'react-test-renderer';
import QuitIcon from '../quit';

describe('Quit Icon', () => {
	it('should show Quit Icon', () => {
		const component = create(<QuitIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
