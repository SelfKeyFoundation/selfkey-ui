import * as React from 'react';
import { create } from 'react-test-renderer';
import { BankSmallIcon } from '../bank-small';

describe('Bank Small Icon', () => {
  it('should show Bank Small Icon', () => {
    const component = create(
      <BankSmallIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





