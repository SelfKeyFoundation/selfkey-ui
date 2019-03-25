import * as React from 'react';
import { create } from 'react-test-renderer';
import ShareIcon from '../share';

describe('Share Icon', () => {
  it('should show Share Icon', () => {
    const component = create(
      <ShareIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});