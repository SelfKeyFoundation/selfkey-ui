import * as React from 'react';
import { create } from 'react-test-renderer';
import MailIcon from '../mail';

describe('Mail Icon', () => {
	it('should show Mail Icon', () => {
		const component = create(<MailIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
