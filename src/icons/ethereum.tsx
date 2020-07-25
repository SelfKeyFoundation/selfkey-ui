import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({});

export const EthereumIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
    <SvgIcon style={{ width: props.width || '44px', height: props.height || '44px' }} {...props} viewBox={props.viewBox || '0 0 44 44'}>
        <g fill="none" fillRule="evenodd">
        <rect width="44" height="44" fill="#9418DC" rx="9"/>
        <path fill="#FFF" fillRule="nonzero" d="M11.37 20.286l10.027-4.1 9.719 4.205L21.382 5.5 11.37 20.286zm.031 4.55l10.012 5.627 10.212-5.627L21.505 38.5 11.401 24.836zm10.043-6.645l10.15 4.385-10.15 5.508L11 22.456l10.444-4.265z"/>
        </g>
    </SvgIcon>
));

export default EthereumIcon;
