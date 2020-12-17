import * as React from 'react';
import { create } from 'react-test-renderer';
import DefiIcon from '../defi';

describe('Defi Icon', () => {
	it('should show Defi Icon', () => {
		const component = create(<DefiIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
