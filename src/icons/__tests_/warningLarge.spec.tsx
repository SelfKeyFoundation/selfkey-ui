import * as React from 'react';
import { create } from 'react-test-renderer';
import WarningLargeIcon from '../warning-large';

describe('Warning Large Icon', () => {
  it('should show Warning Large Icon', () => {
    const component = create(
      <WarningLargeIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});