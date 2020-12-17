import * as React from 'react';
import { create } from 'react-test-renderer';
import RoundCompany from '../round-company';

describe('Round Company Icon', () => {
	it('should show Round Company Icon', () => {
		const component = create(<RoundCompany />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
