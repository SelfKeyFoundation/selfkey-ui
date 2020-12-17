import * as React from 'react';
import { create } from 'react-test-renderer';
import OkayIcon from '../okay';

describe('Okay Icon', () => {
	it('should show Okay Icon', () => {
		const component = create(<OkayIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
