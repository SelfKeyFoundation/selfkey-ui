import * as React from 'react';
import classNames from 'classnames';
import { Typography, Grid, Button, withStyles, createStyles } from '@material-ui/core';
import { AttributeAlertLargeIcon, SimpleCheckIcon, SimpleDeniedIcon, SimpleHourglassIcon, NewRefreshIcon } from '../icons';
import { error, success, typography, warning } from '../colors';
import { KeyTooltip, TooltipArrow } from './tooltip-arrow';
const styles = (theme) => createStyles({
    defaultStatus: {
        border: `1px solid ${success}`,
        borderRadius: '4px',
        boxSizing: 'border-box',
        padding: '25px 30px',
    },
    grow: {
        flexGrow: 1
    },
    statusIcon: {
        marginRight: '25px'
    },
    iconContainer: {
        marginRight: '25px',
        textAlign: 'center',
        width: '38px'
    },
    attribute: {
        height: '45px',
        width: '38px'
    },
    statusWrap: {
        width: '100%',
        '& .required': {
            border: `1px solid ${warning}`,
        },
        '& .submitted': {
            border: `1px solid ${typography}`
        },
        '& .denied': {
            border: `1px solid ${error}`
        }
    },
    refresh: {
        cursor: 'pointer',
        marginLeft: '30px'
    }
});
export const StatusInfo = withStyles(styles)(({ classes, status, onClick, handleRefresh, tooltip }) => {
    let icon, message, statusStyle, button = null;
    switch (status) {
        case 'Documents Required':
            icon = React.createElement(AttributeAlertLargeIcon, { className: classes.statusIcon });
            message = 'Application started. Missing required documents.';
            button = React.createElement(Button, { variant: 'contained', size: 'large', onClick: onClick }, "Add Documents");
            statusStyle = 'required';
            break;
        case 'Documents Submitted':
            icon = React.createElement(SimpleHourglassIcon, { className: classes.statusIcon });
            message =
                'Application started. Documents submitted. Please check your email for further instructions.';
            statusStyle = 'submitted';
            break;
        case 'Denied':
            icon = React.createElement(SimpleDeniedIcon, { className: classes.statusIcon });
            message = 'Application denied. Please check your email for the reject reason.';
            statusStyle = 'denied';
            break;
        default:
            icon = React.createElement(SimpleCheckIcon, { className: classes.statusIcon });
            message =
                'Application completed. Please check your email to receive relevant documents and information.';
    }
    return (React.createElement("div", { className: classes.statusWrap },
        React.createElement(Grid, { item: true, className: classNames(classes.defaultStatus, status, statusStyle) },
            React.createElement(Grid, { container: true, direction: 'row', justify: 'space-between', alignItems: 'center', wrap: 'nowrap' },
                React.createElement(Grid, { item: true, className: classes.iconContainer }, icon),
                React.createElement(Grid, { item: true, className: classes.grow },
                    React.createElement(Typography, { variant: 'h2' }, "Status"),
                    React.createElement(Typography, { variant: 'subtitle2', color: 'secondary' }, message)),
                React.createElement(Grid, { item: true }, button ? button : React.createElement("span", null)),
                React.createElement(Grid, { item: true, style: { height: '23px' } },
                    React.createElement(KeyTooltip, { interactive: true, placement: "top-start", title: React.createElement(React.Fragment, null,
                            React.createElement("span", null, tooltip),
                            React.createElement(TooltipArrow, null)) },
                        React.createElement("span", { className: classes.refresh, onClick: handleRefresh },
                            React.createElement(NewRefreshIcon, null))))))));
});
//# sourceMappingURL=statuses.js.map