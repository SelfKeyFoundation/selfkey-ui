import * as React from 'react';
import { create } from 'react-test-renderer';
import AttributeAlertIcon from '../attribute-alert';

describe('Attribute Alert Icon', () => {
  it('should show Attribute Alert Icon', () => {
    const component = create(
      <AttributeAlertIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});