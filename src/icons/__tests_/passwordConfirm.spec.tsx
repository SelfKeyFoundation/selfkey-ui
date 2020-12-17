import * as React from 'react';
import { create } from 'react-test-renderer';
import PasswordConfirmIcon from '../password-confirm';

describe('Password Confirm Icon', () => {
	it('should show Password Confirm Icon', () => {
		const component = create(<PasswordConfirmIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
