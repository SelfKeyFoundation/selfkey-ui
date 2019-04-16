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
    });

export const StatusInfo = withStyles(statusInfoStyle)(({ classes, status, onClick }: StatusProps) => {
    let icon, message, statusStyle, button = null;
    switch (status) {
		case 'Documents Required':
			icon = <AttributeAlertLargeIcon className={classes.statusIcon} />;
            message = 'Application started. Missing required documents.';
            button = <Button variant='contained' size='large' onClick={onClick}>Add Documents</Button>;
            statusStyle = 'required';
			break;
        case 'Documents Submitted':
			icon = <SimpleHourglassIcon className={classes.statusIcon} />;
			message =
                'Application started. Documents submitted. Please check your email for further instructions.';
            statusStyle = 'submitted';
			break;
		case 'Denied':
			icon = <SimpleDeniedIcon className={classes.statusIcon} />;
            message = 'Application denied. Please check your email for the reject reason.';
            statusStyle = 'denied';
			break;
		default:
			icon = <SimpleCheckIcon className={classes.statusIcon} />;
			message =
				'Application completed. Please check your email to receive relevant documents and information.';
    }

    return (
        <div className={classes.statusWrap}>
            <Grid item className={classNames(classes.defaultStatus, status, statusStyle)}>
                <Grid container direction='row' justify='space-between' alignItems='center' wrap='nowrap'>
                    <Grid item className={classes.iconContainer}>
                        {icon}
                    </Grid>
                    <Grid item className={classes.grow}>
                        <Typography variant='h2'>Status</Typography>
                        <Typography variant='subtitle2' color='secondary'>
                            {message}
                        </Typography>
                    </Grid>
                    <Grid item>
                        {button ? button : <span></span>}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
});
