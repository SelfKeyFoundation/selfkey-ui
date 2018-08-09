import * as React from 'react';
import { create } from 'react-test-renderer';
import { VisibilityOffIcon } from '../visibility-off';

describe('Visibility off Icon', () => {
  it('should show Visibility off Icon', () => {
    const component = create(
      <VisibilityOffIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





