import * as React from 'react';
import { shallow } from 'enzyme';
import ModalWithBackButton from '../modal-with-back-button';

describe('Modal With Back Button', () => {
	it('should close ModalWithBackButton with handleClose method', () => {
		const component = shallow(<ModalWithBackButton />);
		component.find('#handleClose').simulate('click');
		expect(component.state('open')).toBeFalsy();
	});

	it('should open ModalWithBackButton with handleOpen method', () => {
		const component = shallow(<ModalWithBackButton />);
		component.find('#handleOpen').simulate('click');
		expect(component.state('open')).toBeTruthy();
	});

	it('test Handle State', () => {
		const component = shallow(<ModalWithBackButton />);
		component.find('#handleState').simulate('click');
		expect(component.state('open')).toBeFalsy();
		component.setState({ open: true });
		expect(component.state('open')).toBeTruthy();
		component.find('#handleState').simulate('click');
		expect(component.state('open')).toBeFalsy();
	});
});
