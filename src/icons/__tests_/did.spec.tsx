import * as React from 'react';
import { create } from 'react-test-renderer';
import { DIDIcon } from '../did';

describe('DID Icon', () => {
  it('should show DID Icon', () => {
    const component = create(
      <DIDIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





