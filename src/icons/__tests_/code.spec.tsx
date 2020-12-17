import * as React from 'react';
import { create } from 'react-test-renderer';
import { InsertCCIcon } from '../insert-cc';

describe('InsertCC Icon', () => {
	it('should show InsertCC Icon', () => {
		const component = create(<InsertCCIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
