import * as React from 'react';
import { create } from 'react-test-renderer';
import MuiDeleteIcon from '../muidelete';

describe('Mui Delete Icon', () => {
  it('should show Mui Delete Icon', () => {
    const component = create(
      <MuiDeleteIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});