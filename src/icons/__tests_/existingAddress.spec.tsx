import * as React from 'react';
import { create } from 'react-test-renderer';
import ExistingAddressIcon from '../existing-address';

describe('Existing Address Icon', () => {
  it('should show Existing Address Icon', () => {
    const component = create(
      <ExistingAddressIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});