import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({
    root: {
        '& circle': {
            stroke: '#1D505F',
            transition: 'all 0.2s ease-out',
        },
        '&:hover circle': {
            fill: '#2E3742',
            stroke: '#23E6FE',
        },
        transition: 'all 0.2s ease-out',
    }
});

export const ModalCloseIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
    <SvgIcon style={{ width: props.width || '38px', height: props.height || '38px' }} {...props} viewBox={props.viewBox || '0 0 38 38'} fontSize="large">
        <g id="Symbols" stroke="none" strokeWidth="1" fillRule="evenodd">
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
));

export default ModalCloseIcon;
