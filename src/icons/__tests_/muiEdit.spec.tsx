import * as React from 'react';
import { create } from 'react-test-renderer';
import { MuiEditIcon } from '../muiedit';

describe('Mui Edit Icon', () => {
  it('should show Mui Edit Icon', () => {
    const component = create(
      <MuiEditIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});