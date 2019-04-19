import * as React from 'react';
import { create } from 'react-test-renderer';
import { StatusInfo } from '../statuses';

describe('Status Completed', () => {
  it('should show Status Completed', () => {
    const component = create(
      <StatusInfo status={2} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show Status Denied', () => {
    const component = create(
      <StatusInfo status={3} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show Status Missing', () => {
    const component = create(
      <StatusInfo status={9} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show Status Pending', () => {
    const component = create(
      <StatusInfo />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





