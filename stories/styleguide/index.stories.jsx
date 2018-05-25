import * as React from 'react';

import { setAddon, storiesOf, Story } from '@storybook/react';
import { host } from 'storybook-host';
import JSXAddon from 'storybook-addon-jsx';

import H1 from '../../src/typography/headings';
import P from '../../src/typography/paragraph';
import LOGO from '../../src/images/logo'
import CREATE_BUTTON from '../../src/buttons/create-button';
import EXISTING_BUTTON from '../../src/buttons/existing-button';

import { Welcome } from './welcome';

setAddon(JSXAddon);

const lightOnDark = host({
    title: 'Light on Dark',
    align: 'center',
    background: '#262f39'
});

storiesOf('Selfkey Wallet Welcome Page', module)
    .addDecorator(lightOnDark)
    .addWithJSX('Logo', () => (
        <LOGO></LOGO>
    ))
    .addWithJSX('Header', () => (
        <H1 />
    ))
    .addWithJSX('Paragraph', () => (
        <P></P>
    ))
    .addWithJSX('Create Button', () => (
        <CREATE_BUTTON></CREATE_BUTTON>
    ))
    .addWithJSX('Existing Button', () => (
        <EXISTING_BUTTON></EXISTING_BUTTON>
    ))
    .addWithJSX('Welcome', Welcome);


