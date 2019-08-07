import * as React from 'react';
import { create } from 'react-test-renderer';
import DirectorIcon from '../director';

describe('Director Icon', () => {
  it('should show Director Icon', () => {
    const component = create(
      <DirectorIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});