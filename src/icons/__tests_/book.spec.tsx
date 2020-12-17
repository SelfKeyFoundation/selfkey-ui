import * as React from 'react';
import { create } from 'react-test-renderer';
import BookIcon from '../book';

describe('Book Icon', () => {
	it('should show Book Icon', () => {
		const component = create(<BookIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
