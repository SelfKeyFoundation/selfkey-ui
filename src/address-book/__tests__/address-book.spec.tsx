import * as React from 'react';
import { create } from 'react-test-renderer';
import { AddressBook } from '../address-book';

describe('Address Book', () => {
  it('should show Address Book', () => {
    const component = create(
      <AddressBook addresses={
        [
          {
            id: 1,
            label: 'John',
            address: '0x4184288c556524df9cb9e58b73265ee66dca4efe'
          }
        ]
      }
      
      onEdit={id => alert('onEdit' + id)}
      onDelete={id =>alert('onDelete' + id)}
      onAdd={() =>alert('onAdd')}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





