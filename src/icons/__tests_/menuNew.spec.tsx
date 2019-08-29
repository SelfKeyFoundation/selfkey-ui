import * as React from 'react';
import { create } from 'react-test-renderer';
import MenuNewIcon from '../menu-new';

describe('Menu New Icon', () => {
  it('should show Menu New Icon', () => {
    const component = create(
      <MenuNewIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});