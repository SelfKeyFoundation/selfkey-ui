import * as React from 'react';
import { shallow } from 'enzyme';
import ModalWithBackButton from '../modalWithBackButton';

describe('Modal With Back Button', () => {
  it('should close ModalWithBackButton with handleClose method', () => {
    const wrapper = shallow(<ModalWithBackButton />);
    wrapper.find('#handleClose').simulate('click');
    expect(wrapper.state('open')).toBeFalsy();
  });

  it('should open ModalWithBackButton with handleOpen method', () => {
    const wrapper = shallow(<ModalWithBackButton />);
    wrapper.find('#handleOpen').simulate('click');
    expect(wrapper.state('open')).toBeTruthy();
  });

  it('test Handle State', () => {
    const wrapper = shallow(<ModalWithBackButton />);
    wrapper.find('#handleState').simulate('click');
    expect(wrapper.state('open')).toBeFalsy();
    wrapper.setState({ open: true });
    expect(wrapper.state('open')).toBeTruthy();
    wrapper.find('#handleState').simulate('click');
    expect(wrapper.state('open')).toBeFalsy();
  });
});
