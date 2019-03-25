import * as React from 'react';
import { create } from 'react-test-renderer';
import CopyIcon from '../copy';

describe('Copy Icon', () => {
  it('should show Copy Icon', () => {
    const component = create(
      <CopyIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});