import * as React from 'react';
import { create } from 'react-test-renderer';
import CorporateIcon from '../corporate';

describe('Corporate Icon', () => {
	it('should show Corporate Icon', () => {
		const component = create(<CorporateIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
