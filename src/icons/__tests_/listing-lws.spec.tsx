import * as React from 'react';
import { create } from 'react-test-renderer';
import { ListingLWSIcon } from '../../icons/listing-lws';

describe('Listing LWS Icon', () => {
  it('should show Listing LWS Icon', () => {
    const component = create(
      <ListingLWSIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});