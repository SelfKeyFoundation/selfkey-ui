import * as React from 'react';
import { create } from 'react-test-renderer';
import { SimpleDeniedIcon } from '../../icons/simple-denied';

describe('Simple Denied', () => {
  it('should show Simple Denied', () => {
    const component = create(
      <SimpleDeniedIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});