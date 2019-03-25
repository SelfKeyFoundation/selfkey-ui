import * as React from 'react';
import { create } from 'react-test-renderer';
import WarningShieldIcon from '../warning-shield';

describe('Warning Shield Icon', () => {
  it('should show Warning Shield Icon', () => {
    const component = create(
      <WarningShieldIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});