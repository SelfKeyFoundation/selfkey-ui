import * as React from 'react';
import { create } from 'react-test-renderer';
import DeepIntegrationIcon from '../deep-integration';

describe('Deep Integration Icon', () => {
  it('should show Deep Integration Icon', () => {
    const component = create(
      <DeepIntegrationIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});