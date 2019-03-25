import * as React from 'react';
import { create } from 'react-test-renderer';
import GreenTickIcon from '../green-tick';

describe('Green Tick Icon', () => {
  it('should show Green Tick Icon', () => {
    const component = create(
      <GreenTickIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});