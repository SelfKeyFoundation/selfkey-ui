import * as React from 'react';
import { create } from 'react-test-renderer';
import { StatusInfo } from './statuses';


describe('Status Completed', () => {
  it('should show Status Completed', () => {
    const component = create(
      <StatusInfo status="completed" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





