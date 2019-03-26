import * as React from 'react';
import { create } from 'react-test-renderer';
import { SimpleDeniedIcon } from '../../theme/selfkey-dark-theme';

describe('Simple Denied', () => {
  it('should show Simple Denied', () => {
    const component = create(
      <SimpleDeniedIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});