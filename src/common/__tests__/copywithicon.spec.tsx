import * as React from 'react';
import { create } from 'react-test-renderer';
import { CopyWithIcon } from '../copy-with-icon';

describe('Copy With Icon', () => {
	it('should Copy With Icon', () => {
		const component = create(<CopyWithIcon text="Copy me!!" />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
