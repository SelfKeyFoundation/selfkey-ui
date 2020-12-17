import * as React from 'react';
import { create } from 'react-test-renderer';
import ModalCloseIcon from '../modal-close';

describe('Modal Close Icon', () => {
	it('should show Modal Close Icon', () => {
		const component = create(<ModalCloseIcon />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
