import * as React from 'react';
import { create } from 'react-test-renderer';
import { ListingTopChoiceIcon } from '../../icons/listing-topchoice';

describe('Listing TopChoice Icon', () => {
  it('should show Listing TopChoice Icon', () => {
    const component = create(
      <ListingTopChoiceIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});