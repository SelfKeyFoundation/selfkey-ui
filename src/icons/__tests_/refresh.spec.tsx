import * as React from 'react';
import { create } from 'react-test-renderer';
import RefreshIcon from '../refresh';

describe('Refresh Icon', () => {
  it('should show Refresh Icon', () => {
    const component = create(
      <RefreshIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});