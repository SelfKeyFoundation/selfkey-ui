import * as React from 'react';
import { create } from 'react-test-renderer';
import { BankIcon } from '../bank';

describe('Bank Icon', () => {
  it('should show Bank Icon', () => {
    const component = create(
      <BankIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





