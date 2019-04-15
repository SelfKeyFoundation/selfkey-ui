import * as React from 'react';
import { create } from 'react-test-renderer';
import { StatusInfo } from './statuses';


describe('Status Denied', () => {
  it('should show Status Denied', () => {
    const component = create(
      <StatusInfo status="denied" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





