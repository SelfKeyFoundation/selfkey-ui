import * as React from 'react';
import { create } from 'react-test-renderer';
import { MergeIcon } from '../merge';

describe('Merge Icon', () => {
	it('should show Merge Icon', () => {
		const component = create(<MergeIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
