import * as React from 'react';
import { create } from 'react-test-renderer';
import HardDriveIcon from '../hard-drive';

describe('Hard Drive Icon', () => {
  it('should show Hard Drive Icon', () => {
    const component = create(
      <HardDriveIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});