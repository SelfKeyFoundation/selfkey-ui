import * as React from 'react';
import { create } from 'react-test-renderer';
import HourGlassLargeIcon from '../hourglass-large';

describe('HourGlass Large Icon', () => {
  it('should show HourGlass Large Icon', () => {
    const component = create(
      <HourGlassLargeIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});