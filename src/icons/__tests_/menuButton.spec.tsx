import * as React from 'react';
import { create } from 'react-test-renderer';
import MenuButtonIcon from '../menu-button';

describe('Menu Button Icon', () => {
  it('should show Menu Button Icon', () => {
    const component = create(
      <MenuButtonIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});