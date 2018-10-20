import * as React from 'react';
import { create } from 'react-test-renderer';
import { AddressBookAdd } from '../address-book-add';

describe('Address Book Add', () => {
  it('should show Address Book Add', () => {
    const component = create(
      <AddressBookAdd 
      onSave={(label, address) => alert('onEdit' + label +  address)}
      onCancel={() => alert('onCancel')}
      onLabelChange={label => alert('onLabelChange ' + label)}
      onAddressChange={address => alert('onAddressChange ' + address)}
      labelError='hey'
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





