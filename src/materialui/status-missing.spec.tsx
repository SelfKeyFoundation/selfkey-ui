import * as React from 'react';
import { create } from 'react-test-renderer';
import { StatusInfo } from './statuses';


describe('Status Missing', () => {
  it('should show Status Missing', () => {
    const component = create(
      <StatusInfo status="missing" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





