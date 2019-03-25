import * as React from 'react';
import { create } from 'react-test-renderer';
import NewAddressIcon from '../new-address';

describe('New Address Icon', () => {
  it('should show New Address Icon', () => {
    const component = create(
      <NewAddressIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});