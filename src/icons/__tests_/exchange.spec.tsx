import * as React from 'react';
import { create } from 'react-test-renderer';
import ExchangeIcon from '../exchange';

describe('Exchange Icon', () => {
  it('should show Exchange Icon', () => {
    const component = create(
      <ExchangeIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});