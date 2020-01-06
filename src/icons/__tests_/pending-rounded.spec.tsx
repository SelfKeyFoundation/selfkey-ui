import * as React from 'react';
import { create } from 'react-test-renderer';
import PendingRoundedIcon from '../pending-rounded';

describe('Pending Rounded Icon', () => {
  it('should show Pending Rounded Icon', () => {
    const component = create(
      <PendingRoundedIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});