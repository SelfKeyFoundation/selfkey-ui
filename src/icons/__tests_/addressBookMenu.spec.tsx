import * as React from 'react';
import { create } from 'react-test-renderer';
import AddressBookMenuIcon from '../address-book-menu';

describe('AddressBookMenu Icon', () => {
  it('should show AddressBookMenu Icon', () => {
    const component = create(
      <AddressBookMenuIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});