import * as React from 'react';
import { create } from 'react-test-renderer';
import LightIntegrationIcon from '../light-integration';

describe('Light Integration Icon', () => {
  it('should show Light Integration Icon', () => {
    const component = create(
      <LightIntegrationIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});