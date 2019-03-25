import * as React from 'react';
import { create } from 'react-test-renderer';
import MarketplaceIcon from '../marketplace';

describe('Marketplace Icon', () => {
  it('should show Marketplace Icon', () => {
    const component = create(
      <MarketplaceIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});