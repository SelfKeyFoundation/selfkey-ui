import * as React from 'react';
import { create } from 'react-test-renderer';
import ReceiveIcon from '../receive';

describe('Receive Icon', () => {
  it('should show Receive Icon', () => {
    const component = create(
      <ReceiveIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});