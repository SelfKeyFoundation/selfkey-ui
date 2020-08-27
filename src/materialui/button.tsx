import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';

const styles =  createStyles({
    bold: {
       fontWeight: 600
    },
    button: {
        height: '36px',
        minWidth: '80px',
		width: '80px'
    }
});

export type BackButtonProps = any;

export const BackButton = withStyles(styles)(
    ({ classes, id, size, onclick, leftPosition, position, ...props }: BackButtonProps & WithStyles<typeof styles>) => {
        return (
            <div style={{ left: leftPosition || 'initial', position: position || 'initial' }}>
                <Button variant="outlined" color="secondary" size={size ? size : 'medium'} onClick={onclick} id={id} className={classes.button}>
                    <Typography variant="subtitle2" color="secondary" className={classes.bold}>
                        ‹ Back
                    </Typography>
                </Button>
            </div>
        );
    }
);
