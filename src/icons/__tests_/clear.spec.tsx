import * as React from 'react';
import { create } from 'react-test-renderer';
import ClearIcon from '../clear';

describe('Clear Icon', () => {
  it('should show Clear Icon', () => {
    const component = create(
      <ClearIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});