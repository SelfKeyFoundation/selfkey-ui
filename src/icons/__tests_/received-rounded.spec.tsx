import * as React from 'react';
import { create } from 'react-test-renderer';
import ReceivedRoundedIcon from '../received-rounded';

describe('Received Rounded Icon', () => {
  it('should show Received Rounded Icon', () => {
    const component = create(
      <ReceivedRoundedIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});