import * as React from 'react';
import { create } from 'react-test-renderer';
import { AttributeAlertLargeIcon } from '../../theme/selfkey-dark-theme';

describe('Attribute Alert Large Icon', () => {
  it('should show Attribute Alert Large Icon', () => {
    const component = create(
      <AttributeAlertLargeIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});