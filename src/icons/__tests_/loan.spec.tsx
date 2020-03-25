import * as React from 'react';
import { create } from 'react-test-renderer';
import LoanIcon from '../marketplace-loan';

describe('Loan Icon', () => {
  it('should show Loan Icon', () => {
    const component = create(
      <LoanIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});