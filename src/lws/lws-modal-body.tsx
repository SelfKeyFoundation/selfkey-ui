import * as React from 'react';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';

const styles = createStyles({
    root: {
        '& a': {
          color: '#23E6FE',
            textDecoration: 'none',
        },
        '& a &:hover': {
            textDecoration: 'underline'
        },
        padding: '60px 70px 80px',
    },
});

export type LWSModalBodyProps = {
    children?: any
};

export const LWSModalBody = withStyles(styles)(({ classes, children }: LWSModalBodyProps & WithStyles<typeof styles>) => (
    <div className={classes.root}>
        {children}
    </div>
));

export default LWSModalBody;
