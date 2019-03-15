import * as React from 'react';
import {
	withStyles,
	Typography,
	Grid,
	Theme,
	createStyles,
} from '@material-ui/core';
import classNames from 'classnames';
import { SimpleHourglassIcon } from '../icons/hourglass-simple';
import { FilePdfIcon } from '../icons/file-pdf';
import { FileDefaultIcon } from '../icons/file-default';

export type StatusProps = any;

const fileViewStyles = (theme: Theme) =>
	createStyles({
		status: {
            borderRadius: '4px',
			boxSizing: 'border-box',
			padding: '25px 30px',
        },
        missingStatus: {
            border: '1px solid #E98548',
        },
        grow: {
            flexGrow: 1
        },
        statusIcon: {
            marginRight: '25px'
        }
    });
    
const StatusIcon = (status: any) => {
    if (status.status === "pending") {
        return (
            <SimpleHourglassIcon />
        )
    } else if (status.status === "missing") {
        return (
            <FilePdfIcon />
        )
    } else {
        return (
            <FileDefaultIcon />
        )
    }
};

const StatusMessage = (status: any) => {
    if (status.status === "pending") {
        return (
            <Typography variant="subtitle2" color="secondary">
                Application started. Documents submitted. Please check your email for further instructions.
            </Typography>
        )
    } else if (status.status === "missing") {
        return (
            <Typography variant="subtitle2" color="secondary">
                Application started. Missing required documents.
            </Typography>
        )
    } else if (status.status === "completed") {
        return (
            <Typography variant="subtitle2" color="secondary">
                Application completed. Please check your email to recieve relevant documents and information.
            </Typography>
        )
    } else if (status.status === "denied") {
        return (
            <Typography variant="subtitle2" color="secondary">
                Application denied.  Please check your email to for the rejection reason.
            </Typography>
        )
    } else {
        return (
            <Typography variant="subtitle2" color="secondary">
                No status
            </Typography>
        )
    }
};

export const StatusInfo = withStyles(fileViewStyles)(({ classes, status }: StatusProps) => (
	<Grid item className={classNames(classes.status, classes.missingStatus)} data-status={status}>
		<Grid container direction="row" justify="space-between" alignItems="center" wrap="nowrap">
			<Grid item>
                <StatusIcon status={status} className={classes.statusIcon} />
			</Grid>
			<Grid item className={classes.grow}>
                <Typography variant="h2">
                    Status
                </Typography>
                <StatusMessage status={status} />
			</Grid>
			<Grid item>
			</Grid>
		</Grid>
	</Grid>
));
