import * as React from 'react';
import { create } from 'react-test-renderer';
import { CustomTokenText } from '../custom-token-text';


describe('Custom Token Text', () => {
  it('should show Custom Token Text', () => {
    const component = create(
      <CustomTokenText>Send or receive any custom ERC-20 token.</CustomTokenText>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





