import * as React from 'react';
import { create } from 'react-test-renderer';
import SmallRoundCompany from '../round-company-small';

describe('Small Round Company Icon', () => {
  it('should show Small Round Company Icon', () => {
    const component = create(
      <SmallRoundCompany />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});