import * as React from 'react';
import { create } from 'react-test-renderer';
import { MetalsIcon } from '../metals';

describe('Metals Icon', () => {
  it('should show Metals Icon', () => {
    const component = create(
      <MetalsIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





