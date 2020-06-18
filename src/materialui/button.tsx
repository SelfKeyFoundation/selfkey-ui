import * as React from 'react';
import { Typography, Button } from '@material-ui/core';
import { WithStyles, withStyles, createStyles } from '@material-ui/core';

const styles =  createStyles({
    bold: {
       fontWeight: 600
    },
});

export type BackButtonProps = any;

export const BackButton = withStyles(styles)(
    ({ classes, onclick, leftPosition, position, ...props }: BackButtonProps & WithStyles<typeof styles>) => {
        return (
            <div style={{ left: leftPosition || 'initial', position: position || 'initial' }}>
                <Button variant="outlined" color="secondary" size="small" onClick={onclick}>
                    <Typography variant="subtitle2" color="secondary" className={classes.bold}>
                        ‹ Back
                    </Typography>
                </Button>
            </div>
        );
    }
);
