import * as React from 'react';
import { create } from 'react-test-renderer';
import { MuiVisibilityIcon } from '../muivisibility';

describe('Mui Visibility Icon', () => {
  it('should show Mui Visibility Icon', () => {
    const component = create(
      <MuiVisibilityIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});