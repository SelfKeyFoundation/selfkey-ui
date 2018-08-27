import * as React from 'react';
import { create } from 'react-test-renderer';
import { WarningIcon } from '../warning';

describe('Warning  Icon', () => {
  it('should show Warning Icon', () => {
    const component = create(
      <WarningIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





