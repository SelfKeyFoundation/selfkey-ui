import * as React from 'react';
import { create } from 'react-test-renderer';
import { StickIcon } from '../stick';

describe('Stick  Icon', () => {
  it('should show Stick Icon', () => {
    const component = create(
      <StickIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





