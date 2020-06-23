import * as React from 'react';
import { create } from 'react-test-renderer';
import { HealthIcon } from '../health';

describe('Health Icon', () => {
  it('should show Health Icon', () => {
    const component = create(
      <HealthIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





