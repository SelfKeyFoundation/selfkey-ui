import * as React from 'react';
import { create } from 'react-test-renderer';
import DashboardMenuIcon from '../dashboard-menu';

describe('Dashboard Menu Icon', () => {
  it('should show Dashboard Menu Icon', () => {
    const component = create(
      <DashboardMenuIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});