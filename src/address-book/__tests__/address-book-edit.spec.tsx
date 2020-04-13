import * as React from 'react';
import { mount } from 'enzyme';
import { AddressBookEdit } from '../address-book-edit';

describe('Address Book Add', () => {
  it('should show Address Book Add', () => {
    const component = mount(
      <AddressBookEdit
        label='Test'
        onSave={(label) => alert('onEdit' + label)}
        onCancel={() => alert('onCancel')}
        onLabelChange={label => alert('onLabelChange ' + label)}
        labelError='hey'
      />
    );
    expect(component).toBeDefined();
  });

  it('should trigger onChange', () => {
    const onLabelChangeMock = jest.fn();
    const component = mount(
      <AddressBookEdit
        label='Test'
        onSave={() => console.log('onEdit')}
        onCancel={() => console.log('onCancel')}
        onLabelChange={onLabelChangeMock}
        labelError='hey'
      />);
      component.find('#labelInput').simulate('change', { target: { value: 'x' }});
      // expect(component.find('#labelInput').prop('value')).toEqual('x');
      expect(onLabelChangeMock).toBeCalled();

      // component.setState({label: component.find('#labelInput').prop('value')});
      expect(component.find('#formwrap').simulate('submit')).toBeDefined();
  });

  it('should trigger Submit', () => {
    const component = mount(
      <AddressBookEdit
        label='Test'
        onSave={() => console.log('onEdit')}
        onCancel={() => console.log('onCancel')}
        onLabelChange={() => console.log('onLabelChange')}
        labelError='hey'
      />);
      // component.setState({label: component.find('#labelInput').prop('value')});
      expect(component.find('#formwrap').simulate('submit')).toBeDefined();
  });
});





