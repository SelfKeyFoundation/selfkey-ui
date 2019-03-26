import * as React from 'react';
import { create } from 'react-test-renderer';
import { StatusInfo } from './statuses';


describe('Status Pending', () => {
  it('should show Status Pending', () => {
    const component = create(
      <StatusInfo status="pending" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





