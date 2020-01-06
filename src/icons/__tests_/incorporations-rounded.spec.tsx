import * as React from 'react';
import { create } from 'react-test-renderer';
import IncorporationsRoundedIcon from '../incorporations-rounded';

describe('Incorporations Rounded Icon', () => {
  it('should show Incorporations Rounded Icon', () => {
    const component = create(
      <IncorporationsRoundedIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});