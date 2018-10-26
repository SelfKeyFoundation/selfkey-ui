import * as React from 'react';
import { create } from 'react-test-renderer';
import { CalendarIcon } from '../calendar';

describe('Calendar  Icon', () => {
  it('should show Calendar Icon', () => {
    const component = create(
      <CalendarIcon/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





