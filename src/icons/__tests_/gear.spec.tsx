import * as React from 'react';
import { create } from 'react-test-renderer';
import { GearIcon } from '../gear';

describe('Gear Icon', () => {
  it('should show Gear Icon', () => {
    const component = create(
      <GearIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





