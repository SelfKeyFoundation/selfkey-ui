import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';
import { CloseButtonIcon } from '../icons/close-button';
import { SelfkeyLogo } from '../theme/selfkey-dark-theme';
import { Typography } from '@material-ui/core';

const styles = createStyles({
    root: {
        position: 'relative',
        background: '#1F2830',
        borderBottom: '1px solid #43505B',
        borderRadius: '3px 3px 0 0',
        padding: '24px 30px',
        display: 'flex',
        alignItems: 'center'
    },

    closeButton: {
        background: 'none',
        border: 'none',
        margin: 0,
        outline: 'none',
        padding: 0,
        position: 'absolute',
        top: '-18px',
        right: '-18px',
    },

    title: {
        color: '#C5DCE9',
        margin: '0',
        padding: '0 0 0 25px'
    }
});

export type LWSModalHeaderProps = {
  closeAction?: ((event: React.MouseEvent<HTMLElement>) => void),
};


export const LWSModalHeader = withStyles(styles)(({ classes, closeAction }: LWSModalHeaderProps & WithStyles<typeof styles>) => (
    <div className={classes.root}>
        <SelfkeyLogo style={{ width: '50px', height: '43px' }} />
        <Typography variant="h1" className={classes.title}>Login with SelfKey</Typography>
        <button className={classes.closeButton} onClick={closeAction}><CloseButtonIcon/></button>
    </div>
));

export default LWSModalHeader;
