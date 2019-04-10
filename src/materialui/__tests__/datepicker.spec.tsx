import * as React from 'react';
import { create } from 'react-test-renderer';
import KeyPicker from '../datepicker';

describe('Datepicker', () => {
  it('should show Datepicker', () => {
    const component = create(
        <KeyPicker
            includeTime
            onFocus={(evt: any) => console.log(evt)}
            onChange={(data: any) => console.log(data)}
            onBlur={(evt: any) => console.log(evt)}
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show Datepicker onBlur', () => {
    const component = create(
        <KeyPicker
            includeTime
            onBlur={(evt: any) => console.log(evt)}
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should show Datepicker onFocus', () => {
    const component = create(
        <KeyPicker
            includeTime
            onFocus={(evt: any) => console.log(evt)}
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
          
  it('should show Datepicker onChange', () => {
    const component = create(
        <KeyPicker
            includeTime
            onChange={(data: any) => console.log(data)}
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });   
});