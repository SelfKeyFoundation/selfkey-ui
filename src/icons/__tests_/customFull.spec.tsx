import * as React from 'react';
import { create } from 'react-test-renderer';
import CustomFullIcon from '../custom-full';

describe('Custom Full Icon', () => {
  it('should show Custom Full Icon', () => {
    const component = create(
      <CustomFullIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});