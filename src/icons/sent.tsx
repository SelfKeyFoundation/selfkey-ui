import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
    root: {
        width: '26px !important',
        height: '26px !important'
    }
};

export const SentIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (
    <SvgIcon {...props} viewBox="0 0 26 26" version="1.1">
        <title>icon-sent</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="🖥-Main-Dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="302-Dashboard-Full-State-Expanded" transform="translate(-183.000000, -1721.000000)" fill="#1CBA7D" fillRule="nonzero">
                <g id="Transactions" transform="translate(150.000000, 1616.000000)">
                    <g id="Table" transform="translate(29.000000, 105.000000)">
                        <g id="Col0" transform="translate(1.000000, 0.000000)">
                            <g id="icon-sent" transform="translate(3.000000, 0.000000)">
                                <path d="M25.7980284,0.108955359 C25.6375046,-0.0170252371 25.4180545,-0.0353127689 25.2372116,0.0622204915 L0.268670245,13.586847 C0.0878272622,13.6843804 -0.0178341427,13.8814795 0.0024853082,14.0867058 C0.0207728401,14.2919321 0.15894495,14.4666796 0.354011679,14.5296696 L7.45159628,16.846087 L6.76479858,23.8725534 C6.74244705,24.0960671 6.86639609,24.3073893 7.07162242,24.3947631 C7.13664466,24.4252424 7.20776287,24.4394662 7.27684874,24.4394662 C7.42111697,24.4394662 7.56335287,24.3785076 7.66291857,24.2647186 L12.1392932,19.2072074 L18.8792555,25.8516676 C18.9767889,25.9471692 19.1068333,26 19.2409415,26 C19.2876763,26 19.3344112,25.9918722 19.3811455,25.9796803 C19.5579249,25.9309136 19.6960972,25.7886777 19.7408002,25.6098665 L25.9829355,0.641325233 C26.0317022,0.442194354 25.960584,0.232903879 25.7980284,0.108955359 Z M8.4960158,16.7505859 L18.6455817,8.54355957 L11.7288406,18.1201167 L7.94332673,22.3932973 L8.4960158,16.7505859 Z" id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </SvgIcon>
));

export default SentIcon;
