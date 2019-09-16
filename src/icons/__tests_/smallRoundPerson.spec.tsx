import * as React from 'react';
import { create } from 'react-test-renderer';
import SmallRoundPerson from '../round-person-small';

describe('Small Round Person Icon', () => {
  it('should show Small Round Person Icon', () => {
    const component = create(
      <SmallRoundPerson />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});