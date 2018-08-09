import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransferIcon } from '../transfer';

describe('Transfer Icon', () => {
  it('should show Transfer Icon', () => {
    const component = create(
      <TransferIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





