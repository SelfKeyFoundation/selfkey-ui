import * as React from 'react';
import { create } from 'react-test-renderer';
import { CloseButtonIcon } from '../close-button';

describe('Close Button Icon', () => {
	it('should show Close Button Icon', () => {
		const component = create(<CloseButtonIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
