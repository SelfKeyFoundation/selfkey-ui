import * as React from 'react';
import { create } from 'react-test-renderer';
import { CloseDialogIcon } from '../close-dialog';

describe('Close Dialog Icon', () => {
  it('should show Close Dialog Icon', () => {
    const component = create(
      <CloseDialogIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





