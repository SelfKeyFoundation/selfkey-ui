import * as React from 'react';
import classNames from 'classnames';
import {
    withStyles,
    Typography,
    Grid,
    Theme,
    createStyles,
    Button,
} from '@material-ui/core';
import { 
    AttributeAlertLargeIcon,
    SimpleCheckIcon,
    SimpleDeniedIcon,
    SimpleHourglassIcon,
    error,
    success,
    typography,
    warning
} from '../theme/selfkey-dark-theme';

export type StatusProps = any;

const statusInfoStyle = (theme: Theme) =>
    createStyles({
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
            '& .DocumentsRequired': {
                border: `1px solid ${warning}`,
            },
            '& .DocumentsSubmitted': {
                border: `1px solid ${typography}`
            },
            '& .Denied': {
                border: `1px solid ${error}`
            }
        },
    });

const StatusIcon = (status: StatusProps) => {
    if (status.status === 'DocumentsRequired') {
        return (
            <AttributeAlertLargeIcon />
        )
    } else if (status.status === 'DocumentsSubmitted') {
        return (
            <SimpleHourglassIcon />
        )
    } else if (status.status === 'Denied') {
        return (
            <SimpleDeniedIcon />
        )
    } else {
        return (
            <SimpleCheckIcon />
        )
    }
};

const StatusMessage = (status: StatusProps) => {
    if (status.status === 'DocumentsRequired') {
        return (
            <Typography variant='subtitle2' color='secondary'>
                Application started. Missing required documents.
            </Typography>
        )
    } else if (status.status === 'DocumentsSubmitted') {
        return (
            <Typography variant='subtitle2' color='secondary'>
                Application started. Documents submitted. Please check your email for further instructions.
            </Typography>
        )
    } else if (status.status === 'Denied') {
        return (
            <Typography variant='subtitle2' color='secondary'>
                Application denied.  Please check your email to for the rejection reason.
            </Typography>
        )
    } else {
        return (
            <Typography variant='subtitle2' color='secondary'>
                Application completed. Please check your email to recieve relevant documents and information.
            </Typography>
        )
    }
};

const StatusButton = (status: StatusProps) => {
    if (status.status === 'DocumentsRequired') {
        return (
            <Button variant='contained' size='large'>Add Documents</Button>
        )
    } else {
        return (
            <span></span>
        )
    }
};

export const StatusInfo = withStyles(statusInfoStyle)(({ classes, status }: StatusProps) => (
    <div className={classes.statusWrap}>
        <Grid item className={classNames(classes.defaultStatus, classes.pending, status)}>
            <Grid container direction='row' justify='space-between' alignItems='center' wrap='nowrap'>
                <Grid item className={classes.iconContainer}>
                    <StatusIcon status={status} className={classes.statusIcon} />
                </Grid>
                <Grid item className={classes.grow}>
                    <Typography variant='h2'>Status</Typography>
                    <StatusMessage status={status} />
                </Grid>
                <Grid item>
                    <StatusButton status={status} />
                </Grid>
            </Grid>
        </Grid>
    </div>
));
