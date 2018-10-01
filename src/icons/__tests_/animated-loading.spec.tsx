import * as React from 'react';
import { create } from 'react-test-renderer';
import { AnimatedLoadingIcon } from '../animated-loading';

describe('Animated Loading Icon', () => {
  it('should show Animated Loading Icon', () => {
    const component = create(
      <AnimatedLoadingIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





