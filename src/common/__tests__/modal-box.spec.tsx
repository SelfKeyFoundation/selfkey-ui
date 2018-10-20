import * as React from 'react';
import { create } from 'react-test-renderer';
import { ModalBox } from '../modal-box';

describe('Modal Box', () => {
  it('should show Modal Box', () => {
    const component = create(
      <ModalBox headerText='Modal boc'/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





