import * as React from 'react';
import { create } from 'react-test-renderer';
import SelectDropdownIcon from '../select-dropdown';

describe('Select Dropdown Icon', () => {
	it('should show Select Dropdown Icon', () => {
		const component = create(<SelectDropdownIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
