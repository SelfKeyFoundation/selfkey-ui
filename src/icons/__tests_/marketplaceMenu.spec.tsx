import * as React from 'react';
import { create } from 'react-test-renderer';
import MarketplaceMenuIcon from '../marketplace-menu';

describe('Marketplace Menu Icon', () => {
  it('should show Marketplace Menu Icon', () => {
    const component = create(
      <MarketplaceMenuIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});