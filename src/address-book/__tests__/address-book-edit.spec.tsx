import * as React from 'react';
import { mount } from 'enzyme';
import { AddressBookEdit } from '../address-book-edit';

describe('Address Book Add', () => {
  it('should show Address Book Add', () => {
    const wrapper = mount(
      <AddressBookEdit
        label='Test'
        onSave={(label) => alert('onEdit' + label)}
        onCancel={() => alert('onCancel')}
        onLabelChange={label => alert('onLabelChange ' + label)}
        labelError='hey'
      />
    );
    expect(wrapper).toBeDefined();
  });

  it('should trigger onChange', () => {
    const onLabelChangeMock = jest.fn();
    const wrapper = mount(
      <AddressBookEdit
        label='Test'
        onSave={() => console.log('onEdit')}
        onCancel={() => console.log('onCancel')}
        onLabelChange={onLabelChangeMock}
        labelError='hey'
      />);
      wrapper.find('#labelInput').simulate('change', { target: { value: 'x' }});
      // expect(wrapper.find('#labelInput').prop('value')).toEqual('x');
      expect(onLabelChangeMock).toBeCalled();

      wrapper.setState({label: wrapper.find('#labelInput').prop('value')});
      expect(wrapper.find('#formwrap').simulate('submit')).toBeDefined();
  });

  it('should trigger Submit', () => {
    const wrapper = mount(
      <AddressBookEdit
        label='Test'
        onSave={() => console.log('onEdit')}
        onCancel={() => console.log('onCancel')}
        onLabelChange={() => console.log('onLabelChange')}
        labelError='hey'
      />);
      wrapper.setState({label: wrapper.find('#labelInput').prop('value')});
      expect(wrapper.find('#formwrap').simulate('submit')).toBeDefined();
  });
});





