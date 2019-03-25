import * as React from 'react';
import { create } from 'react-test-renderer';
import FailedIcon from '../failed';

describe('Failed Icon', () => {
  it('should show Failed Icon', () => {
    const component = create(
      <FailedIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});