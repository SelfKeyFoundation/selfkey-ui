import * as React from 'react';
import { Grid, Typography, LinearProgress } from '@material-ui/core';
import HardDriveIcon from '../../../src/icons/hard-drive';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function FileUploadInProgressStory () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
                File Upload in progress
            </Typography>
            <br />
            <Grid container direction='column' alignItems='center' >
                <Grid item>
                    <HardDriveIcon />
                </Grid>
                <Grid item>
                    <LinearProgress value={75} variant="determinate" />
                </Grid>
                <Grid container direction='column' alignItems='center' justify='center'>
                    <Typography variant="subtitle1" gutterBottom>Your National ID with Selfie</Typography>
                    <Typography variant="subtitle2" color="secondary" gutterBottom>This is stored locally.</Typography>
                </Grid>
            </Grid>
            <br/><br/>
        </div>
    )
}