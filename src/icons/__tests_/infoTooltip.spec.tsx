import * as React from 'react';
import { create } from 'react-test-renderer';
import InfoTooltip from '../info';

describe('Info Tooltip Icon', () => {
  it('should show Info Tooltip Icon', () => {
    const component = create(
      <InfoTooltip />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});