import * as React from 'react';
import { create } from 'react-test-renderer';
import NewRefreshIcon from '../refresh2';

describe('Refresh Icon', () => {
	it('should show Refresh Icon', () => {
		const component = create(<NewRefreshIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
