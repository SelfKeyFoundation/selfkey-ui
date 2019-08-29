import * as React from 'react';
import { create } from 'react-test-renderer';
import DropdownIcon from '../dropdown';

describe('Dropdown Icon', () => {
  it('should show Dropdown Icon', () => {
    const component = create(
      <DropdownIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});