import * as React from 'react';
import { create } from 'react-test-renderer';
import { PassportsIcon } from '../passports';

describe('Passports Icon', () => {
  it('should show Passports Icon', () => {
    const component = create(
      <PassportsIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





