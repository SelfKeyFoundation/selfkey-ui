import * as React from 'react';
import { create } from 'react-test-renderer';
import { TransactionErrorBox } from '../transaction-error-box';

describe('Transaction Error Box', () => {
  it('should show transaction error generic screen', () => {
    const component = create(
      <TransactionErrorBox message="Some error message" publicKey='0x4184288c556524df9cb9e58b73265ee66dca4efe'/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show transaction error generic screen with children', () => {
    const component = create(
      <TransactionErrorBox message="Some error message" publicKey='0x4184288c556524df9cb9e58b73265ee66dca4efe'>
        <span>some error goes here</span>
      </TransactionErrorBox>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





