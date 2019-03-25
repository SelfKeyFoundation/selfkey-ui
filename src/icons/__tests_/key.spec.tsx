import * as React from 'react';
import { create } from 'react-test-renderer';
import KeyIcon from '../key';

describe('Key Icon', () => {
  it('should show Key Icon', () => {
    const component = create(
      <KeyIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});