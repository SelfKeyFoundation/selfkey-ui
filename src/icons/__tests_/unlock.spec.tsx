import * as React from 'react';
import { create } from 'react-test-renderer';
import UnlockIcon from '../unlock';

describe('Unlock Icon', () => {
  it('should show Unlock Icon', () => {
    const component = create(
      <UnlockIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});