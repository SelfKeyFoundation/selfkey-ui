import * as React from 'react';
import injectSheet, { StyleSheet, StyledComponentProps } from 'react-jss';

import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles: StyleSheet = {
    root: {
        transition: 'all 0.2s ease-out',
        '& circle': {
            stroke: '#1D505F',
            transition: 'all 0.2s ease-out',
        },
        '&:hover': {
            '& circle': {
                stroke: '#23E6FE',
            } 
        }
    }
};

export const ModalCloseIcon = injectSheet(styles)<SvgIconProps>((props: SvgIconProps & StyledComponentProps) => (
    <div style={{ height: '38px', marginLeft: '779px', marginTop: '-20px', position: 'absolute', width: '38px', cursor: 'pointer' }}>
        <SvgIcon {...props} width="38px" height="38px" viewBox="0 0 38 38" fontSize="large">
            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Close-button" transform="translate(1.000000, 1.000000)">
                    <g id="icon-close-modal">
                        <circle id="Oval-2" fill="#262F39" cx="18" cy="18" r="18"></circle>
                        <g transform="translate(9.000000, 9.000000)" fill="#23E6FE" fillRule="nonzero" id="Shape">
                            <polygon points="1.81534091 0.639204545 0.639204545 1.81534091 7.82386364 9 0.639204545 16.1846591 1.81534091 17.3607955 9 10.1761364 16.1846591 17.3607955 17.3607955 16.1846591 10.1761364 9 17.3607955 1.81534091 16.1846591 0.639204545 9 7.82386364"></polygon>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    </div>
));

export default ModalCloseIcon;
