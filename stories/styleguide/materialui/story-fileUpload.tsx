import * as React from 'react';
import { 
    Grid, 
    Typography
} from '@material-ui/core';
import HardDriveIcon from '../../../src/icons/hard-drive';
import { 
    TableSmallText, 
    Explanatory 
} from '../../../src/materialui/typography';

const underlineStyle = {
    textDecoration: 'underline',
}

export default function FileUploadStory () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
				File Upload
			</Typography>
            <br />
            <Grid container direction='column' alignItems='center' >
                <Grid item>
                    <HardDriveIcon />
                </Grid>
                <br />

                <Grid container direction='column' alignItems='center' justify='center'>
                    <TableSmallText>Select Document</TableSmallText>
                    <Explanatory>This is stored locally on your machnie.</Explanatory>
                </Grid>
            </Grid>
            <br/>
        </div>
    )
}