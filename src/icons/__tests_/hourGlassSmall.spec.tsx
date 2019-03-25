import * as React from 'react';
import { create } from 'react-test-renderer';
import HourGlassSmallIcon from '../hourglass-small';

describe('HourGlass Small Icon', () => {
  it('should show HourGlass Small Icon', () => {
    const component = create(
      <HourGlassSmallIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});