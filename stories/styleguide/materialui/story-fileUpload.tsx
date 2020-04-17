import * as React from 'react';
import {
    Grid,
    Button,
    Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import HardDriveIcon from '../../../src/icons/hard-drive';
import { base } from '../../../src/colors';
import { FileUploadInput, FileUploadLabel } from '../../../src/materialui/inputs';

const underlineStyle = {
    textDecoration: 'underline',
}

export const FileUploadGrid = withStyles({
    container: {
        backgroundColor: base,
        border: '1px solid #303C49',
        borderRadius: '4px',
        height: '400px',
        width: '760px',
    },
})(Grid);

export const FileUploadHeaderGrid = withStyles({
    item: {
        marginLeft: '-210px',
        marginTop: '-150px',
        position: 'absolute',
    },
})(Grid);

export default function FileUploadStory () {
    return (
        <div>
            <Typography variant="h3" style={underlineStyle} gutterBottom>
                File Upload
            </Typography>
            <br />
            <FileUploadGrid container direction='column' alignItems='center' justify='center' >
                <FileUploadHeaderGrid item>
                    <Typography variant='h2'>Upload Your National ID Document</Typography>
                </FileUploadHeaderGrid>

                <br />
                <Grid container justify='center' alignItems='center' direction='column'>
                    <FileUploadLabel htmlFor="key-upload">
                        <HardDriveIcon />
                        <Grid item>
                            <Typography variant="subtitle1" gutterBottom>Select Document</Typography>
                            <Typography variant="subtitle2" color="secondary" gutterBottom>This is stored locally on your machine.</Typography>
                        </Grid>
                    </FileUploadLabel>
                    <FileUploadInput
                        id="key-upload"
                        type="file"
                    />
                </Grid>
            </FileUploadGrid>
            <br/>
            <Grid container spacing={8}>
                <Grid item>
                    <Button variant='contained' size="large">Save</Button>
                </Grid>

                <Grid item>
                    <Button variant='outlined' size="large">Cancel</Button>
                </Grid>
            </Grid>
            <br/>
            <br/>
        </div>
    )
}