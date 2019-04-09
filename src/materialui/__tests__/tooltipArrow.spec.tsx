import * as React from 'react';
import { create } from 'react-test-renderer';
import { TooltipArrow } from '../tooltipArrow';

describe('Tooltip Arrow', () => {
  it('should show Tooltip Arrow', () => {
    const component = create(
        <TooltipArrow />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
