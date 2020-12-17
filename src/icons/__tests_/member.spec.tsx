import * as React from 'react';
import { create } from 'react-test-renderer';
import MemberIcon from '../member';

describe('Member Icon', () => {
	it('should show Member Icon', () => {
		const component = create(<MemberIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
