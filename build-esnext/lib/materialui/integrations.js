import * as React from 'react';
import { withStyles, createStyles, Typography } from '@material-ui/core';
import { DeepIntegrationIcon, LightIntegrationIcon, AffiliateIntegrationIcon } from '../icons';
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
export const IntegrationComp = withStyles(styles)(({ classes, status, message, icon }) => {
    switch (status) {
        case 'deep':
            icon = React.createElement(DeepIntegrationIcon, null);
            message = message ? message : 'Deep Integration';
            break;
        case 'light':
            icon = React.createElement(LightIntegrationIcon, null);
            message = message ? message : 'Light Integration';
            break;
        case 'affiliate':
            icon = React.createElement(AffiliateIntegrationIcon, null);
            message = message ? message : 'Affiliate';
            break;
        default:
            icon = icon ? icon : React.createElement(DeepIntegrationIcon, null);
            message = message ? message : 'Affiliate';
    }
    return (React.createElement("div", { className: classes.integration },
        icon,
        React.createElement(Typography, { className: classes.text, variant: "subtitle1", color: "secondary" }, message)));
});
//# sourceMappingURL=integrations.js.map