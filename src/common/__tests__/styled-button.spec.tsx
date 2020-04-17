import * as React from 'react';
import { create } from 'react-test-renderer';
import StyledButton from '../styled-button';


describe('Styled Button', () => {
  it('should show Styled Button', () => {
    const component = create(
        <StyledButton color="primary">Content</StyledButton>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





