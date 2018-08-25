import * as React from 'react';
import { create } from 'react-test-renderer';
import { ProfileIcon } from '../profile';

describe('Profile  Icon', () => {
  it('should show Profile Icon', () => {
    const component = create(
      <ProfileIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





