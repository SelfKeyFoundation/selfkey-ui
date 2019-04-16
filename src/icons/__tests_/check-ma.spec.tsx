import * as React from 'react';
import { create } from 'react-test-renderer';
import { CheckMaIcon } from '../check-ma';

describe('CheckMa Icon', () => {
  it('should show CheckMa Icon', () => {
    const component = create(
      <CheckMaIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





