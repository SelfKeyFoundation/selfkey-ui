import * as React from 'react';
import { WithStyles, withStyles, createStyles, Typography } from '@material-ui/core';
import { DeepIntegrationIcon, LightIntegrationIcon, AffiliateIntegrationIcon } from '../icons';

export type IntegrationProps = any;

const styles = createStyles({
    integration: {
        alignItems: 'center',
        background: 'linear-gradient(0deg, rgba(30,38,46,1) 0%, rgba(34,43,52,1) 100%)',
        borderRadius: '4px',
        display: 'flex',
        width: 'fit-content'
    },
    text: {
        fontSize: '12px',
        marginLeft: '6px',
        marginRight: '6px',
        textTransform: 'capitalize'
    }
});

export const IntegrationComp = withStyles(styles)(({ classes, status, message, icon }: IntegrationProps & WithStyles<typeof styles>) => {
    switch (status) {
        case 'deep':
            icon = <DeepIntegrationIcon />;
            message = message ? message : 'Deep Integration';
            break;
        case 'light':
            icon = <LightIntegrationIcon />;
            message = message ? message : 'Light Integration';
            break;
        case 'affiliate':
            icon = <AffiliateIntegrationIcon />;
            message = message ? message : 'Affiliate';
            break;
        default:
            icon = icon ? icon : <DeepIntegrationIcon />;
            message = message ? message : 'Affiliate';
    }

    return (
        <div className={classes.integration}>
            {icon}
            <Typography className={classes.text} variant="subtitle1" color="secondary">
                {message}
            </Typography>
        </div>
    )
});
