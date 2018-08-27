import * as React from 'react';
import { create } from 'react-test-renderer';
import { LWSSelfkeyIdError } from '../lws-selfkey-id-error';


describe('LWS Wallet Connection Error', () => {
  it('should show LWS Wallet Connection Error', () => {
    const component = create(
      <LWSSelfkeyIdError/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





