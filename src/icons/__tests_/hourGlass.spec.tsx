import * as React from 'react';
import { create } from 'react-test-renderer';
import { HourGlassIcon } from '../../materialui/lists';

describe('HourGlass Icon', () => {
  it('should show HourGlass Icon', () => {
    const component = create(
      <HourGlassIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});