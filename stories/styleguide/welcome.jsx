import * as React from 'react';

import H1 from '../../src/typography/headings';
import P from '../../src/typography/paragraph';
import LOGO from '../../src/images/logo'
import CreateButton from '../../src/buttons/create-button';
import EXISTING_BUTTON from '../../src/buttons/existing-button';


export const Welcome = () => (
    <div>
        <LOGO></LOGO>
        <H1>SELFKEY</H1>
        <P>BLOCKCHAIN IDENTITY WALLET</P>
        <CreateButton>CREATE NEW WALLET</CreateButton>
        <EXISTING_BUTTON>USE EXISTING WALLET</EXISTING_BUTTON>
    </div>
);