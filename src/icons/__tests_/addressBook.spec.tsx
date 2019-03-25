import * as React from 'react';
import { create } from 'react-test-renderer';
import AddressBookIcon from '../address-book';

describe('AddressBook Icon', () => {
  it('should show AddressBook Icon', () => {
    const component = create(
      <AddressBookIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});