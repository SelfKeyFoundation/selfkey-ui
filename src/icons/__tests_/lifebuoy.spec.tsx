import * as React from 'react';
import { create } from 'react-test-renderer';
import LifebuoyIcon from '../lifebuoy';

describe('Lifebuoy Icon', () => {
  it('should show Lifebuoy Icon', () => {
    const component = create(
      <LifebuoyIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});