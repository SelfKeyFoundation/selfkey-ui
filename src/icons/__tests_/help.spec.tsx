import * as React from 'react';
import { create } from 'react-test-renderer';
import HelpIcon from '../help';

describe('Help Icon', () => {
  it('should show Help Icon', () => {
    const component = create(
      <HelpIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});