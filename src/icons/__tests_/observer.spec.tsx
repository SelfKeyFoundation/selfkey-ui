import * as React from 'react';
import { create } from 'react-test-renderer';
import ObserverIcon from '../observer';

describe('Observer Icon', () => {
  it('should show Observer Icon', () => {
    const component = create(
      <ObserverIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});