import * as React from 'react';
import { mount } from 'enzyme';
import { AddressBook } from '../address-book';

describe('Address Book', () => {
  it('should show Address Book', () => {
    const component = mount(
      <AddressBook addresses={
          [
            {
              id: 1,
              label: 'John',
              address: '0x4184288c556524df9cb9e58b73265ee66dca4efe'
            }
          ]
        }
        onEdit={id => console.log('onEdit' + id)}
        onDelete={id =>console.log('onDelete' + id)}
        onAdd={() =>console.log('onAdd')}
      />
    );
    expect(component).toBeDefined();
  });

  it('should trigger onEdit', () => {
    const component = mount(
      <AddressBook addresses={
          [
            {
              id: 1,
              label: 'John',
              address: '0x4184288c556524df9cb9e58b73265ee66dca4efe'
            }
          ]
        }
        onEdit={id => console.log('onEdit' + id)}
        onDelete={id =>console.log('onDelete' + id)}
        onAdd={() =>console.log('onAdd')}
      />
    );
    expect(component.find('#editButton').first().simulate('click')).toBeDefined();
  });

  it('should trigger onDelete', () => {
    const component = mount(
      <AddressBook addresses={
          [
            {
              id: 1,
              label: 'John',
              address: '0x4184288c556524df9cb9e58b73265ee66dca4efe'
            }
          ]
        }
        onEdit={id => console.log('onEdit' + id)}
        onDelete={id =>console.log('onDelete' + id)}
        onAdd={() =>console.log('onAdd')}
      />
    );
    expect(component.find('#deleteButton').first().simulate('click')).toBeDefined();
  });
});
