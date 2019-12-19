import * as React from 'react';
import { create } from 'react-test-renderer';
import PendingNewIcon from '../pending-new';

describe('Pending New Icon', () => {
  it('should show Pending New Icon', () => {
    const component = create(
      <PendingNewIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});