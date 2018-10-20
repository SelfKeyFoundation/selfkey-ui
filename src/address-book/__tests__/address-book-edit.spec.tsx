import * as React from 'react';
import { create } from 'react-test-renderer';
import { AddressBookEdit } from '../address-book-edit';

describe('Address Book Add', () => {
  it('should show Address Book Add', () => {
    const component = create(
      <AddressBookEdit
      label='Test'
      onSave={(label) => alert('onEdit' + label)}
      onCancel={() => alert('onCancel')}
      onLabelChange={label => alert('onLabelChange ' + label)}
      labelError='hey'
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





