import * as React from 'react';
import { create } from 'react-test-renderer';
import PowerIcon from '../power';

describe('Power Icon', () => {
  it('should show Power Icon', () => {
    const component = create(
      <PowerIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});