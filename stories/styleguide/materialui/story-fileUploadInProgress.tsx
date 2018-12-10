import * as React from 'react';
import { 
    Grid, Typography, LinearProgress
} from '@material-ui/core';
import HardDriveIcon from '../../../src/icons/hard-drive';
import { TableSmallText, Explanatory } from '../../../src/materialui/typography';

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
                    <TableSmallText>Your National ID with Selfie</TableSmallText>
                    <Explanatory>This is stored locally.</Explanatory>
                </Grid>
            </Grid>
            <br/><br/>
        </div>
    )
}