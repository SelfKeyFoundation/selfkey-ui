import * as React from 'react';
import { create } from 'react-test-renderer';
import { IncorporationsSmallIcon } from '../incorporations-small';

describe('Incorporations Small Icon', () => {
  it('should show Incorporations Small Icon', () => {
    const component = create(
      <IncorporationsSmallIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





