import * as React from 'react';
import { create } from 'react-test-renderer';
import SentRoundedIcon from '../sent-rounded';

describe('Sent Rounded Icon', () => {
  it('should show Sent Rounded Icon', () => {
    const component = create(
      <SentRoundedIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});