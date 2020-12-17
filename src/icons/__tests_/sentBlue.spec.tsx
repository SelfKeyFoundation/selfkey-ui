import * as React from 'react';
import { create } from 'react-test-renderer';
import SentBlueIcon from '../sent-blue';

describe('Sent Blue Icon', () => {
	it('should show Sent Blue Icon', () => {
		const component = create(<SentBlueIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
