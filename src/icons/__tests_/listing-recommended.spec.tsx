import * as React from 'react';
import { create } from 'react-test-renderer';
import { ListingRecommendedIcon } from '../../icons/listing-recommended';

describe('Listing Recommended Icon', () => {
  it('should show Listing Recommended Icon', () => {
    const component = create(
      <ListingRecommendedIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});