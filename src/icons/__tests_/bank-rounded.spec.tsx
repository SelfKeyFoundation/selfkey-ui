import * as React from 'react';
import { create } from 'react-test-renderer';
import BankRoundedIcon from '../bank-rounded';

describe('Bank Rounded Icon', () => {
  it('should show Bank Rounded Icon', () => {
    const component = create(
      <BankRoundedIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});