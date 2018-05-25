import * as React from 'react';

import H1 from '../../src/typography/headings';
import P from '../../src/typography/paragraph';
import LOGO from '../../src/images/logo'
import CREATE_BUTTON from '../../src/buttons/create-button';
import EXISTING_BUTTON from '../../src/buttons/existing-button';


export const Welcome = () => (
    <div>
        <LOGO></LOGO>
        <H1></H1>
        <P></P>
        <CREATE_BUTTON></CREATE_BUTTON>
        <EXISTING_BUTTON></EXISTING_BUTTON>
    </div>
);