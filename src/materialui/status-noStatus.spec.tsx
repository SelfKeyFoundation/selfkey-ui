import * as React from 'react';
import { create } from 'react-test-renderer';
import { StatusInfo } from './statuses';


describe('No Status', () => {
  it('should show No Status', () => {
    const component = create(
      <StatusInfo />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





