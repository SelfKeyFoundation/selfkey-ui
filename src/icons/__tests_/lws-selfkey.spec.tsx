import * as React from 'react';
import { create } from 'react-test-renderer';
import { LWSSelfkeyIcon } from '../lws-selfkey';

describe('LWSSelfkey  Icon', () => {
  it('should show LWSSelfkey Icon', () => {
    const component = create(
      <LWSSelfkeyIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





