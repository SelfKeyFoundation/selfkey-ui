import * as React from 'react';
import { create } from 'react-test-renderer';
import RoundPerson from '../round-person';

describe('Round Person Icon', () => {
  it('should show Round Person Icon', () => {
    const component = create(
      <RoundPerson />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});