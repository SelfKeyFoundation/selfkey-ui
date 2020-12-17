import * as React from 'react';
import { create } from 'react-test-renderer';
import CompanyIcon from '../company';

describe('Company Icon', () => {
	it('should show Company Icon', () => {
		const component = create(<CompanyIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
