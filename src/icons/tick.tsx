import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { SvgIcon } from '@material-ui/core';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const styles = createStyles({
    root: {
        height: '9px !important'
    }
});

export const TickIcon = withStyles(styles)((props: SvgIconProps & WithStyles<typeof styles>) => (
    <SvgIcon {...props} viewBox='0 0 11 9'>
        <path fill="#7896B9" fillRule="evenodd" d="M4.16 5.613l-1.54-1.54A.995.995 0 0 0 1.21 4.07l-.107.106a1.003 1.003 0 0 0 .003 1.411L3.088 7.57c.049.115.12.222.214.316a.995.995 0 0 0 1.411.003l5.41-5.41a.994.994 0 0 0-.002-1.412.995.995 0 0 0-1.412-.003L4.161 5.613z"/>
    </SvgIcon>
));

export default TickIcon;
