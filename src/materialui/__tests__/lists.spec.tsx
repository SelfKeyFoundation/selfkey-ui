import * as React from 'react';
import { create } from 'react-test-renderer';
import {
    DefaultBullet,
    GreenTick,
    DeniedTick,
    HourGlassIcon,
    CheckedIcon,
    StepIcon,
    Line
} from '../../icons';

describe('Line', () => {
  it('should show Line', () => {
    const component = create(
        <Line />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Default Bullet', () => {
  it('should show Default Bullet icon', () => {
    const component = create(
        <DefaultBullet />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('GreenTick', () => {
  it('should show GreenTick icon', () => {
    const component = create(
        <GreenTick />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('DeniedTick', () => {
  it('should show DeniedTick icon', () => {
    const component = create(
        <DeniedTick />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('HourGlassIcon', () => {
  it('should show HourGlassIcon icon', () => {
    const component = create(
        <HourGlassIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('CheckedIcon', () => {
  it('should show CheckedIcon', () => {
    const component = create(
        <CheckedIcon item='' />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('CheckedIcon verified', () => {
  it('should show CheckedIcon verified', () => {
    const component = create(
      <CheckedIcon item='verified' />
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

describe('CheckedIcon unverified', () => {
  it('should show CheckedIcon unverified', () => {
    const component = create(
        <CheckedIcon item='unverified' />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('StepIcon', () => {
  it('should show StepIcon icon', () => {
    const component = create(
        <StepIcon />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
