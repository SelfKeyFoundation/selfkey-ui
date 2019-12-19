import * as React from 'react';
import { create } from 'react-test-renderer';
import ReceivedNewIcon from '../received-new';

describe('Received New Icon', () => {
  it('should show Received New Icon', () => {
    const component = create(
      <ReceivedNewIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});