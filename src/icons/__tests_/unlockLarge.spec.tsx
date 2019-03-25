import * as React from 'react';
import { create } from 'react-test-renderer';
import UnlockLargeIcon from '../unlock-large';

describe('Unlock Large Icon', () => {
  it('should show Unlock Large Icon', () => {
    const component = create(
      <UnlockLargeIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});