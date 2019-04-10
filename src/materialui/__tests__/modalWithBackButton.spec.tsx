import * as React from 'react';
import { create } from 'react-test-renderer';
import ModalWithBackButton from '../modalWithBackButton';

describe('Modal With Back Button', () => {
  it('should show Modal With Back Button', () => {
    const component = create(
        <ModalWithBackButton />
    );

    const root = component.root;
    const modalBackBtn = root.find(element => element.props.className === 'test');
    modalBackBtn.props.onClose();

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
